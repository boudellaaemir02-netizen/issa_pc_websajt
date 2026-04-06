import { Users, Gamepad2, Copy } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText("delaasmp.aternos.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-topbar text-topbar-foreground text-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Gamepad2 className="h-3.5 w-3.5" />
            Minecraft Java Edition
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            Online 24/7
          </span>
        </div>
        <button
          onClick={copyIP}
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Kopirano!" : "delaasmp.aternos.me"}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
