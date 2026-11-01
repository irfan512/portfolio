import React from "react";
import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatWidget, { sectionIdFromUrl } from "./ChatWidget";
import { askPortfolioAI, ChatError } from "../api/portfolioAi";
import { assistantCopy } from "../Details";

const SITE = "https://irfan512.github.io/portfolio/";

function reply(status, body, headers = {}) {
  return Promise.resolve({
    ok: status >= 200 && status < 300,
    status,
    headers: { get: (name) => headers[name] ?? null },
    json: () => Promise.resolve(body),
  });
}

const answer = (overrides = {}) => ({
  answer: "Irfan built goCare, a telemedicine app.",
  citations: [{ title: "Selected work", section: "goCare", url: `${SITE}#work` }],
  session_id: "session_abcdefghijklmnop",
  insufficient_evidence: false,
  ...overrides,
});

async function openChat() {
  render(<ChatWidget />);
  userEvent.click(screen.getByRole("button", { name: assistantCopy.open }));
  return screen.findByRole("textbox", { name: assistantCopy.inputLabel });
}

function sentBodies() {
  return global.fetch.mock.calls.map(([, init]) => JSON.parse(init.body));
}

beforeEach(() => {
  global.fetch = jest.fn();
  window.matchMedia = jest.fn().mockReturnValue({ matches: false });
  Element.prototype.scrollIntoView = jest.fn();
});

test("opens with a welcome, suggestions and focus in the question box", async () => {
  const input = await openChat();
  expect(screen.getByRole("dialog", { name: assistantCopy.name })).toHaveAttribute("data-open", "true");
  expect(screen.getByText(assistantCopy.welcome, { exact: false })).toBeInTheDocument();
  assistantCopy.suggestions.forEach((s) => expect(screen.getByRole("button", { name: s })).toBeInTheDocument());
  await waitFor(() => expect(input).toHaveFocus());
});

test("Enter sends; the answer shows with portfolio citations; follow-ups reuse the session", async () => {
  global.fetch.mockReturnValueOnce(reply(200, answer())).mockReturnValueOnce(reply(200, answer({ answer: "Flutterwave." })));
  const input = await openChat();

  userEvent.type(input, "Has Irfan built a healthcare app?{enter}");
  expect(screen.getByText(assistantCopy.searching)).toBeInTheDocument();
  expect(await screen.findByText("Irfan built goCare, a telemedicine app.")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "goCare" })).toHaveAttribute("href", `${SITE}#work`);

  userEvent.type(input, "Which payment provider did it use?{enter}");
  expect(await screen.findByText("Flutterwave.")).toBeInTheDocument();

  const [first, second] = sentBodies();
  expect(global.fetch.mock.calls[0][0]).toBe("https://portfolio-ai.test/api/v1/chat");
  expect(first).toEqual({ message: "Has Irfan built a healthcare app?", session_id: null });
  expect(second).toEqual({ message: "Which payment provider did it use?", session_id: "session_abcdefghijklmnop" });
});

test("duplicate submissions are ignored while a request is pending", async () => {
  let resolve;
  global.fetch.mockReturnValue(new Promise((r) => (resolve = r)));
  const input = await openChat();
  userEvent.type(input, "First question{enter}");
  userEvent.type(input, "Second question{enter}");
  expect(screen.getByRole("button", { name: assistantCopy.sending })).toBeDisabled();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  await act(async () => resolve(await reply(200, answer())));
  expect(await screen.findByText("Irfan built goCare, a telemedicine app.")).toBeInTheDocument();
});

test("insufficient evidence is shown gracefully, without sources", async () => {
  global.fetch.mockReturnValueOnce(
    reply(200, answer({ answer: "I couldn't find that in the portfolio.", citations: [], insufficient_evidence: true }))
  );
  const input = await openChat();
  userEvent.type(input, "What is his hourly rate?{enter}");
  expect(await screen.findByText(assistantCopy.notInPortfolio)).toBeInTheDocument();
  expect(screen.queryByText(assistantCopy.sources)).not.toBeInTheDocument();
});

test("citations that do not point into the portfolio are never rendered", async () => {
  global.fetch.mockReturnValueOnce(
    reply(200, answer({ citations: [{ title: "x", section: "Evil", url: "https://evil.example/#work" }, { title: "x", section: "JS", url: ["javascript", "alert(1)"].join(":") }] }))
  );
  const input = await openChat();
  userEvent.type(input, "Question{enter}");
  await screen.findByText("Irfan built goCare, a telemedicine app.");
  expect(screen.queryByRole("link", { name: "Evil" })).not.toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "JS" })).not.toBeInTheDocument();
});

test("answers are rendered as plain text, never as HTML", async () => {
  global.fetch.mockReturnValueOnce(reply(200, answer({ answer: '<img src=x onerror="alert(1)"> hi' })));
  const input = await openChat();
  userEvent.type(input, "Question{enter}");
  expect(await screen.findByText('<img src=x onerror="alert(1)"> hi')).toBeInTheDocument();
  expect(screen.queryByRole("img")).not.toBeInTheDocument();
});

test.each([
  [429, "rate_limited", assistantCopy.errors.rate_limited],
  [503, "busy", assistantCopy.errors.busy],
  [503, "service_unavailable", assistantCopy.errors.service_unavailable],
  [504, "timeout", assistantCopy.errors.timeout],
])("HTTP %s %s shows a clear message", async (status, code, message) => {
  global.fetch.mockReturnValueOnce(reply(status, { error: { code, message: "x", request_id: "r1" } }));
  const input = await openChat();
  userEvent.type(input, "Question{enter}");
  expect(await screen.findByText(message)).toBeInTheDocument();
});

test("a network failure offers a retry that re-sends without duplicating the question", async () => {
  global.fetch.mockRejectedValueOnce(new TypeError("Failed to fetch")).mockReturnValueOnce(reply(200, answer()));
  const input = await openChat();
  userEvent.type(input, "Has Irfan built a healthcare app?{enter}");
  expect(await screen.findByText(assistantCopy.errors.network)).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: assistantCopy.retry }));
  expect(await screen.findByText("Irfan built goCare, a telemedicine app.")).toBeInTheDocument();
  expect(screen.getAllByText("Has Irfan built a healthcare app?")).toHaveLength(1);
  expect(global.fetch).toHaveBeenCalledTimes(2);
});

test("clear conversation resets messages and starts a new session", async () => {
  global.fetch.mockReturnValueOnce(reply(200, answer())).mockReturnValueOnce(reply(200, answer()));
  const input = await openChat();
  userEvent.type(input, "Question one{enter}");
  await screen.findByText("Irfan built goCare, a telemedicine app.");

  userEvent.click(screen.getByRole("button", { name: assistantCopy.clear }));
  expect(screen.queryByText("Question one")).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: assistantCopy.suggestions[0] })).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: assistantCopy.suggestions[0] }));
  await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
  expect(sentBodies()[1].session_id).toBeNull();
});

test("Escape closes the chat and returns focus to the launcher", async () => {
  await openChat();
  fireEvent.keyDown(document, { key: "Escape" });
  const launcher = screen.getByRole("button", { name: assistantCopy.open });
  expect(launcher).toHaveAttribute("aria-expanded", "false");
  await waitFor(() => expect(launcher).toHaveFocus());
});

test("same-page sources map to a section id; other pages and sites do not", () => {
  const live = { origin: "https://irfan512.github.io", pathname: "/portfolio/" };
  expect(sectionIdFromUrl(`${SITE}#work`, live)).toBe("work");
  expect(sectionIdFromUrl(`${SITE}#experience`, live)).toBe("experience");
  expect(sectionIdFromUrl(`${SITE}`, live)).toBeNull(); // no section
  expect(sectionIdFromUrl("https://irfan512.github.io/other/#work", live)).toBeNull();
  expect(sectionIdFromUrl("https://evil.example/portfolio/#work", live)).toBeNull();
  expect(sectionIdFromUrl("not a url", live)).toBeNull();
});

describe("askPortfolioAI", () => {
  test("times out with a ChatError", async () => {
    jest.useFakeTimers();
    global.fetch.mockImplementation((_, { signal }) => new Promise((_, reject) => signal.addEventListener("abort", () => reject(Object.assign(new Error("aborted"), { name: "AbortError" })))));
    const pending = askPortfolioAI("q", null, { timeoutMs: 1000, baseUrl: "https://portfolio-ai.test" });
    jest.advanceTimersByTime(1000);
    await expect(pending).rejects.toEqual(expect.objectContaining({ code: "timeout" }));
    jest.useRealTimers();
  });

  test("unknown error codes become 'unexpected'", async () => {
    global.fetch.mockReturnValueOnce(reply(500, { error: { code: "internal_error" } }));
    await expect(askPortfolioAI("q", null, { baseUrl: "https://portfolio-ai.test" })).rejects.toBeInstanceOf(ChatError);
  });
});

test("clearing while an answer is in flight discards that answer and its session", async () => {
  let resolve;
  global.fetch.mockReturnValueOnce(new Promise((r) => (resolve = r))).mockReturnValueOnce(reply(200, answer({ answer: "Fresh." })));
  const input = await openChat();
  userEvent.type(input, "Slow question{enter}");
  userEvent.click(screen.getByRole("button", { name: assistantCopy.clear }));
  await act(async () => resolve(await reply(200, answer({ answer: "Stale answer." }))));
  expect(screen.queryByText("Stale answer.")).not.toBeInTheDocument();

  userEvent.type(input, "New question{enter}");
  expect(await screen.findByText("Fresh.")).toBeInTheDocument();
  expect(sentBodies()[1].session_id).toBeNull(); // the stale session was not restored
});

test("an invalid request keeps the question in the box to edit", async () => {
  global.fetch.mockReturnValueOnce(reply(422, { error: { code: "invalid_request", message: "x" } }));
  const input = await openChat();
  userEvent.type(input, "Too long a question{enter}");
  expect(await screen.findByText(assistantCopy.errors.invalid_request)).toBeInTheDocument();
  expect(input).toHaveValue("Too long a question");
  expect(screen.queryByRole("button", { name: assistantCopy.retry })).not.toBeInTheDocument();
});

test("rate limiting shows how long to wait when the server says", async () => {
  global.fetch.mockReturnValueOnce(reply(429, { error: { code: "rate_limited" } }, { "Retry-After": "30" }));
  const input = await openChat();
  userEvent.type(input, "Question{enter}");
  expect(await screen.findByText(/wait 30 seconds/)).toBeInTheDocument();
});

test("on small screens the chat is modal and Tab stays inside it", async () => {
  window.matchMedia = jest.fn().mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });
  const input = await openChat();
  const dialog = screen.getByRole("dialog", { name: assistantCopy.name });
  expect(dialog).toHaveAttribute("aria-modal", "true");
  expect(document.body.style.overflow).toBe("hidden");

  // Clear is disabled and Send is disabled while the box is empty, so the question
  // box is the last focusable element and Close is the first.
  input.focus();
  userEvent.tab();
  expect(within(dialog).getByRole("button", { name: assistantCopy.close })).toHaveFocus();
  userEvent.tab({ shift: true });
  expect(input).toHaveFocus();
});

test("a long Retry-After never asks visitors to wait for hours", async () => {
  global.fetch.mockReturnValueOnce(reply(429, { error: { code: "rate_limited" } }, { "Retry-After": "41000" }));
  const input = await openChat();
  userEvent.type(input, "Question{enter}");
  expect(await screen.findByText(assistantCopy.errors.rate_limited)).toBeInTheDocument();
  expect(screen.queryByText(/41000/)).not.toBeInTheDocument();
});
