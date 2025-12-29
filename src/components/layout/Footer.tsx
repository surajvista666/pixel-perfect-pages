import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/who-we-are", label: "About Us" },
      { href: "/what-we-do", label: "Services" },
      { href: "/industries", label: "Industries" },
      { href: "/contact", label: "Contact" },
    ],
    services: [
      { href: "/what-we-do", label: "Customer Support" },
      { href: "/what-we-do", label: "Back Office" },
      { href: "/what-we-do", label: "Data Entry" },
      { href: "/what-we-do", label: "Virtual Assistance" },
    ],
    industries: [
      { href: "/industries", label: "Finance" },
      { href: "/industries", label: "Healthcare" },
      { href: "/industries", label: "E-commerce" },
      { href: "/industries", label: "Technology" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-mono font-bold text-lg">T</span>
              </div>
              <span className="font-mono font-bold text-lg tracking-wider text-foreground">
                TOTAL EDGE
              </span>
            </Link>
            <p className="body-md mb-6">
              Providing End-to-End Specialized Solutions Globally
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Total Edge. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
