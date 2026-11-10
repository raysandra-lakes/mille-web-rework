import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function useScrollReveal(pathname: string) {
  useEffect(() => {
    // Re-run after paint so newly mounted elements are in the DOM
    const raf = requestAnimationFrame(() => {
      const targets = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");
      if (!targets.length) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      targets.forEach((t) => observer.observe(t));
      return () => observer.disconnect();
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);
}

export default function Root() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useScrollReveal(pathname);

  return (
    <div style={{ minHeight: "100%", background: "var(--background)", fontFamily: "var(--font-body-family)" }}>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
