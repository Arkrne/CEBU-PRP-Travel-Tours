import { motion } from 'framer-motion';
import { Shield, Clock, MapPin, Smartphone } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <Smartphone className="text-brand-gold" size={32} />,
      title: "Instant Booking",
      desc: "Reserve your premium vehicle in seconds via our streamlined digital concierge."
    },
    {
      icon: <MapPin className="text-brand-blue" size={32} />,
      title: "Real-time Tracking",
      desc: "Monitor your chauffeur's progress and flight status with precision GPS integration."
    },
    {
      icon: <Shield className="text-brand-gold" size={32} />,
      title: "Elite Chauffeurs",
      desc: "Travel with vetted professionals trained in the highest standards of safety and service."
    },
    {
      icon: <Clock className="text-brand-blue" size={32} />,
      title: "Punctual Arrival",
      desc: "We guarantee on-time pickup with a complimentary 15-minute wait time for all transfers."
    }
  ];

  return (
    <section className="py-40 px-6 md:px-12 bg-white/0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-bold text-brand-gold tracking-[0.5em] uppercase mb-6">The JetLink Protocol</h2>
            <p className="text-5xl md:text-6xl font-black italic tracking-tighter text-white mb-12">
              PRECISION IN <br />
              <span className="text-brand-gold">EVERY DETAIL.</span>
            </p>
            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 italic tracking-tight">{step.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-10 bg-brand-gold/5 blur-[120px] rounded-full" />
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-2">Cabin Excellence</p>
                <p className="text-2xl font-black italic text-white tracking-tighter">Bespoke Comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
