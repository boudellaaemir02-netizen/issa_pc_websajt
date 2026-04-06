import { Copy, BookOpen, Shield } from "lucide-react";
import { useState } from "react";

const rules = [
  "Bez hackovanja ili cheatovanja",
  "Poštuj druge igrače",
  
  "Bez spam-anja u chatu",
  "Slušaj admina i moderatore",
  "Zabranjen je hate speech",
];

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText("delaasmp.aternos.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="rules" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              PRAVILA SERVERA
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-3">
              {rules.map((rule, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <Shield className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{i + 1}. {rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              KAKO SE PRIDRUŽITI
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Otvori Minecraft", desc: "Pokreni Minecraft Java Edition (1.20+)" },
              { step: "2", title: "Dodaj Server", desc: "Idi na Multiplayer → Add Server" },
              { step: "3", title: "Unesi IP", desc: "delaasmp.aternos.me" },
            ].map((s) => (
              <div key={s.step} className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={copyIP}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <Copy className="h-4 w-4" />
              {copied ? "IP Kopiran! ✓" : "Kopiraj Server IP"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
