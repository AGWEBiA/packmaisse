import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Bot, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 hero-dark" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />

      {/* Floating icons */}
      <div className="absolute top-1/3 left-[10%] hidden lg:block animate-float opacity-20">
        <Bot size={48} className="text-accent" />
      </div>
      <div className="absolute bottom-1/3 right-[12%] hidden lg:block animate-float opacity-15" style={{ animationDelay: "3s" }}>
        <TrendingUp size={40} className="text-accent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24 sm:py-32">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wide backdrop-blur-sm">
            <Sparkles size={14} className="animate-pulse" />
            Pack de Agentes de IA para Contadores
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-primary-foreground mb-8 font-[Poppins] tracking-tight">
            De Contador a{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-accent via-emerald-300 to-accent bg-clip-text text-transparent animate-shimmer">
                Consultor Estratégico
              </span>
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4 font-[Poppins] font-medium">
            Acelere seu crescimento com o novo pack de IA de Anderson Maisse
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-base text-primary-foreground/60 max-w-xl mx-auto mb-12">
            Enquanto seus concorrentes perdem tempo com tarefas operacionais, você estará usando IA para atrair clientes, gerar valor e aumentar seus honorários.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scroll("form")}
              className="bg-gradient-to-r from-accent to-emerald-500 hover:opacity-90 text-accent-foreground px-10 py-7 text-base font-semibold animate-pulse-soft shadow-2xl shadow-accent/25 rounded-xl"
            >
              Quero Acelerar Meu Escritório Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scroll("agents")}
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-7 text-base rounded-xl backdrop-blur-sm"
            >
              Conheça os Agentes
            </Button>
          </div>
        </ScrollReveal>

        {/* Trust badges */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/40 text-xs font-medium">
            <span className="flex items-center gap-1.5">✓ Acesso Vitalício</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span className="flex items-center gap-1.5">✓ Garantia de 7 dias</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span className="flex items-center gap-1.5">✓ Suporte Completo</span>
          </div>
        </ScrollReveal>

        <div className="mt-12 animate-bounce-arrow">
          <ArrowDown className="mx-auto text-primary-foreground/30" size={28} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
