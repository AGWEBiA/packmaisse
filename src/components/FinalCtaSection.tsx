import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const FinalCtaSection = () => {
  const scroll = () => document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-16 sm:py-24 lg:py-32 hero-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[400px] sm:h-[600px] bg-accent/10 rounded-full blur-[200px]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-primary-foreground mb-5 sm:mb-6 font-[Poppins] tracking-tight leading-tight">
            A escolha é sua: Continuar no operacional ou
            <span className="bg-gradient-to-r from-accent via-emerald-300 to-accent bg-clip-text text-transparent"> acelerar para o futuro?</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/70 mb-8 sm:mb-10 leading-relaxed">
            Você pode continuar fazendo as mesmas coisas, esperando resultados diferentes. Ou pode tomar a decisão de se juntar ao grupo de contadores que estão na vanguarda, usando a inteligência artificial para construir escritórios mais lucrativos, eficientes e valorizados.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-8 sm:mb-12 backdrop-blur-sm">
            <p className="text-sm sm:text-base lg:text-lg text-primary-foreground font-semibold font-[Poppins]">
              Não espere a concorrência passar na sua frente. Os contadores que começarem agora terão uma vantagem competitiva massiva nos próximos 12 meses.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.35}>
          <Button
            size="lg"
            onClick={scroll}
            className="bg-gradient-to-r from-accent to-emerald-500 hover:opacity-90 text-accent-foreground px-8 sm:px-12 py-6 sm:py-7 text-sm sm:text-base font-bold animate-pulse-soft shadow-2xl shadow-accent/30 rounded-xl w-full sm:w-auto"
          >
            Sim, Eu Quero Transformar Minha Contabilidade com IA!
            <ArrowRight className="ml-2" size={18} />
          </Button>
          <p className="text-primary-foreground/40 text-[10px] sm:text-sm mt-6 sm:mt-8">
            Garantia de 7 dias • Acesso Vitalício • Suporte Completo
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCtaSection;
