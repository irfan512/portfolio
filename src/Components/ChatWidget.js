import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { assistantCopy } from "../Details";
import { API_URL, CITATION_PREFIX } from "../api/config";
import { ChatIcon, CloseIcon } from "./Icons";

// The conversation UI is loaded only when someone opens the chat (or points at
// the button), so the portfolio's first load is unchanged.
const loadPanel = () => import("./ChatPanel");

// The section id a source points to, when the source is on the page being shown
// (same origin and path). Otherwise null: the link then navigates normally.
export function sectionIdFromUrl(url, location = window.location) {
  try {
    const target = new URL(url);
    if (target.origin !== location.origin || target.pathname !== location.pathname || !target.hash) return null;
    return decodeURIComponent(target.hash.slice(1));
  } catch (error) {
    return null;
  }
}

const ChatPanel = lazy(loadPanel);

// Below md the panel fills the screen and becomes modal.
const SMALL_SCREEN = "(max-width: 767px)";

function useSmallScreen() {
  const query = () => Boolean(window.matchMedia && window.matchMedia(SMALL_SCREEN).matches);
  const [small, setSmall] = useState(query);
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const list = window.matchMedia(SMALL_SCREEN);
    const onChange = () => setSmall(list.matches);
    if (list.addEventListener) list.addEventListener("change", onChange);
    else if (list.addListener) list.addListener(onChange);
    return () => {
      if (list.removeEventListener) list.removeEventListener("change", onChange);
      else if (list.removeListener) list.removeListener(onChange);
    };
  }, []);
  return small;
}

const FOCUSABLE = 'a[href], button:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const launcherRef = useRef(null);
  const panelRef = useRef(null);
  const small = useSmallScreen();
  const modal = isOpen && small;

  const open = () => {
    setHasOpened(true);
    setIsOpen(true);
  };

  const close = useCallback(() => {
    setIsOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  }, []);

  // Escape closes and returns focus to the button, as the mobile menu does.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // Phones: the panel covers the page, so the page behind stops scrolling and
  // Tab cycles inside the panel. Re-evaluated when the screen size changes.
  useEffect(() => {
    if (!modal) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [modal]);

  const trapFocus = (e) => {
    if (!modal || e.key !== "Tab" || !panelRef.current) return;
    const items = Array.from(panelRef.current.querySelectorAll(FOCUSABLE));
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  // A source on this page closes the chat and moves focus to that section,
  // so keyboard and screen-reader users continue from where they landed.
  const goToSource = useCallback((e, url) => {
    // On the live site sources are same-page links; in local and preview builds
    // a portfolio source is still shown in place when its section exists here.
    const id =
      sectionIdFromUrl(url) ||
      (url.startsWith(CITATION_PREFIX) && url.includes("#") ? decodeURIComponent(url.split("#")[1]) : null);
    const section = id && document.getElementById(id);
    if (!section) return;
    e.preventDefault();
    setIsOpen(false);
    if (!section.hasAttribute("tabindex")) section.setAttribute("tabindex", "-1");
    section.focus({ preventScroll: true });
    section.scrollIntoView({ block: "start" });
    window.history.pushState(null, "", `#${id}`);
  }, []);

  if (!API_URL) return null; // not configured for this build: no widget at all

  return (
    <>
      <div
        id="portfolio-ai"
        ref={panelRef}
        role="dialog"
        aria-modal={modal ? "true" : "false"}
        aria-label={assistantCopy.name}
        onKeyDown={trapFocus}
        data-open={isOpen ? "true" : "false"}
        className="chat-panel fixed z-[55] inset-0 flex flex-col overflow-hidden bg-surface md:inset-auto md:bottom-24 md:right-6 md:w-[400px] md:h-[min(640px,calc(100vh_-_8rem))] md:rounded-xl md:border md:border-line md:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.45)]"
      >
        {hasOpened && (
          <Suspense
            fallback={<p className="m-auto text-[15px] text-subtle">{assistantCopy.loadingPanel}</p>}
          >
            <ChatPanel isOpen={isOpen} onClose={close} onNavigate={goToSource} />
          </Suspense>
        )}
      </div>

      <button
        ref={launcherRef}
        type="button"
        onClick={() => (isOpen ? close() : open())}
        onPointerEnter={loadPanel}
        onFocus={loadPanel}
        aria-expanded={isOpen}
        aria-controls="portfolio-ai"
        aria-label={isOpen ? assistantCopy.close : assistantCopy.open}
        className={`chat-launcher fixed z-[55] bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 items-center justify-center rounded-full bg-accent text-white hover:bg-accent-hover shadow-[0_10px_24px_-10px_rgba(67,56,202,0.55)] ${
          isOpen ? "hidden md:inline-flex" : "inline-flex"
        }`}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </>
  );
}

export default ChatWidget;
