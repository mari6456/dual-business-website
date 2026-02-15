import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    ref.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-up, .image-reveal");
    elements.forEach((el) => ref.current?.observe(el));

    return () => ref.current?.disconnect();
  }, []);
}
