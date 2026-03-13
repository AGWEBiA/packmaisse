import { Sparkles } from "lucide-react";

const Header = () => {
  const scroll = () =>
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-14">
        <button onClick={scroll} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm font-[Poppins] shadow-md group-hover:shadow-accent/30 transition-shadow duration-300">
            <Sparkles size={16} />
          </div>
          <span className="font-[Poppins] font-bold text-foreground text-base sm:text-lg tracking-tight">
            Pack Contador Estratégico
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
