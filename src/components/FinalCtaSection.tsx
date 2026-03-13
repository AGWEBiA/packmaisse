import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const FinalCtaSection = () => {
  const scroll = () => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 sm:py-32 hero-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 font-[Poppins] tracking-tight leading-tight">
            A escolha é sua: Continuar no operacional ou
            <span className="bg-gradient-to-r from-accent via-emerald-300 to-accent bg-clip-text text-transparent"> acelerar para o futuro?</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-primary-foreground/70 mb-10 text-lg leading-relaxed">
            Você pode continuar fazendo as mesmas coisas, esperando resultados diferentes. Ou pode tomar a decisão de se juntar ao grupo de contadores que estão na vanguarda, usando a inteligência artificial para construir escritórios mais lucrativos, eficientes e valorizados.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 mb-12 backdrop-blur-sm">
            <p className="text-primary-foreground font-semibold text-lg font-[Poppins]">
              Não espere a concorrência passar na sua frente. Os contadores que começarem agora terão uma vantagem competitiva massiva nos próximos 12 meses.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.35}>
          <Button
            size="lg"
            onClick={scroll}
            className="bg-gradient-to-r from-accent to-emerald-500 hover:opacity-90 text-accent-foreground px-12 py-7 text-base font-bold animate-pulse-soft shadow-2xl shadow-accent/30 rounded-xl"
          >
            Sim, Eu Quero Transformar Minha Contabilidade com IA!
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <p className="text-primary-foreground/40 text-sm mt-8">
            Garantia de 7 dias • Acesso Vitalício • Suporte Completo
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCtaSection;
