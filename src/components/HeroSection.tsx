import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* BG decorativo */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,hsl(222,62%,28%)_0%,hsl(160,75%,42%)_50%,hsl(0,0%,100%)_100%)]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <ScrollReveal>
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide">
            Pack de Agentes de IA para Contadores
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6 font-[Poppins]">
            De Contador a{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Consultor Estratégico
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-[Poppins] font-semibold">
            Acelere seu crescimento com o novo pack de IA de Anderson Maisse
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
            Enquanto seus concorrentes perdem tempo com tarefas operacionais, você estará usando IA para atrair clientes, gerar valor e aumentar seus honorários.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scroll("form")} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base animate-pulse-soft">
              Quero Acelerar Meu Escritório Agora
            </Button>
            <Button size="lg" variant="outline" onClick={() => scroll("agents")} className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base">
              Conheça os Agentes
            </Button>
          </div>
        </ScrollReveal>

        <div className="mt-16 animate-bounce-arrow">
          <ArrowDown className="mx-auto text-muted-foreground" size={28} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
