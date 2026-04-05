import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground text-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" />
            032 221-654
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            info@pcbuilder.ba
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Pon - Sub:</span> 09:00 - 18:00
        </div>
      </div>
    </div>
  );
};

export default TopBar;
