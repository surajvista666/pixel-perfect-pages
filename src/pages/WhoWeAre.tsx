import Layout from "@/components/layout/Layout";
import aboutImage from "@/assets/about-image.jpg";
import heroImage from "@/assets/hero-image.jpg";
import { Users, Target, Award, Globe } from "lucide-react";

const WhoWeAre = () => {
  const values = [
    {
      icon: Users,
      title: "People First",
      description: "We believe in the power of human connection and put our people at the heart of everything we do.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every interaction, every project, and every partnership.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We operate with transparency and honesty, building trust through our actions.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We serve clients worldwide with localized expertise and cultural understanding.",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Davis",
      role: "VP of Client Success",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Our team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Who We Are</span>
            <h1 className="heading-xl mb-6">
              Your next business move starts with{" "}
              <span className="text-primary">hello</span>
            </h1>
            <p className="body-lg">
              We are a team of dedicated professionals committed to delivering 
              exceptional outsourcing solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Our workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="heading-lg mb-6">
                We don't just build businesses. We build{" "}
                <span className="text-primary">partnerships</span> and{" "}
                <span className="text-primary">long-lasting success</span>.
              </h2>
              <p className="body-md mb-6">
                Founded in 2008, Total Edge has grown from a small team of passionate 
                professionals to a global leader in business process outsourcing. Our 
                journey has been defined by our unwavering commitment to excellence 
                and our dedication to our clients' success.
              </p>
              <p className="body-md">
                Today, we serve over 500 clients across 50+ countries, delivering 
                tailored solutions that address unique business challenges. Our 
                team of 2,000+ professionals brings diverse expertise and a shared 
                passion for driving results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Our Values</span>
            <h2 className="heading-lg">
              What drives us today, and what inspires us for tomorrow
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-dark text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-4">{value.title}</h3>
                <p className="body-md">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Our Leadership</span>
            <h2 className="heading-lg">Meet the team behind Total Edge</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-dark">
              <span className="section-label mb-4 block">Our Mission</span>
              <p className="body-lg">
                To empower businesses worldwide with innovative outsourcing solutions 
                that drive sustainable growth and operational excellence, while fostering 
                meaningful partnerships built on trust and mutual success.
              </p>
            </div>
            <div className="card-dark border-primary/30">
              <span className="section-label mb-4 block text-primary">Our Vision</span>
              <p className="body-lg">
                To be the global leader in business process outsourcing, recognized 
                for our commitment to quality, innovation, and client success. We aim 
                to redefine industry standards and set new benchmarks for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
