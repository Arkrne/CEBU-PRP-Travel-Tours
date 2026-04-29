import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Zap, Clock, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureGrid = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: <Shield className="text-brand-gold" />, title: "SECURE TRAVEL", desc: "Top-tier safety protocols and vetted professional chauffeurs." },
    { icon: <Zap className="text-brand-blue" />, title: "REAL-TIME TRACKING", desc: "Live GPS monitoring and flight status synchronization." },
    { icon: <Clock className="text-brand-gold" />, title: "PUNCTUALITY", desc: "Our 15-minute wait guarantee ensures you're never delayed." },
    { icon: <Star className="text-brand-blue" />, title: "PREMIUM FLEET", desc: "Latest models with climate control and luxury amenities." },
  ];

  return (
    <section ref={containerRef} className="py-32 px-8 bg-brand-navy relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-gold tracking-[0.5em] uppercase mb-4">The JetLink Standard</h2>
          <p className="text-5xl font-black italic tracking-tighter">REDIFINING THE JOURNEY.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="feature-card group p-10 glass rounded-2xl hover:bg-white/10 transition-all duration-500 cursor-default"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-brand-gold transition-colors">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
