import { Cpu, Wrench, ShieldCheck, Truck, RefreshCw, HeadphonesIcon } from "lucide-react";

const features = [
  { icon: Cpu, title: "Custom Build", desc: "Sastavljanje PC-a po tvojim potrebama i budžetu" },
  { icon: RefreshCw, title: "Polovni PC", desc: "Provjereni polovni računari sa garancijom" },
  { icon: Wrench, title: "Servis & Nadogradnja", desc: "Dijagnostika, čišćenje i upgrade postojećeg PC-a" },
  { icon: ShieldCheck, title: "24 mj. Garancija", desc: "Garancija na sve nove komponente i sklopove" },
  { icon: Truck, title: "Dostava po BiH", desc: "Brza dostava na adresu uz pouzeće" },
  { icon: HeadphonesIcon, title: "Tehnička podrška", desc: "Pomoć i savjeti i nakon kupovine" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">
            NAŠE USLUGE
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((s) => (
            <div key={s.title} className="text-center p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
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
