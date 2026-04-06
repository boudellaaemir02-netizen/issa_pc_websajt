import { Sword, Shield, Users, Zap } from "lucide-react";

const features = [
  { icon: Sword, title: "Crystal PVP", desc: "Intenzivne Crystal PVP bitke sa end kristalima i totema" },
  { icon: Shield, title: "Anti-Cheat", desc: "Napredni anti-cheat sistem za fer igru" },
  { icon: Users, title: "Aktivna zajednica", desc: "Prijateljska zajednica igrača iz cijele regije" },
  { icon: Zap, title: "Bez lagova", desc: "Optimiziran server za glatko iskustvo igranja" },
];

const ServicesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((s) => (
            <div key={s.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
