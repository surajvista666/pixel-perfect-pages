import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-image.jpg";
import aboutImage from "@/assets/about-image.jpg";

const Index = () => {
  const industries = [
    { name: "FINANCE", hasImage: true },
    { name: "HEALTH CARE", hasImage: false },
    { name: "IT", hasImage: false },
    { name: "FINANCE", hasImage: false },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
            {/* Left Hero Card */}
            <div className="bg-card rounded-lg p-8 md:p-10">
              <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-4 italic">
                Scalable BPO Solutions.
              </h1>
              <p className="text-foreground text-lg md:text-xl mb-8">
                Empowering growth for startups, SMEs, and<br />
                enterprises worldwide.
              </p>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={heroImage}
                  alt="Professional business team collaborating"
                  className="w-full h-[300px] md:h-[350px] object-cover"
                />
              </div>
            </div>

            {/* Right Hero Card */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={aboutImage}
                alt="Business consultation meeting"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-foreground text-sm md:text-base leading-relaxed mb-4">
                  We're a team of business guides who believe{" "}
                  <span className="text-primary">starting and growing a company shouldn't be complicated</span>.
                  With clear steps and hands-on support, we help entrepreneurs turn big ideas into real success stories.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-5 py-2.5 rounded text-sm font-medium hover:border-primary transition-colors"
                >
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-[#E8E4D0] py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-12">
            <div className="w-3 h-3 bg-primary"></div>
            <span className="text-xs uppercase tracking-[0.15em] text-black/60 font-mono">WHO WE ARE</span>
            <div className="flex-1 h-px bg-black/20 ml-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image Placeholder */}
            <div className="bg-black aspect-[4/5] rounded-lg"></div>

            {/* Right - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-black leading-tight mb-6">
                We don't just build businesses.<br />
                We build <span className="bg-primary px-1">confidence</span> and<br />
                <span className="bg-primary px-1">long-lasting success</span>.
              </h2>
              <p className="text-black/70 text-base md:text-lg leading-relaxed mb-8">
                Every company has a story — ours began with a simple frustration: starting a business 
                felt way too complicated. Paperwork, licenses, legal forms, and strategies written in 
                jargon no one really understood... it was enough to scare away even the most 
                passionate entrepreneurs.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded text-sm font-medium hover:bg-black/80 transition-colors"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 bg-primary"></div>
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-mono">WHAT WE DO</span>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-12">
            What drives us today,<br />
            and what inspires<br />
            us for tomorrow
          </h2>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Images Grid */}
            <div className="grid grid-cols-2 gap-0">
              <div className="aspect-square">
                <img
                  src={heroImage}
                  alt="Team member at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square">
                <img
                  src={aboutImage}
                  alt="Handshake partnership"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Our Mission Card */}
            <div className="bg-[#E8E4D0] p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-6">Our Mission</h3>
              <ul className="space-y-4 text-black/80 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/60 flex-shrink-0"></span>
                  <span>Make starting and growing a business <strong>simple, clear, and stress-free</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/60 flex-shrink-0"></span>
                  <span>Cut through jargon and confusion with easy-to-follow steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/60 flex-shrink-0"></span>
                  <span>Blend <strong>strategy with hands-on support</strong> to help entrepreneurs move forward</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/60 flex-shrink-0"></span>
                  <span>Give clients <strong>clarity, confidence, and momentum</strong> to turn ideas into thriving businesses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 bg-primary"></div>
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-mono">INDUSTRIES WE SERVE</span>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
              Optimized outsourcing across<br />
              leading industries—finance,<br />
              healthcare, e-commerce, and<br />
              more.
            </h2>
            <Link 
              to="/industries"
              className="mt-6 lg:mt-0 inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              EXPLORE MORE
            </Link>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="relative">
                <div className="aspect-[3/4] bg-[#E8E4D0] rounded-lg overflow-hidden">
                  {index === 0 && (
                    <img
                      src={heroImage}
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <span className="text-primary text-xs md:text-sm font-mono uppercase tracking-wider">
                    {industry.name}
                  </span>
                  <ArrowRight size={16} className="text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#E8E4D0] rounded-lg p-8 md:p-12 relative overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary"></div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                {/* Decorative Icon */}
                <div className="text-primary text-3xl">✦</div>
                <p className="text-black text-base md:text-lg">
                  Sometimes the hardest part is reaching out<br />
                  — but once you do, we'll make the rest easy.
                </p>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-5 py-2.5 rounded text-sm font-medium hover:border-primary transition-colors whitespace-nowrap"
              >
                Contact us today
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
