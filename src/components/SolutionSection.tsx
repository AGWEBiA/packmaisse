import { Sparkles, Zap, TrendingUp, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SolutionSection = () => (
  <section className="py-20 sm:py-28 bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div>
            <span className="inline-flex items-center gap-1.5 mb-6 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              <Sparkles size={14} /> A Solução
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-[Poppins]">
               Apresentando: O Pack Contador Estratégico IA
            </h2>
            <p className="text-muted-foreground mb-4">
               O Pack Contador Estratégico IA é um pack com 4 agentes de inteligência artificial, treinados especificamente para resolver os maiores desafios dos contadores modernos.
            </p>
            <p className="text-muted-foreground mb-4">
              Cada agente atua como um especialista dedicado, trabalhando 24h por dia para automatizar tarefas, atrair clientes, aumentar honorários e posicionar você como consultor estratégico.
            </p>
            <p className="text-primary font-semibold font-[Poppins]">
              O resultado? Mais tempo, mais clientes, mais lucro — e menos estresse.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-8 sm:p-10">
            {[
              { icon: Zap, label: "Automação Inteligente" },
              { icon: TrendingUp, label: "Crescimento Acelerado" },
              { icon: Target, label: "Posicionamento Estratégico" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 mb-6 last:mb-0">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <span className="text-primary-foreground font-[Poppins] font-semibold text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default SolutionSection;
