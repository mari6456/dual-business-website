import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cosmetics", label: "Cosmetics" },
  { href: "/ai-training", label: "AI Training" },
  { href: "/profile", label: "Profile" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const usesDarkHeroHeader = location === "/ai-training" && !isScrolled && !isMobileOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-[oklch(0.92_0.005_80)]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" aria-label="UNFRAME ホーム">
              <span className="hidden sm:block brand-logo-frame brand-logo-frame--header" aria-hidden="true">
                <img
                  src={usesDarkHeroHeader
                    ? "/images/brand/unframe-logo-monochrome-white.svg"
                    : "/images/brand/unframe-logo-primary.svg"}
                  alt=""
                  className="brand-logo-image"
                />
              </span>
              <span className="block sm:hidden brand-mark-frame" aria-hidden="true">
                <img
                  src="/images/brand/unframe-mark-primary.svg"
                  alt=""
                  className={`brand-mark-image ${usesDarkHeroHeader ? "brand-mark-image--reverse" : ""}`}
                />
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                      location === link.href
                        ? usesDarkHeroHeader ? "text-[#8fddf3]" : "text-rose-gold"
                        : usesDarkHeroHeader ? "text-white/75 hover:text-white" : "text-foreground/70 hover:text-rose-gold"
                    }`}
                    style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 ${usesDarkHeroHeader ? "text-white" : ""}`}
              aria-label="メニュー"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF9F6] transition-all duration-500 lg:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-2xl tracking-[0.15em] transition-all duration-500 ${
                  isMobileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } ${
                  location === link.href
                    ? "text-rose-gold"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                style={{
                  fontFamily: "var(--font-heading)",
                  transitionDelay: isMobileOpen ? `${i * 0.08}s` : "0s",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
