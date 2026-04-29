import { motion } from 'framer-motion';
import BookingWidget from '../../components/booking/BookingWidget';
import FleetShowcase from '../../components/vfx/FleetShowcase';
import FeatureGrid from '../../components/vfx/FeatureGrid';
import ProcessSection from '../../components/vfx/ProcessSection';
import RateEstimator from '../../components/vfx/RateEstimator';
import TourPackages from '../../components/vfx/TourPackages';

const Home = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-brand-navy">
      {/* Immersive Background Reveal */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/0 via-brand-navy/60 to-brand-navy" />
        <img 
          src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=2000" 
          alt="Cebu Philippines" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-40 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[1px] w-12 bg-brand-gold" />
            <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase">Metro Cebu & Province Trusted Partner</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-8xl font-black mb-8 tracking-tighter italic leading-[0.85] text-white"
          >
            EXPLORE CEBU <br />
            <span className="text-brand-gold text-glow">IN STYLE.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-white/50 mb-12 font-light leading-relaxed max-w-lg"
          >
            Premium airport transfers and curated tour packages across Cebu Province. 
            Reliable service, professional drivers, and comfort guaranteed.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-wrap gap-6"
          >
            <button className="group relative px-12 py-5 bg-brand-gold text-brand-navy font-bold rounded-sm transition-all overflow-hidden">
              <span className="relative z-10">BOOK A TOUR</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="px-12 py-5 border border-white/10 hover:border-brand-gold text-white font-bold rounded-sm transition-all">
              AIRPORT TRANSFER
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-brand-blue/10 blur-[100px] rounded-full" />
          <BookingWidget />
        </motion.div>
      </section>

      {/* Fleet Showcase Section */}
      <section id="fleet" className="relative z-10 py-40 px-6 md:px-12 bg-white/0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <h2 className="text-xs font-bold text-brand-blue tracking-[0.5em] uppercase mb-4">Our Regional Fleet</h2>
              <p className="text-5xl md:text-6xl font-black tracking-tight italic text-white">Choose Your Ride.</p>
            </div>
            <div className="text-white/30 text-sm max-w-xs uppercase tracking-widest leading-loose text-right">
              From compact sedans for city trips to spacious vans for island-wide tours.
            </div>
          </div>

          <FleetShowcase />
        </div>
      </section>

      <section id="tours">
        <TourPackages />
      </section>

      <RateEstimator />


      <ProcessSection />
      
      <FeatureGrid />
    </div>
  );
};

export default Home;
