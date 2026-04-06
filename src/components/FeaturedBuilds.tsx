import crystalPvp from "@/assets/crystal-pvp.jpg";
import pvpArena from "@/assets/pvp-arena.jpg";
import endDimension from "@/assets/end-dimension.jpg";

const highlights = [
  {
    name: "Crystal PVP Turnir",
    image: crystalPvp,
    desc: "Sedmični turniri sa nagradama. Pokaži svoje PVP vještine u 1v1 crystal borbama!",
    badge: "Aktivno",
  },
  {
    name: "PVP Arena Sezona",
    image: pvpArena,
    desc: "Nova sezona PVP arene je počela! Rang lista se resetuje svakog mjeseca.",
    badge: null,
  },
  {
    name: "Dragon Fight Event",
    image: endDimension,
    desc: "Grupni event ubijanja Ender Dragona svake subote u 20h. Svi su dobrodošli!",
    badge: "Novo",
  },
];

const FeaturedBuilds = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            EVENTI & TURNIRI
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.name}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-shadow group"
            >
              <div className="relative overflow-hidden">
                {item.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-md">
                    {item.badge}
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBuilds;
