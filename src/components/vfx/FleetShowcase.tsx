import { motion } from 'framer-motion';

const FleetShowcase = () => {
  const fleet = [
    {
      name: "Comfort Sedan",
      model: "Toyota Vios / Altis",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
      capacity: "4 Passengers",
      luggage: "2 Medium Bags",
      tag: "ECONOMY COMFORT"
    },
    {
      name: "Executive SUV",
      model: "Toyota Fortuner / Montero",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000",
      capacity: "7 Passengers",
      luggage: "4 Large Bags",
      tag: "ADVENTURE READY"
    },
    {
      name: "Family / Group Van",
      model: "Toyota Hiace Grandia",
      image: "https://images.unsplash.com/photo-1559416523-140dd386fa3c?auto=format&fit=crop&q=80&w=1000",
      capacity: "12-15 Passengers",
      luggage: "6+ Large Bags",
      tag: "MAX CAPACITY"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {fleet.map((car, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="group relative h-[550px] rounded-3xl overflow-hidden glass-dark border border-white/5"
        >
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
          
          <div className="absolute top-8 left-8">
            <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[8px] font-black tracking-[0.3em] uppercase rounded-full">
              {car.tag}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-10">
            <p className="text-white/40 font-bold tracking-[0.4em] uppercase text-[10px] mb-2">{car.name}</p>
            <h3 className="text-3xl font-black text-white italic tracking-tighter mb-8">{car.model}</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/5">
              <div className="space-y-1">
                <p className="text-[8px] text-white/20 uppercase tracking-widest">Max Seating</p>
                <p className="text-xs text-white/60 font-bold italic">{car.capacity}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] text-white/20 uppercase tracking-widest">Luggage Space</p>
                <p className="text-xs text-white/60 font-bold italic">{car.luggage}</p>
              </div>
            </div>

            <button className="w-full py-4 bg-white/5 border border-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-xl group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-brand-navy transition-all">
              Select Option
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FleetShowcase;
