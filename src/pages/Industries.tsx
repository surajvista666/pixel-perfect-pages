import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import aboutImage from "@/assets/about-image.jpg";

const Industries = () => {
  const services = [
    {
      title: "Business planning",
      description: "We turn your vision into a clear, step-by-step plan so you know exactly what to do to start, grow, and succeed.",
      items: [
        "STRATEGIC BUSINESS PLANS",
        "FEASIBILITY STUDIES",
        "BUSINESS MODEL DESIGN",
        "GROWTH PLANNING",
        "EXPANSION STRATEGY",
        "EXIT STRATEGY PLANNING",
        "EXIT STRATEGY PLANNING",
        "COMPETITIVE ANALYSIS",
        "PRICING STRATEGY",
      ],
    },
    {
      title: "Market research",
      description: "We dig deep into your market so you can make smart decisions based on facts, not guesswork.",
      items: [
        "INDUSTRY RESEARCH",
        "CUSTOMER PROFILING",
        "DEMAND ANALYSIS",
        "TREND SPOTTING",
        "COMPETITOR MAPPING",
        "LOCATION ANALYSIS",
        "PRODUCT TESTING FEEDBACK",
        "PRICING RESEARCH",
        "SURVEY CREATION & ANALYSIS",
      ],
      hasViewService: true,
    },
    {
      title: "Branding & marketing",
      description: "We help you look great, sound great, and get noticed — so your business stands out for all the right reasons.",
      items: [
        "BRAND IDENTITY DESIGN",
        "BRAND MESSAGING",
        "SOCIAL MEDIA SETUP",
        "WEBSITE CREATION",
        "MARKETING CAMPAIGNS",
        "SEO SETUP",
        "CONTENT CREATION",
        "BRAND GUIDELINES",
        "DIGITAL ADS",
      ],
      hasViewService: true,
    },
    {
      title: "Financial guidance",
      description: "We make the money side of business simple, clear, and stress-free with easy-to-follow advice.",
      items: [
        "BUDGET CREATION",
        "CASH FLOW PLANNING",
        "PROFITABILITY ANALYSIS",
        "FUNDING ADVICE",
        "COST CONTROL",
        "BREAK-EVEN ANALYSIS",
        "PRICING REVIEWS",
        "TAX PLANNING",
        "FINANCIAL REPORTING",
      ],
      hasViewService: true,
    },
  ];

  // Grid icon component
  const GridIcon = () => (
    <div className="w-16 h-16 md:w-20 md:h-20 bg-cream flex items-center justify-center">
      <div className="grid grid-cols-4 gap-0.5">
        {Array.from({ length: 16 }).map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 md:w-2.5 md:h-2.5 ${
              i < 12 ? 'bg-primary' : 'bg-primary/30'
            }`} 
          />
        ))}
      </div>
    </div>
  );

  // Corner decorations for images
  const ImageWithCorners = () => (
    <div className="relative">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50 -translate-x-2 -translate-y-2" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/50 translate-x-2 -translate-y-2" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary/50 -translate-x-2 translate-y-2" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/50 translate-x-2 translate-y-2" />
      
      <img
        src={aboutImage}
        alt="Business workspace"
        className="w-full h-64 md:h-80 object-cover grayscale"
      />
    </div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <span className="section-label mb-6 inline-block">■ INDUSTRIES WE SERVE</span>
          </div>
        </div>
      </section>

      {/* Title Section with lime background */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background mb-6 leading-tight italic">
              Everything you need to<br />
              launch, scale, and succeed
            </h1>
            <p className="text-background/80 max-w-xl mx-auto">
              We handle the tricky parts of business so you can focus on what<br />
              you do best. Clear steps, real results, and support that lasts.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-cream p-6 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <GridIcon />
                  <div>
                    <h2 className="font-heading text-xl md:text-2xl text-card-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-card-foreground/70 max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="order-2 md:order-1">
                    <ImageWithCorners />
                  </div>

                  {/* List */}
                  <div className="order-1 md:order-2">
                    <div className="space-y-0">
                      {service.items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="py-2 border-b border-card-foreground/20 text-xs md:text-sm tracking-wider text-card-foreground font-mono"
                        >
                          {String(idx + 1).padStart(2, '0')} {item}
                        </div>
                      ))}
                    </div>
                    
                    {service.hasViewService && (
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-2 mt-6 text-card-foreground hover:text-primary transition-colors font-medium"
                      >
                        View Service
                        <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
