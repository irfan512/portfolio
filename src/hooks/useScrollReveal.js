import { useEffect } from "react";

// Reveals every [data-reveal] element once, as it approaches the viewport.
// Only acts when the inline script in index.html has opted the page into
// motion. Uses a data attribute rather than a class so React re-renders
// never strip the revealed state.
export default function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion")) return undefined;

    let observer;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-revealed", "");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -40px 0px", threshold: 0 }
      );
      document.querySelectorAll("[data-reveal]:not([data-revealed])").forEach((el) => observer.observe(el));
      root.classList.add("motion-live");
    } catch (error) {
      // Never leave content hidden because motion failed to start.
      root.classList.remove("motion");
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);
}
