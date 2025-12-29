import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/industries", label: "Industries We Serve" },
    { href: "/careers", label: "Careers" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-12">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
              <path d="M4 4H28V8H18V28H14V8H4V4Z" fill="currentColor"/>
              <path d="M20 12H28V16H24V28H20V12Z" fill="currentColor"/>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-6 text-sm font-medium transition-colors ${
                  isActive(link.href) 
                    ? "bg-card text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2 rounded text-sm font-medium hover:border-primary transition-colors"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-3 px-4 text-sm font-medium rounded ${
                    isActive(link.href) 
                      ? "bg-card text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 border border-border text-foreground px-5 py-3 rounded text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
