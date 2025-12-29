import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import patternBg from "@/assets/pattern-bg.jpg";
import { ArrowRight, TrendingUp, Heart, ShoppingCart, Cpu, Building2, Plane, GraduationCap, Zap } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: TrendingUp,
      name: "Finance & Banking",
      description: "End-to-end financial support from transaction processing to customer service. We ensure compliance, security, and accuracy in every interaction.",
      services: ["Account Management", "Loan Processing", "Fraud Detection", "Customer Support"],
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "HIPAA-compliant solutions for healthcare providers. From medical billing to patient support, we handle it with care and precision.",
      services: ["Medical Billing", "Claims Processing", "Patient Support", "Appointment Scheduling"],
    },
    {
      icon: ShoppingCart,
      name: "E-commerce & Retail",
      description: "Scalable support for online businesses. We help you deliver exceptional customer experiences that drive sales and loyalty.",
      services: ["Order Management", "Customer Service", "Returns Processing", "Product Support"],
    },
    {
      icon: Cpu,
      name: "Technology",
      description: "Technical expertise for software and SaaS companies. From tier-1 support to complex troubleshooting, we've got the skills.",
      services: ["Technical Support", "Software Testing", "User Onboarding", "Documentation"],
    },
    {
      icon: Building2,
      name: "Real Estate",
      description: "Comprehensive support for property management and real estate firms. We streamline operations and enhance client relationships.",
      services: ["Lead Management", "Property Listings", "Tenant Support", "Document Processing"],
    },
    {
      icon: Plane,
      name: "Travel & Hospitality",
      description: "24/7 support for travel and hospitality businesses. We ensure smooth experiences for your customers around the clock.",
      services: ["Booking Support", "Concierge Services", "Complaint Resolution", "Loyalty Programs"],
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Support services for educational institutions and EdTech companies. We help you focus on what matters - education.",
      services: ["Student Support", "Enrollment Processing", "Course Administration", "Technical Help"],
    },
    {
      icon: Zap,
      name: "Energy & Utilities",
      description: "Reliable support for energy and utility companies. We help manage customer inquiries and streamline operations.",
      services: ["Billing Support", "Service Requests", "Outage Management", "Meter Reading Support"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={patternBg}
            alt="Abstract pattern"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Industries We Serve</span>
            <h1 className="heading-xl mb-6">
              Everything you need to launch, scale, and{" "}
              <span className="text-primary">succeed</span>
            </h1>
            <p className="body-lg">
              Industry-specific expertise that understands your unique challenges 
              and delivers tailored solutions for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="card-dark group hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="body-md mb-4">{industry.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.map((service, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Our Impact</span>
            <h2 className="heading-lg">Trusted across industries</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "8+", label: "Industries Served" },
              { value: "500+", label: "Happy Clients" },
              { value: "99%", label: "Client Retention" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="card-dark">
                <div className="font-mono text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-4 block">Ready to Start?</span>
            <h2 className="heading-lg mb-6">
              Don't see your industry? We still can help.
            </h2>
            <p className="body-lg mb-8">
              Our flexible approach means we can adapt to any industry. 
              Let's discuss your unique requirements.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
