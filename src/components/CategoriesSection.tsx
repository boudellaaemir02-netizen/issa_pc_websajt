import crystalPvp from "@/assets/crystal-pvp.jpg";
import survival from "@/assets/survival.jpg";
import smpCommunity from "@/assets/smp-community.jpg";
import pvpArena from "@/assets/pvp-arena.jpg";
import endDimension from "@/assets/end-dimension.jpg";

const modes = [
  { title: "Crystal PVP", image: crystalPvp, description: "Eksplozivne bitke sa end kristalima" },
  { title: "Survival", image: survival, description: "Gradi, farma i preživi" },
  { title: "SMP Community", image: smpCommunity, description: "Zajedničko igranje i građenje" },
  { title: "PVP Arena", image: pvpArena, description: "1v1 i timski PVP mečevi" },
  { title: "End Raid", image: endDimension, description: "Ubij Ender Dragona sa ekipom" },
];

const CategoriesSection = () => {
  return (
    <section id="modes" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            GAME MODOVI
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="group flex flex-col items-center text-center p-4 rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="relative mb-4 w-full aspect-square flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  src={mode.image}
                  alt={mode.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">{mode.title}</h3>
              <p className="text-xs text-muted-foreground">{mode.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
