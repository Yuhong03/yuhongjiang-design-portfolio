// Scroll-triggered reveal for sections on index.html
(() => {
  const sections = document.querySelectorAll(".reveal");
  if (!sections.length) return;

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const reveal = (el) => el.classList.add("is-visible");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    sections.forEach(reveal);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        reveal(entry.target);
        obs.unobserve(entry.target); // animate once
      }
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  sections.forEach((el) => observer.observe(el));
})();


