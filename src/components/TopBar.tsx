import { Phone, MapPin, Clock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground text-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Sarajevo, BiH
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Pon - Sub: 09:00 - 20:00
          </span>
        </div>
        <a href="tel:+38761234567" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-semibold">
          <Phone className="h-3.5 w-3.5" />
          +387 61 234 567
        </a>
      </div>
    </div>
  );
};

export default TopBar;
