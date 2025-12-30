import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="bg-primary flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-6 md:px-8 relative">
          {/* Decorative lines on left */}
          <div className="hidden md:flex items-center gap-0.5 absolute left-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-16 rounded-full border border-background/40"
                style={{ 
                  height: `${40 + Math.sin(i * 0.5) * 20}px`,
                  transform: `translateY(${Math.sin(i * 0.8) * 4}px)`
                }}
              />
            ))}
          </div>
          
          {/* Text */}
          <div className="text-background text-center md:text-left md:pl-24">
            <p className="text-sm md:text-base leading-relaxed">
              Sometimes the hardest part is reaching out<br className="hidden md:block" />
              — but once you do, we'll make the rest easy.
            </p>
          </div>
          
          {/* Button with corner decoration */}
          <div className="relative">
            {/* Corner squares decoration */}
            <div className="absolute -top-2 -right-2 w-4 h-4 grid grid-cols-2 gap-0.5">
              <div className="w-1.5 h-1.5 bg-primary"></div>
              <div className="w-1.5 h-1.5 bg-primary"></div>
              <div className="w-1.5 h-1.5 bg-primary"></div>
              <div className="w-1.5 h-1.5 bg-background"></div>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-background text-primary px-6 py-3 hover:bg-background/90 transition-colors font-medium"
            >
              Contact us today
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
