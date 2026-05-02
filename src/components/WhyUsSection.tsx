import { Award, Clock, Wallet, Users, Sparkles, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";

const reasons = [
  {
    icon: Award,
    title: "Stručnost i iskustvo",
    desc: "Više od 500 sastavljenih konfiguracija. Znamo šta radi, a šta je samo marketing.",
  },
  {
    icon: Wallet,
    title: "Najbolji odnos cijena/performans",
    desc: "Ne preplaćuješ brand. Biramo komponente koje stvarno daju FPS, ne samo lijepu kutiju.",
  },
  {
    icon: ShieldCheck,
    title: "Garancija 24 mjeseca",
    desc: "Pisana garancija i na nove i na provjerene polovne komponente — konkurencija to rijetko nudi.",
  },
  {
    icon: Clock,
    title: "Brza isporuka",
    desc: "Standardni build gotov za 24-48h. Bez čekanja sedmicama kao u velikim trgovinama.",
  },
  {
    icon: Users,
    title: "Lična podrška",
    desc: "Komunikacija direktno s majstorom — bez call centara. Pomoć i savjeti i nakon kupovine.",
  },
  {
    icon: Sparkles,
    title: "Cable management & estetika",
    desc: "Svaki PC izlazi savršeno složen iznutra. Build koji se ne stidiš pokazati.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 70% 80%, hsl(var(--accent)) 0%, transparent 50%)`,
        }}
      />
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <img
              src={logo}
              alt="ProBuild Sarajevo logo"
              className="w-full max-w-md h-auto drop-shadow-[0_0_50px_hsl(var(--primary)/0.3)]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3 font-display">
              Zašto baš mi?
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 font-display">
              ŠTO NAS IZDVAJA OD KONKURENCIJE
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground mb-8 max-w-lg">
              Nismo samo prodavnica — mi smo entuzijasti koji žive za hardware. Evo zašto klijenti u Sarajevu i širom BiH biraju nas:
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-3">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
