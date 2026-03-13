import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-header shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => scroll("hero")} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm font-[Poppins] shadow-md group-hover:shadow-accent/30 transition-shadow duration-300">
            <Sparkles size={18} />
          </div>
          <span className="font-[Poppins] font-bold text-foreground text-lg hidden sm:inline tracking-tight">
            Pack Contador Estratégico
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Agentes", "agents"],
            ["Sobre", "problem"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scroll(id)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => scroll("form")}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
          >
            Começar Agora
          </Button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-header px-4 pb-4 flex flex-col gap-3 border-t border-border/30">
          {[
            ["Agentes", "agents"],
            ["Sobre", "problem"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => scroll(id)} className="text-left text-muted-foreground hover:text-foreground py-2.5 text-sm font-medium">
              {label}
            </button>
          ))}
          <Button size="sm" onClick={() => scroll("form")} className="bg-gradient-to-r from-primary to-accent text-primary-foreground w-full">
            Começar Agora
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
