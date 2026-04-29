import usedPc from "@/assets/used-pc.jpg";
import budgetPc from "@/assets/budget-pc.jpg";
import gamingPc from "@/assets/gaming-pc.jpg";

const used = [
  {
    name: "Polovni Gaming PC #1",
    image: usedPc,
    price: "799 KM",
    specs: "i5-10400F · 16GB · GTX 1660 Super · 500GB SSD",
    badge: "Testirano",
  },
  {
    name: "Polovni Office PC",
    image: budgetPc,
    price: "449 KM",
    specs: "i3-10100 · 8GB · iGPU · 256GB SSD",
    badge: null,
  },
  {
    name: "Polovni Gaming PC #2",
    image: gamingPc,
    price: "1.149 KM",
    specs: "Ryzen 5 5600 · 16GB · RTX 3060 · 1TB NVMe",
    badge: "6mj garancija",
  },
];

const FeaturedBuilds = () => {
  return (
    <section id="used" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">
            POLOVNI PC — RESSELING
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Provjereni i testirani polovni računari. Svaki PC dolazi sa garancijom.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {used.map((item) => (
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
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground font-display">{item.name}</h3>
                  <span className="text-primary font-black font-display">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.specs}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Tražiš nešto specifično? <a href="#contact" className="text-primary font-semibold hover:underline">Pošalji upit</a> i javit ćemo ti se sa ponudom.
        </p>
      </div>
    </section>
  );
};

export default FeaturedBuilds;
