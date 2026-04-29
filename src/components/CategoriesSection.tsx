import budgetPc from "@/assets/budget-pc.jpg";
import gamingPc from "@/assets/gaming-pc.jpg";
import workstationPc from "@/assets/workstation-pc.jpg";
import streamingPc from "@/assets/streaming-pc.jpg";
import components from "@/assets/components.jpg";

const builds = [
  {
    title: "Starter Build",
    image: budgetPc,
    price: "1.299 KM",
    specs: ["Ryzen 5 5600", "16GB DDR4", "RTX 3050 / RX 6600", "500GB NVMe SSD"],
    badge: "Najprodavanije",
  },
  {
    title: "Gaming Pro",
    image: gamingPc,
    price: "2.499 KM",
    specs: ["Ryzen 7 7700", "32GB DDR5", "RTX 4070", "1TB NVMe SSD"],
    badge: null,
  },
  {
    title: "Streamer Setup",
    image: streamingPc,
    price: "3.199 KM",
    specs: ["Intel i7-14700K", "32GB DDR5", "RTX 4070 Super", "2TB NVMe + 2TB HDD"],
    badge: "Novo",
  },
  {
    title: "Workstation Elite",
    image: workstationPc,
    price: "4.899 KM",
    specs: ["Ryzen 9 7950X", "64GB DDR5", "RTX 4080 Super", "2TB NVMe Gen4"],
    badge: "Premium",
  },
  {
    title: "Komponente & Upgrade",
    image: components,
    price: "od 49 KM",
    specs: ["GPU, CPU, RAM", "SSD / NVMe", "Napajanja & coolers", "Case-ovi i fanovi"],
    badge: null,
  },
];

const CategoriesSection = () => {
  return (
    <section id="builds" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">
            NAŠE KONFIGURACIJE
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Spremne konfiguracije za svaki budžet — sve cijene su krajnje, sa PDV-om.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {builds.map((b) => (
            <div
              key={b.title}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40 transition-all group"
            >
              <div className="relative overflow-hidden">
                {b.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                    {b.badge}
                  </span>
                )}
                <img
                  src={b.image}
                  alt={b.title}
                  loading="lazy"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground font-display mb-4">{b.title}</h3>
                <a
                  href="#contact"
                  className="block text-center w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  Naruči
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
