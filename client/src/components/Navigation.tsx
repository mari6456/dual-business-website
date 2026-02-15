/*
Design Philosophy: Minimal Luxe × Asymmetric Dynamism
Navigation: Fixed header with subtle backdrop blur, champagne gold accents on hover
*/

import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "ホーム" },
    { href: "/cosmetics", label: "化粧品事業" },
    { href: "/ai-training", label: "AI研修" },
    { href: "/about", label: "会社情報" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[var(--color-champagne-gold)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-[var(--color-deep-brown)] font-bold text-lg">
                  DB
                </span>
              </div>
              <span className="text-xl font-semibold text-foreground hidden sm:block">
                Dual Business
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors duration-300 cursor-pointer relative group ${
                    location === link.href
                      ? "text-[var(--color-champagne-gold)]"
                      : "text-foreground hover:text-[var(--color-champagne-gold)]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--color-champagne-gold)] transform origin-left transition-transform duration-300 ${
                      location === link.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`block py-2 text-base font-medium transition-colors duration-300 cursor-pointer ${
                    location === link.href
                      ? "text-[var(--color-champagne-gold)]"
                      : "text-foreground hover:text-[var(--color-champagne-gold)]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
