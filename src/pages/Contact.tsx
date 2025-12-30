import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Clock, ChevronDown } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    bestTime: "",
    message: "",
    agreeToTerms: false,
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      bestTime: "",
      message: "",
      agreeToTerms: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <span className="section-label mb-6 inline-block">■ CONTACT US</span>
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6 max-w-3xl mx-auto leading-tight italic">
              Your next business<br />
              move starts with hello
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every success starts with a simple chat. Share your idea<br />
              with us, and we'll help turn it into reality — minus the stress.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Dark background */}
            <div className="bg-secondary h-full min-h-[400px]" />

            {/* Right - Form */}
            <div className="bg-cream p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-xs tracking-wider mb-2 text-card-foreground font-mono">
                    NAME*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                    className="w-full bg-transparent border-b border-card-foreground/30 py-3 text-card-foreground placeholder:text-card-foreground/50 focus:outline-none focus:border-card-foreground"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-wider mb-2 text-card-foreground font-mono">
                      EMAIL*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@framer.com"
                      required
                      className="w-full bg-transparent border-b border-card-foreground/30 py-3 text-card-foreground placeholder:text-card-foreground/50 focus:outline-none focus:border-card-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider mb-2 text-card-foreground font-mono">
                      PHONE*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      required
                      className="w-full bg-transparent border-b border-card-foreground/30 py-3 text-card-foreground placeholder:text-card-foreground/50 focus:outline-none focus:border-card-foreground"
                    />
                  </div>
                </div>

                {/* Service Type & Best Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-wider mb-2 text-card-foreground font-mono">
                      SERVICE TYPE*
                    </label>
                    <div className="relative">
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-card-foreground/30 py-3 text-card-foreground focus:outline-none focus:border-card-foreground appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="business-planning">Business Planning</option>
                        <option value="market-research">Market Research</option>
                        <option value="branding-marketing">Branding & Marketing</option>
                        <option value="financial-guidance">Financial Guidance</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-card-foreground/50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider mb-2 text-card-foreground font-mono">
                      BEST TIME TO CALL
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-card-foreground/30 py-3 text-card-foreground focus:outline-none focus:border-card-foreground"
                      />
                      <Clock className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-card-foreground/50" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs tracking-wider mb-2 text-card-foreground font-mono">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your detailed message here"
                    rows={4}
                    className="w-full bg-card-foreground/5 border-none p-4 text-card-foreground placeholder:text-card-foreground/50 focus:outline-none resize-none"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 border-card-foreground/30 bg-transparent"
                  />
                  <label className="text-sm text-card-foreground/70">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="underline text-card-foreground">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline text-card-foreground">
                      Terms & Conditions
                    </a>
                    .
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-primary text-background py-4 font-medium hover:bg-primary/90 transition-colors"
                >
                  Request Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6">
          {/* Contact Grid - Cream Background */}
          <div className="bg-cream p-6 md:p-10 grid md:grid-cols-3 gap-8 mb-8">
            {/* Phone */}
            <div>
              <span className="inline-block border border-card-foreground/30 px-3 py-1 text-xs tracking-wider mb-4 font-mono">
                ■ PHONE
              </span>
              <div className="space-y-1">
                <a href="tel:+12175550134" className="block text-primary hover:underline">
                  (217) 555-0134
                </a>
                <a href="tel:+12175550142" className="block text-primary hover:underline">
                  (217) 555-0142
                </a>
              </div>
            </div>

            {/* Email */}
            <div>
              <span className="inline-block border border-card-foreground/30 px-3 py-1 text-xs tracking-wider mb-4 font-mono">
                ■ EMAIL
              </span>
              <div className="space-y-1">
                <a href="mailto:boldstart@email.com" className="block text-primary hover:underline">
                  boldstart@email.com
                </a>
                <a href="mailto:boldstart.support@email.com" className="block text-primary hover:underline">
                  boldstart.support@email.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <span className="inline-block border border-card-foreground/30 px-3 py-1 text-xs tracking-wider mb-4 font-mono">
                ■ ADDRESS
              </span>
              <div className="text-primary">
                123 Main Street, Suite<br />
                200, Austin, TX 78701
              </div>
            </div>
          </div>

          {/* Map and Info */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Map */}
            <div className="md:col-span-2 bg-cream overflow-hidden h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAyLjAiTiA5N8KwNDQnMzUuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="grayscale"
              />
            </div>

            {/* Opening Hours & Social */}
            <div className="space-y-6">
              {/* Opening Hours */}
              <div className="bg-cream p-6">
                <span className="inline-block border border-card-foreground/30 px-3 py-1 text-xs tracking-wider mb-4 font-mono text-primary">
                  ■ OPENING HOURS
                </span>
                <div className="space-y-1 text-card-foreground">
                  <p>Mon to Sat: 9.00am - 8.30pm</p>
                  <p>Sun: Closed</p>
                  <p className="text-primary font-medium mt-2">
                    • {formatTime(currentTime)}
                  </p>
                </div>
              </div>

              {/* Follow Us */}
              <div className="bg-cream p-6">
                <span className="inline-block border border-card-foreground/30 px-3 py-1 text-xs tracking-wider mb-4 font-mono text-primary">
                  ■ FOLLOW US
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "WA", color: "bg-primary" },
                    { label: "FB", color: "bg-primary" },
                    { label: "LI", color: "bg-primary" },
                    { label: "TW", color: "bg-primary" },
                    { label: "IG", color: "bg-primary" },
                    { label: "YT", color: "bg-primary" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center gap-2 ${social.color} p-2 text-xs text-background hover:opacity-80 transition-opacity`}
                    >
                      <span className="w-4 h-4 bg-cream" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
