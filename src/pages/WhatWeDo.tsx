import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Headphones, FileText, Database, UserCheck, Settings, BarChart3 } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: Headphones,
      title: "Customer Support",
      description: "24/7 multilingual support across voice, chat, email, and social media channels. We ensure your customers receive prompt, professional assistance that builds loyalty and satisfaction.",
      features: ["Voice Support", "Live Chat", "Email Management", "Social Media Support"],
    },
    {
      icon: FileText,
      title: "Back Office Operations",
      description: "Streamlined administrative processes that reduce costs and improve efficiency. From document processing to compliance management, we handle it all.",
      features: ["Document Processing", "Invoice Management", "Order Processing", "Compliance Support"],
    },
    {
      icon: Database,
      title: "Data Entry & Processing",
      description: "Accurate, timely data management services that ensure your business decisions are based on reliable information. Quality assured at every step.",
      features: ["Data Entry", "Data Cleansing", "Data Migration", "Database Management"],
    },
    {
      icon: UserCheck,
      title: "Virtual Assistance",
      description: "Dedicated virtual professionals to handle your day-to-day business operations. From scheduling to research, we've got you covered.",
      features: ["Calendar Management", "Research & Analysis", "Travel Coordination", "Project Support"],
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Expert technical assistance for your products and services. We provide L1-L3 support with quick resolution times and high satisfaction rates.",
      features: ["Tier 1-3 Support", "Software Troubleshooting", "Hardware Support", "Remote Assistance"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Transform your data into actionable insights. Our analytics team delivers comprehensive reports that drive strategic decision-making.",
      features: ["Data Analytics", "Custom Reporting", "Dashboard Creation", "Performance Metrics"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">What We Do</span>
            <h1 className="heading-xl mb-6">
              Your next business move starts with{" "}
              <span className="text-primary">hello</span>
            </h1>
            <p className="body-lg">
              Comprehensive outsourcing solutions designed to optimize your 
              operations, reduce costs, and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-dark group">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="heading-sm mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="body-md mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Our Process</span>
            <h2 className="heading-lg">How we deliver results</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your needs and understand your business objectives." },
              { step: "02", title: "Strategy", description: "We develop a tailored solution that aligns with your goals." },
              { step: "03", title: "Implementation", description: "Our team executes the plan with precision and care." },
              { step: "04", title: "Optimization", description: "We continuously improve and adapt to deliver better results." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-mono text-5xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="heading-sm mb-2">{item.title}</h3>
                <p className="body-md">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to optimize your operations?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
