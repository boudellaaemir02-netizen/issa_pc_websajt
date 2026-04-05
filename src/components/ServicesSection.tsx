import { Monitor, Wrench, Truck, ShieldCheck } from "lucide-react";

const services = [
  { icon: Monitor, title: "Konfiguracija po mjeri", desc: "Biramo komponente prema vašim potrebama i budžetu" },
  { icon: Wrench, title: "Servis i nadogradnja", desc: "Popravka, čišćenje i nadogradnja postojećih računara" },
  { icon: Truck, title: "Dostava u cijeloj BiH", desc: "Besplatna dostava za narudžbe preko 500 KM" },
  { icon: ShieldCheck, title: "Garancija", desc: "Do 3 godine garancije na svaki build" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
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
