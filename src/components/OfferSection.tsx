import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const items = [
  "Acesso Vitalício ao Pack Contador Estratégico IA",
  "Agente Social Cont para dominar as redes sociais",
  "Agente Mara Salles para vender mais e melhor",
  "Agente Contuber para se tornar autoridade no YouTube",
  "Agente Analista de DRE para consultoria estratégica",
  "Bônus: Aula com Anderson Maisse sobre Serviços de Alto Valor",
];

const OfferSection = () => {
  const scroll = () => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3 font-[Poppins]">
            Sua Oportunidade de Acelerar Chegou
          </h2>
          <p className="text-center text-muted-foreground mb-14">
            Ao adquirir o Pack Contador Estratégico IA hoje, você recebe:
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="text-accent" size={14} />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-center">
              <p className="text-primary-foreground/80 text-sm mb-1">Valor Total de Tudo o que Você Recebe:</p>
              <p className="text-primary-foreground line-through text-2xl font-[Poppins] font-bold mb-4">R$ 1.988</p>
              <p className="text-primary-foreground/80 text-sm mb-1">Mas hoje, você tem acesso por apenas:</p>
              <p className="text-primary-foreground text-5xl font-[Poppins] font-bold mb-1">R$ 297</p>
              <p className="text-primary-foreground/80 text-sm mb-8">ou 12x de R$ 29,70</p>
              <Button size="lg" onClick={scroll} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full py-6 text-base font-semibold">
                Quero Acelerar Meu Escritório Agora!
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Shield className="text-primary-foreground/80" size={16} />
                <span className="text-primary-foreground/80 text-sm">Garantia de 7 dias ou seu dinheiro de volta</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
