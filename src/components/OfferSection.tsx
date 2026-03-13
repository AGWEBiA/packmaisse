import { Check, Shield, Sparkles } from "lucide-react";
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
    <section className="py-24 sm:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-widest">
              Oferta Especial
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-[Poppins] tracking-tight">
              Sua Oportunidade de
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Acelerar Chegou</span>
            </h2>
            <p className="text-muted-foreground">
              Ao adquirir o Pack Contador Estratégico IA hoje, você recebe:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-4 flex items-start gap-4 card-hover">
                  <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="text-accent" size={14} />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-1 shadow-2xl shadow-primary/20 glow-primary">
              <div className="rounded-[calc(1.5rem-4px)] bg-gradient-to-br from-primary to-accent p-8 sm:p-10 text-center relative overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "16px 16px",
                }} />

                <div className="relative z-10">
                  <Sparkles className="mx-auto mb-4 text-primary-foreground/60" size={28} />
                  <p className="text-primary-foreground/70 text-sm mb-1">Valor Total de Tudo o que Você Recebe:</p>
                  <p className="text-primary-foreground/60 line-through text-2xl font-[Poppins] font-bold mb-6">R$ 1.988</p>
                  <p className="text-primary-foreground/70 text-sm mb-2">Mas hoje, você tem acesso por apenas:</p>
                  <p className="text-primary-foreground text-6xl font-[Poppins] font-extrabold mb-1 tracking-tight">R$ 297</p>
                  <p className="text-primary-foreground/60 text-sm mb-10">ou 12x de R$ 29,70</p>
                  <Button
                    size="lg"
                    onClick={scroll}
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full py-7 text-base font-bold shadow-xl rounded-xl"
                  >
                    Quero Acelerar Meu Escritório Agora!
                  </Button>
                  <div className="flex items-center justify-center gap-2 mt-5">
                    <Shield className="text-primary-foreground/60" size={14} />
                    <span className="text-primary-foreground/60 text-xs">Garantia de 7 dias ou seu dinheiro de volta</span>
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

export default OfferSection;
