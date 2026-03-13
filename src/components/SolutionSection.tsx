import { Sparkles, Zap, TrendingUp, Target, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Zap, label: "Automação Inteligente", desc: "IA trabalhando 24h por você" },
  { icon: TrendingUp, label: "Crescimento Acelerado", desc: "Mais clientes, mais receita" },
  { icon: Target, label: "Posicionamento Estratégico", desc: "De operacional a consultor" },
];

const SolutionSection = () => (
  <section className="py-16 sm:py-24 lg:py-32 bg-secondary relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-accent/5 rounded-full blur-[150px]" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 mb-5 sm:mb-6 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-widest">
              <Sparkles size={12} /> A Solução
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-5 sm:mb-6 font-[Poppins] tracking-tight leading-tight">
              Apresentando: O{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pack Contador Estratégico IA
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              O Pack Contador Estratégico IA é um pack com 4 agentes de inteligência artificial, treinados especificamente para resolver os maiores desafios dos contadores modernos.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
              Cada agente atua como um especialista dedicado, trabalhando 24h por dia para automatizar tarefas, atrair clientes, aumentar honorários e posicionar você como consultor estratégico.
            </p>
            <p className="text-accent font-semibold font-[Poppins] flex items-center gap-2 justify-center lg:justify-start text-sm sm:text-base">
              <ArrowRight size={16} />
              O resultado? Mais tempo, mais clientes, mais lucro — e menos estresse.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-3 sm:space-y-4">
            {features.map((item, i) => (
              <div key={i} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 card-hover">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                  <item.icon className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <span className="font-[Poppins] font-bold text-foreground text-base sm:text-lg">{item.label}</span>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default SolutionSection;
