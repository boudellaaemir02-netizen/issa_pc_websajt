import gamingPc from "@/assets/gaming-pc.png";
import workstationPc from "@/assets/workstation-pc.png";
import budgetPc from "@/assets/budget-pc.png";
import streamingPc from "@/assets/streaming-pc.png";
import componentsPc from "@/assets/components.png";

const categories = [
  { title: "Gaming računari", image: gamingPc, description: "Vrhunske performanse za najzahtjevnije igre" },
  { title: "Radne stanice", image: workstationPc, description: "Profesionalni alati za posao i kreativnost" },
  { title: "Budget buildovi", image: budgetPc, description: "Najbolji odnos cijene i kvaliteta" },
  { title: "Streaming setovi", image: streamingPc, description: "Sve što vam treba za streaming" },
  { title: "Komponente", image: componentsPc, description: "Pojedinačne komponente i nadogradnje" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            TOP KATEGORIJE
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#"
              className="group flex flex-col items-center text-center p-4 rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="relative mb-4 w-full aspect-square flex items-center justify-center bg-muted rounded-lg overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">{cat.title}</h3>
              <p className="text-xs text-muted-foreground">{cat.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
