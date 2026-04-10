import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import andersonImg from "@/assets/anderson_maisse.webp";

const HeroSection = () => {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Dark gradient background */}
      <div className="absolute inset-0 hero-dark" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-accent/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -left-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-primary/20 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
                <Sparkles size={14} className="animate-pulse" />
                Pack de Agentes de IA para Contadores
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-primary-foreground mb-5 sm:mb-6 font-[Poppins] tracking-tight">
                De Contador a{" "}
                <span className="bg-gradient-to-r from-accent via-emerald-300 to-accent bg-clip-text text-transparent animate-shimmer">
                  Consultor Estratégico
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg text-primary-foreground/80 mb-3 sm:mb-4 font-[Poppins] font-medium max-w-lg mx-auto lg:mx-0">
                Acelere seu crescimento com o novo pack de IA
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-sm sm:text-base text-primary-foreground/55 max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
                Enquanto seus concorrentes perdem tempo com tarefas operacionais, você estará usando IA para atrair clientes, gerar valor e aumentar seus honorários.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Button
                size="lg"
                onClick={() => scroll("offer-price")}
                className="bg-gradient-to-r from-accent to-emerald-500 hover:opacity-90 text-accent-foreground px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base font-bold animate-pulse-soft shadow-2xl shadow-accent/30 rounded-xl w-full sm:w-auto"
              >
                Quero Acelerar Meu Escritório Agora
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </ScrollReveal>

            <ScrollReveal delay={0.55}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-primary-foreground/40 text-[10px] sm:text-xs font-medium">
                <span>✓ Acesso Vitalício</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/20 hidden sm:block" />
                <span>✓ Garantia de 7 dias</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/20 hidden sm:block" />
                <span>✓ Suporte Completo</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Visual */}
          <ScrollReveal delay={0.3} direction="right" className="order-1 lg:order-2">
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow behind card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-52 sm:w-80 h-52 sm:h-80 bg-accent/15 rounded-full blur-[80px] sm:blur-[100px]" />
              </div>

              <div className="relative w-44 sm:w-64 md:w-72 lg:w-full max-w-sm mx-auto">
                {/* Main photo card */}
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary-foreground/10 shadow-2xl shadow-accent/10">
                  <img
                    src={andersonImg}
                    alt="Anderson Maisse — Criador do Pack Contador Estratégico IA"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent rounded-2xl sm:rounded-3xl" />
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <p className="text-primary-foreground font-[Poppins] font-bold text-sm sm:text-lg">Anderson Maisse</p>
                    <p className="text-primary-foreground/70 text-xs sm:text-sm">Contador & Mentor de Contadores</p>
                  </div>
                </div>

                {/* Floating badge — top-right */}
                <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 glass-card rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex items-center gap-2 sm:gap-3 animate-float shadow-xl">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-accent to-emerald-400 flex items-center justify-center shrink-0">
                    <Bot size={16} className="sm:hidden text-primary-foreground" />
                    <Bot size={20} className="hidden sm:block text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-[Poppins] font-bold text-xs sm:text-sm">4 Agentes</p>
                    <p className="text-muted-foreground text-[10px] sm:text-xs">de IA inclusos</p>
                  </div>
                </div>

                {/* Floating badge — bottom-left */}
                <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 glass-card rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex items-center gap-2 sm:gap-3 animate-float shadow-xl" style={{ animationDelay: "2s" }}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shrink-0">
                    <TrendingUp size={16} className="sm:hidden text-primary-foreground" />
                    <TrendingUp size={20} className="hidden sm:block text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-[Poppins] font-bold text-xs sm:text-sm">+3000</p>
                    <p className="text-muted-foreground text-[10px] sm:text-xs">contadores atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
