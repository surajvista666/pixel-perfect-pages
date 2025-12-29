import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-image.jpg";
import aboutImage from "@/assets/about-image.jpg";

const Index = () => {
  const services = [
    {
      title: "Customer Support",
      description: "24/7 multilingual support to keep your customers satisfied and loyal.",
    },
    {
      title: "Back Office Operations",
      description: "Streamlined administrative tasks to boost your operational efficiency.",
    },
    {
      title: "Data Entry & Processing",
      description: "Accurate and timely data management for informed business decisions.",
    },
    {
      title: "Virtual Assistance",
      description: "Dedicated virtual support to handle your day-to-day business needs.",
    },
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "99%", label: "Client Retention" },
  ];

  const industries = [
    { name: "Finance", icon: "💰" },
    { name: "Healthcare", icon: "🏥" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Technology", icon: "💻" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professional business team collaborating"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="section-label mb-4 block opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Scalable BPO Solutions
            </span>
            <h1 className="heading-xl mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Empowering growth for startups, SMEs, and enterprise{" "}
              <span className="text-primary">worldwide</span>
            </h1>
            <p className="body-lg mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              We don't just build businesses. We build{" "}
              <span className="text-primary font-medium">partnerships</span> and{" "}
              <span className="text-primary font-medium">long-lasting success</span>.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact" className="btn-primary">
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link to="/what-we-do" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">Who We Are</span>
              <h2 className="heading-lg mb-6">
                We don't just build businesses. We build{" "}
                <span className="text-primary">partnerships</span> and{" "}
                <span className="text-primary">long-lasting success</span>.
              </h2>
              <p className="body-md mb-8">
                At Total Edge, we are committed to delivering exceptional outsourcing solutions 
                that drive growth and efficiency for businesses of all sizes. Our team of 
                dedicated professionals works tirelessly to ensure your success.
              </p>
              <Link to="/who-we-are" className="btn-outline">
                Learn More
                <ChevronRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Our professional team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg">
                <div className="font-mono font-bold text-3xl">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label mb-4 block">What Drives Us</span>
            <h2 className="heading-lg mb-8">
              What drives us today, and what inspires us for tomorrow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-dark text-left">
                <h3 className="heading-sm mb-4 text-primary">Our Mission</h3>
                <p className="body-md">
                  To empower businesses worldwide with innovative outsourcing solutions 
                  that drive sustainable growth and operational excellence.
                </p>
              </div>
              <div className="card-dark text-left">
                <h3 className="heading-sm mb-4 text-primary">Our Vision</h3>
                <p className="body-md">
                  To be the global leader in business process outsourcing, recognized 
                  for our commitment to quality, innovation, and client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <span className="section-label mb-4 block">A Glance at Our</span>
              <h2 className="heading-lg">
                Optimized outsourcing across leading industries—finance, 
                healthcare, e-commerce, and more.
              </h2>
            </div>
            <Link to="/what-we-do" className="btn-outline mt-6 lg:mt-0">
              Learn More
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-dark group cursor-pointer"
              >
                <h3 className="heading-sm mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="body-md">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">Industries We Serve</span>
            <h2 className="heading-lg">Expertise across diverse sectors</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to="/industries"
                className="card-dark text-center group hover:border-primary/50 transition-all"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-mono text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-4 block">Get Started Today</span>
            <h2 className="heading-lg mb-6">
              Ready to transform your business operations?
            </h2>
            <p className="body-lg mb-8">
              Let's discuss how Total Edge can help you achieve your business goals 
              with our tailored outsourcing solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link to="/what-we-do" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
