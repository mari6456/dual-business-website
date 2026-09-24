import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
      const target = document.getElementById(anchor);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}
