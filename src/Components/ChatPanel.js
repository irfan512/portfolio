import React, { useCallback, useEffect, useRef, useState } from "react";
import { assistantCopy } from "../Details";
import { askPortfolioAI } from "../api/portfolioAi";
import { ChatIcon, CloseIcon, ResetIcon, SendIcon } from "./Icons";

// Conversation state lives in memory only: closing the tab forgets it, and
// "Clear conversation" also starts a new backend session.
const WELCOME = { id: "welcome", role: "assistant", text: assistantCopy.welcome, citations: [] };
const GENERATING_AFTER_MS = 2500;

let lastId = 0;
const nextId = () => `m${(lastId += 1)}`;

function Message({ message, onNavigate }) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end" data-message={message.id}>
        <p className="max-w-[85%] rounded-xl rounded-br-md bg-accent text-white px-3.5 py-2.5 text-[15px] leading-relaxed whitespace-pre-wrap wrap-anywhere">
          <span className="sr-only">{assistantCopy.you}: </span>
          {message.text}
        </p>
      </div>
    );
  }
  return (
    <div
      data-message={message.id}
      className="max-w-[92%] rounded-xl rounded-bl-md border border-line bg-surface px-3.5 py-2.5 text-[15px] leading-relaxed text-ink"
    >
      <p className="whitespace-pre-wrap wrap-anywhere">
        <span className="sr-only">{assistantCopy.name}: </span>
        {message.text}
      </p>
      {message.insufficient && !message.outOfScope && (
        <p className="mt-2 text-[14px] text-subtle">{assistantCopy.notInPortfolio}</p>
      )}
      {message.citations && message.citations.length > 0 && (
        <div className="mt-2 pt-2 border-t border-line">
          <p className="text-[14px] font-semibold text-ink">{assistantCopy.sources}</p>
          <ul className="flex flex-wrap gap-x-4">
            {message.citations.map((citation) => (
              <li key={`${citation.url}|${citation.section}`}>
                <a
                  href={citation.url}
                  onClick={(e) => onNavigate(e, citation.url)}
                  className="link text-[14px]"
                >
                  {citation.section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Waiting({ label }) {
  return (
    <div className="flex items-center gap-2.5 px-1 text-[15px] text-subtle">
      <span aria-hidden="true" className="inline-flex gap-1">
        <span className="chat-dot w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="chat-dot w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="chat-dot w-1.5 h-1.5 rounded-full bg-accent" />
      </span>
      {label}
    </div>
  );
}

function ChatPanel({ isOpen, onClose, onNavigate, ask = askPortfolioAI }) {
  const [messages, setMessages] = useState([WELCOME]);
  const [draft, setDraft] = useState("");
  const [phase, setPhase] = useState(null); // null | "searching" | "generating"
  const [failure, setFailure] = useState(null); // { code, question }
  const sessionRef = useRef(null);
  const pendingRef = useRef(false); // guards double submits within one render
  const abortRef = useRef(null);
  const inputRef = useRef(null);
  const logRef = useRef(null);

  const pending = phase !== null;

  // Opening the chat puts the cursor in the question box.
  useEffect(() => {
    if (!isOpen) return undefined;
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  // The question box grows with its text, up to its max height (max-h-32).
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    input.style.height = "auto";
    input.style.height = `${input.scrollHeight}px`;
  }, [draft]);

  // Keep the newest content in view. A new answer is shown from its first line,
  // so a long reply is read from the top rather than scrolled past.
  useEffect(() => {
    const log = logRef.current;
    if (!log) return;
    const last = messages[messages.length - 1];
    const node = last.role === "assistant" && last.id !== "welcome" && !phase && !failure
      ? log.querySelector(`[data-message="${last.id}"]`)
      : null;
    log.scrollTop = node ? Math.max(0, node.offsetTop - log.offsetTop - 12) : log.scrollHeight;
  }, [messages, phase, failure]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const send = useCallback(
    async (text, { retry = false } = {}) => {
      const question = text.trim();
      if (!question || pendingRef.current) return;
      pendingRef.current = true;
      setFailure(null);
      if (!retry) {
        setMessages((list) => [...list, { id: nextId(), role: "user", text: question }]);
        setDraft("");
        inputRef.current?.focus(); // Send disables itself; keep focus in the box
      }
      setPhase("searching");
      const toGenerating = setTimeout(() => setPhase("generating"), GENERATING_AFTER_MS);
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const result = await ask(question, sessionRef.current, { signal: controller.signal });
        if (controller.signal.aborted) return; // cleared while the answer arrived
        sessionRef.current = result.sessionId;
        setMessages((list) => [
          ...list,
          {
            id: nextId(),
            role: "assistant",
            text: result.answer,
            citations: result.citations,
            insufficient: result.insufficientEvidence,
            outOfScope: result.outOfScope,
          },
        ]);
      } catch (error) {
        if (controller.signal.aborted || (error && error.code === "aborted")) return;
        const code = (error && error.code) || "unexpected";
        if (code === "invalid_request") setDraft(question); // keep the text to edit
        setFailure({ code, question, retryAfter: error && error.retryAfter });
      } finally {
        clearTimeout(toGenerating);
        if (abortRef.current === controller) {
          abortRef.current = null;
          pendingRef.current = false;
          setPhase(null);
        }
      }
    },
    [ask]
  );

  const clear = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    pendingRef.current = false;
    sessionRef.current = null;
    setPhase(null);
    setFailure(null);
    setDraft("");
    setMessages([WELCOME]);
    inputRef.current?.focus();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(draft);
  };

  const onKeyDown = (e) => {
    // Enter sends; Shift+Enter adds a line; never mid IME composition.
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send(draft);
    }
  };

  const errorText =
    failure &&
    (failure.code === "rate_limited" && failure.retryAfter && failure.retryAfter <= 120
      ? assistantCopy.errors.rate_limited_seconds.replace("{seconds}", String(failure.retryAfter))
      : assistantCopy.errors[failure.code] || assistantCopy.errors.unexpected);
  const canRetry = failure && failure.code !== "invalid_request";

  return (
    <>
      <div className="on-dark flex items-center gap-3 shrink-0 h-16 pl-4 pr-2 bg-ink text-white">
        <span aria-hidden="true" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
          <ChatIcon width="20" height="20" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id="portfolio-ai-title" className="text-[17px] leading-tight text-white">
            {assistantCopy.name}
          </h2>
          <p className="text-[14px] leading-tight text-haze truncate">{assistantCopy.tagline}</p>
        </div>
        <button
          type="button"
          onClick={clear}
          disabled={messages.length === 1 && !pending && !failure}
          aria-label={assistantCopy.clear}
          title={assistantCopy.clear}
          className="chat-icon-button inline-flex items-center justify-center w-11 h-11 rounded-lg text-white disabled:opacity-40 disabled:pointer-events-none"
        >
          <ResetIcon />
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label={assistantCopy.close}
          title={assistantCopy.close}
          className="chat-icon-button inline-flex items-center justify-center w-11 h-11 rounded-lg text-white"
        >
          <CloseIcon />
        </button>
      </div>

      <div
        ref={logRef}
        role="log"
        aria-live="polite"
        aria-label={assistantCopy.logLabel}
        tabIndex={0}
        className="flex-1 overflow-y-auto overscroll-contain bg-canvas px-4 py-4 space-y-3"
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} onNavigate={onNavigate} />
        ))}

        {messages.length === 1 && !pending && !failure && (
          <div className="pt-1">
            <p className="text-[14px] font-semibold text-ink">{assistantCopy.suggestionsLabel}</p>
            <ul className="mt-2 grid gap-2">
              {assistantCopy.suggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    onClick={() => send(suggestion)}
                    className="btn-secondary w-full justify-start min-h-[40px] px-3.5 py-2 text-[14px] font-medium text-left"
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pending && <Waiting label={phase === "generating" ? assistantCopy.generating : assistantCopy.searching} />}

        {failure && (
          <div className="appear p-3 rounded-lg border border-red-300 bg-red-50 text-red-800 text-[15px]">
            <p>{errorText}</p>
            {canRetry && (
              <button
                type="button"
                onClick={() => send(failure.question, { retry: true })}
                className="btn-secondary mt-2 min-h-[40px] px-3.5 text-[14px]"
              >
                {assistantCopy.retry}
              </button>
            )}
          </div>
        )}
      </div>

      <form onSubmit={onSubmit} className="shrink-0 border-t border-line bg-surface p-3">
        <label htmlFor="portfolio-ai-input" className="sr-only">
          {assistantCopy.inputLabel}
        </label>
        <div className="flex items-end gap-2">
          <textarea
            id="portfolio-ai-input"
            ref={inputRef}
            rows="1"
            maxLength={1000}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={assistantCopy.placeholder}
            className="field resize-none max-h-32"
          />
          <button
            type="submit"
            disabled={pending || !draft.trim()}
            aria-label={pending ? assistantCopy.sending : assistantCopy.send}
            className="btn-primary shrink-0 w-12 px-0 disabled:opacity-70 disabled:pointer-events-none"
          >
            <SendIcon />
          </button>
        </div>
      </form>
    </>
  );
}

export default ChatPanel;
