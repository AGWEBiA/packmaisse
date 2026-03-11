import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const FinalCtaSection = () => {
  const scroll = () => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-primary to-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 font-[Poppins]">
            A escolha é sua: Continuar no operacional ou acelerar para o futuro?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-primary-foreground/85 mb-8 text-lg">
            Você pode continuar fazendo as mesmas coisas, esperando resultados diferentes. Ou pode tomar a decisão de se juntar ao grupo de contadores que estão na vanguarda, usando a inteligência artificial para construir escritórios mais lucrativos, eficientes e valorizados.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-6 mb-10">
            <p className="text-primary-foreground font-semibold">
              Não espere a concorrência passar na sua frente. Os contadores que começarem agora terão uma vantagem competitiva massiva nos próximos 12 meses.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <Button size="lg" onClick={scroll} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 py-6 text-base font-semibold animate-pulse-soft">
            Sim, Eu Quero Transformar Minha Contabilidade com IA!
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <p className="text-primary-foreground/70 text-sm mt-6">
            Garantia de 7 dias • Acesso Vitalício • Suporte Completo
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCtaSection;
