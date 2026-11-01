// Client for the PortfolioAI backend (https://github.com/irfan512/portfolio-ai-backend,
// docs/api.md). Loaded with the chat panel only.
import { API_URL, CITATION_PREFIX } from "./config";

export const REQUEST_TIMEOUT_MS = 75000; // backend allows Gemini up to 60 s

const KNOWN_CODES = new Set(["rate_limited", "busy", "timeout", "service_unavailable", "invalid_request"]);

export class ChatError extends Error {
  constructor(code, { retryAfter = null, requestId = null } = {}) {
    super(code);
    this.name = "ChatError";
    this.code = code;
    this.retryAfter = retryAfter;
    this.requestId = requestId;
  }
}

function safeCitations(list) {
  if (!Array.isArray(list)) return [];
  const seen = new Set();
  return list.filter((c) => {
    const ok =
      c &&
      typeof c.url === "string" &&
      c.url.startsWith(CITATION_PREFIX) &&
      typeof c.section === "string" &&
      !seen.has(`${c.url}|${c.section}`);
    if (ok) seen.add(`${c.url}|${c.section}`);
    return ok;
  });
}

/**
 * POST /api/v1/chat. Resolves to { answer, citations, sessionId, insufficientEvidence }
 * or rejects with a ChatError whose `code` is one of: rate_limited, busy, timeout,
 * service_unavailable, invalid_request, network, aborted, unexpected.
 */
export async function askPortfolioAI(message, sessionId, { signal, timeoutMs = REQUEST_TIMEOUT_MS, baseUrl = API_URL } = {}) {
  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  const onAbort = () => controller.abort();
  if (signal) signal.addEventListener("abort", onAbort, { once: true });

  let response;
  let body;
  try {
    response = await fetch(`${baseUrl}/api/v1/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, session_id: sessionId || null }),
      credentials: "omit",
      signal: controller.signal,
    });
    // Still under the same timeout and abort signal: a cancelled request never
    // resolves with a late body.
    body = await response.json().catch((error) => {
      if (error && error.name === "AbortError") throw error;
      return null;
    });
  } catch (error) {
    if (error && error.name === "AbortError") throw new ChatError(timedOut ? "timeout" : "aborted");
    throw new ChatError("network");
  } finally {
    clearTimeout(timer);
    if (signal) signal.removeEventListener("abort", onAbort);
  }
  if (!response.ok) {
    const code = body && body.error && KNOWN_CODES.has(body.error.code) ? body.error.code : "unexpected";
    const retryAfter = Number(response.headers.get("Retry-After")) || null;
    throw new ChatError(code, { retryAfter, requestId: body && body.error ? body.error.request_id : null });
  }
  if (!body || typeof body.answer !== "string") throw new ChatError("unexpected");

  return {
    answer: body.answer,
    citations: safeCitations(body.citations),
    sessionId: typeof body.session_id === "string" ? body.session_id : null,
    insufficientEvidence: Boolean(body.insufficient_evidence),
  };
}
