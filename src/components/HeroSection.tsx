import heroMc from "@/assets/hero-mc.jpg";
import { Copy } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText("delaasmp.aternos.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroMc} alt="Crystal PVP" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 font-minecraft">
            ⚔ Crystal PVP Server
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-foreground">
            Dobrodošli na{" "}
            <span className="text-primary">Delaa</span>SMP
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            Najbolji Crystal PVP i Survival SMP server. Pridruži se zajednici i pokaži svoje vještine u epskim bitkama!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={copyIP}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <Copy className="h-4 w-4" />
              {copied ? "IP Kopiran!" : "Kopiraj Server IP"}
            </button>
            <a
              href="#modes"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-bold rounded-lg hover:bg-secondary transition-colors text-sm"
            >
              Istraži modove
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-lg border border-border">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "hsl(120, 60%, 50%)" }} />
            <code className="text-sm text-muted-foreground">delaasmp.aternos.me</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
