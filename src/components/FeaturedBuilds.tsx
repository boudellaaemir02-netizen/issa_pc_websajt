import gamingPc from "@/assets/gaming-pc.png";
import workstationPc from "@/assets/workstation-pc.png";
import budgetPc from "@/assets/budget-pc.png";

const builds = [
  {
    name: "Titan X Gaming",
    image: gamingPc,
    specs: "RTX 4070 Ti • i7-14700K • 32GB DDR5",
    price: "2.499 KM",
    badge: "Najprodavaniji",
  },
  {
    name: "ProWork Studio",
    image: workstationPc,
    specs: "RTX 4060 • Ryzen 7 7700X • 64GB DDR5",
    price: "2.199 KM",
    badge: null,
  },
  {
    name: "Starter Pro",
    image: budgetPc,
    specs: "RTX 4060 • i5-13400F • 16GB DDR4",
    price: "1.199 KM",
    badge: "Akcija",
  },
];

const FeaturedBuilds = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            AKCIJE U TOKU
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {builds.map((build) => (
            <div
              key={build.name}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative bg-background p-8 flex items-center justify-center">
                {build.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-md">
                    {build.badge}
                  </span>
                )}
                <img
                  src={build.image}
                  alt={build.name}
                  loading="lazy"
                  className="h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{build.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{build.specs}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primary">{build.price}</span>
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Saznaj više →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBuilds;
