import { Sparkles, Zap, TrendingUp, Target, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Zap, label: "Automação Inteligente", desc: "IA trabalhando 24h por você" },
  { icon: TrendingUp, label: "Crescimento Acelerado", desc: "Mais clientes, mais receita" },
  { icon: Target, label: "Posicionamento Estratégico", desc: "De operacional a consultor" },
];

const SolutionSection = () => (
  <section className="py-24 sm:py-32 bg-secondary relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div>
            <span className="inline-flex items-center gap-1.5 mb-6 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-widest">
              <Sparkles size={12} /> A Solução
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[Poppins] tracking-tight leading-tight">
              Apresentando: O{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pack Contador Estratégico IA
              </span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              O Pack Contador Estratégico IA é um pack com 4 agentes de inteligência artificial, treinados especificamente para resolver os maiores desafios dos contadores modernos.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Cada agente atua como um especialista dedicado, trabalhando 24h por dia para automatizar tarefas, atrair clientes, aumentar honorários e posicionar você como consultor estratégico.
            </p>
            <p className="text-accent font-semibold font-[Poppins] flex items-center gap-2">
              <ArrowRight size={16} />
              O resultado? Mais tempo, mais clientes, mais lucro — e menos estresse.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-4">
            {features.map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 flex items-center gap-5 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <span className="font-[Poppins] font-bold text-foreground text-lg">{item.label}</span>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
