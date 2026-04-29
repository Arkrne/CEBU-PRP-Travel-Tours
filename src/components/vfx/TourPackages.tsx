import { motion } from 'framer-motion';
import { Star, ArrowRight, Map } from 'lucide-react';

const TourPackages = () => {
  const tours = [
    {
      title: "Oslob Tour",
      price: "₱3,500 / 12HRS",
      details: "CAR 3 PAX + ₱300 / HR SUCCEEDING",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Badian / Kawasan Tour",
      price: "₱3,500 / 12HRS",
      details: "CAR 3 PAX + ₱300 / HR SUCCEEDING",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Whale Shark Watching",
      price: "₱1,700 / PAX",
      details: "CAR 3 PAX + ₱300 / HR SUCCEEDING",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Oslob | Badian | Moalboal",
      price: "STARTS ₱4,500",
      details: "15HRS + ₱300 / HR SUCCEEDING",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1506929662033-75393669404d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Cebu City Tour",
      price: "₱2,500 / 8HRS",
      details: "CAR 3 PAX + ₱300 / HR SUCCEEDING",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1624467004458-40899479b183?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Moalboal Tour",
      price: "₱3,500 / 12HRS",
      details: "CAR 3 PAX + ₱300 / HR SUCCEEDING",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Out Of Town Transfers",
      price: "₱1,700 / PAX",
      details: "ONE-WAY + ₱300 / HR SUCCEEDING",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Customized Itinerary",
      price: "CUSTOM RATE",
      details: "SEND INQUIRY & BOOK NOW",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section className="py-40 px-6 md:px-12 bg-white/0 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Map className="text-brand-gold" size={20} />
            <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase">Curated Experiences</span>
          </motion.div>
          <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter text-white mb-8">
            CEBU TOUR <br />
            <span className="text-brand-gold text-glow">PACKAGES.</span>
          </h2>
          <p className="text-white/30 max-w-2xl mx-auto text-sm uppercase tracking-widest leading-loose">
            From the deep blue of Moalboal to the heights of Cebu City, 
            discover the island with our professional chauffeur-guided tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[32px] overflow-hidden glass-dark border border-white/5"
            >
              <img 
                src={tour.image} 
                alt={tour.title} 
                className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
              
              <div className="absolute top-6 left-6 flex items-center gap-1 px-3 py-1 bg-brand-navy/60 backdrop-blur-md rounded-full border border-white/10">
                <Star size={10} className="fill-brand-gold text-brand-gold" />
                <span className="text-[10px] font-black text-white">{tour.rating}</span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-2xl font-black text-white italic tracking-tighter mb-4 leading-none">{tour.title}</h3>
                <div className="space-y-1 mb-6">
                  <p className="text-brand-gold font-black text-sm tracking-tight">{tour.price}</p>
                  <p className="text-[8px] text-white/40 font-bold uppercase tracking-widest">{tour.details}</p>
                </div>
                
                <button className="w-full py-4 border border-white/10 text-[10px] font-black tracking-widest uppercase text-white rounded-xl hover:bg-brand-gold hover:border-brand-gold hover:text-brand-navy transition-all flex items-center justify-center gap-2 group/btn">
                  LEARN MORE
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
