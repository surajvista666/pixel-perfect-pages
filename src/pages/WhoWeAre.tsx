import Layout from "@/components/layout/Layout";
import aboutImage from "@/assets/about-image.jpg";

const WhoWeAre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <span className="section-label mb-6 inline-block">■ WHO WE ARE</span>
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

      {/* Hero Image */}
      <section className="pb-0 bg-background">
        <div className="container mx-auto px-6">
          <div className="w-full overflow-hidden">
            <img
              src={aboutImage}
              alt="Business professionals in a meeting"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-card-foreground mb-8 leading-tight">
              We don't just build businesses.<br />
              We build <span className="bg-primary text-background px-1">confidence</span> and<br />
              <span className="bg-primary text-background px-1">long-lasting success</span>.
            </h2>
            
            <div className="space-y-6 text-card-foreground/80">
              <p>
                Every company has a story — ours began with a simple frustration: starting a business
                felt way too complicated. Paperwork, licenses, legal forms, and strategies written in
                jargon no one really understood... it was enough to scare away even the most
                passionate entrepreneurs.
              </p>
              
              <p>
                Every company has a story — ours began with a simple frustration: starting a business
                felt way too complicated. Paperwork, licenses, legal forms, and strategies written in
                jargon no one really understood... it was enough to scare away even the most
                passionate entrepreneurs.
              </p>
              
              <p>
                Every company has a story — ours began with a simple frustration: starting a business
                felt way too complicated. Paperwork, licenses, legal forms, and strategies written in
                jargon no one really understood... it was enough to scare away even the most
                passionate entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
