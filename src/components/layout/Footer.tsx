import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };

  const pages = [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "About" },
    { href: "/what-we-do", label: "Services" },
    { href: "/careers", label: "Career" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "Business planning",
    "Business setup",
    "Market research",
    "Branding & marketing",
    "Financial guidance",
    "Ongoing support",
  ];

  const socials = [
    { label: "Facebook", href: "#" },
    { label: "Linkedin", href: "#" },
    { label: "Youtube", href: "#" },
    { label: "X/Twitter", href: "#" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Contact Info Bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8 border-b border-border">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-mono">PHONE</span>
            </div>
            <div className="space-y-1">
              <p className="text-primary text-sm">(217) 555-0134</p>
              <p className="text-primary text-sm">(217) 555-0142</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-mono">EMAIL</span>
            </div>
            <div className="space-y-1">
              <p className="text-primary text-sm">BPO@email.com</p>
              <p className="text-primary text-sm">BPO.support@email.com</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-mono">ADDRESS</span>
            </div>
            <p className="text-primary text-sm">
              123 Main Street, Suite<br />
              200, Austin, TX 78701
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-mono">OPENING HOURS</span>
            </div>
            <div className="space-y-1">
              <p className="text-foreground text-sm">Mon to Sat: 9.00am - 8.30pm</p>
              <p className="text-foreground text-sm">Sun: Closed</p>
              <p className="text-primary text-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                {formatTime(currentTime)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Pages */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-mono">PAGES</span>
            </div>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.label} className="border-b border-border pb-3">
                  <Link 
                    to={page.href} 
                    className="text-foreground text-sm hover:text-primary transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-mono">SERVICES</span>
            </div>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="border-b border-border pb-3">
                  <span className="text-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-mono">SOCIALS</span>
            </div>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.label} className="border-b border-border pb-3">
                  <a 
                    href={social.href} 
                    className="text-foreground text-sm hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8 border-t border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Links */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <Link to="#" className="text-primary text-sm hover:underline">Privacy Policy</Link>
            <Link to="#" className="text-primary text-sm hover:underline">Terms</Link>
            <span className="text-primary text-sm">©Template by RealMehedi</span>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-primary">
              <path d="M8 8H56V16H36V56H28V16H8V8Z" fill="currentColor"/>
              <path d="M40 24H56V32H48V56H40V24Z" fill="currentColor"/>
            </svg>
            <div>
              <h2 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em]">
                TOTAL <span className="text-primary">EDGE</span>
              </h2>
              <p className="text-foreground text-sm md:text-base tracking-[0.2em]">
                Excellence Delivered,Operations Simplified
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
