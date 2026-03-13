import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scroll = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => scroll("hero")} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg font-[Poppins]">
            A
          </div>
          <span className="font-[Poppins] font-bold text-foreground text-lg hidden sm:inline"><span className="font-[Poppins] font-bold text-foreground text-lg hidden sm:inline">Pack Contador Estratégico</span></span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Agentes", "agents"],
            ["Sobre", "problem"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => scroll(id)} className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
              {label}
            </button>
          ))}
          <Button size="sm" onClick={() => scroll("form")} className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-soft">
            Começar Agora
          </Button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          {[
            ["Agentes", "agents"],
            ["Sobre", "problem"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => scroll(id)} className="text-left text-muted-foreground hover:text-foreground py-2 text-sm">
              {label}
            </button>
          ))}
          <Button size="sm" onClick={() => scroll("form")} className="bg-primary text-primary-foreground w-full">
            Começar Agora
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
