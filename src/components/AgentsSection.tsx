import { Smartphone, Handshake, Youtube, BarChart3, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const agents = [
  { icon: Smartphone, name: "Social Cont", does: "Cria posts, legendas e roteiros para redes sociais", benefit: "Transforma sua presença online e atrai clientes qualificados", desc: "Chega de se preocupar com o que postar. Ele posiciona você como uma autoridade no mercado, gerando um fluxo constante de oportunidades.", gradient: "from-blue-600 to-blue-400", glow: "shadow-blue-500/20" },
  { icon: Handshake, name: "Mara Salles", does: "Desenvolve scripts de vendas e negociação", benefit: "Aumenta sua conversão e seus honorários", desc: "Com scripts testados e validados, você terá a confiança para vender serviços de maior valor, renegociar contratos e fechar mais negócios.", gradient: "from-accent to-emerald-400", glow: "shadow-accent/20" },
  { icon: Youtube, name: "Contuber", does: "Cria roteiros otimizados para vídeos no YouTube com SEO", benefit: "Expande seu alcance e constrói uma audiência fiel", desc: "O YouTube é uma poderosa ferramenta de marketing. Este agente cria o conteúdo certo para você se destacar, educar seu público e gerar leads.", gradient: "from-red-600 to-red-400", glow: "shadow-red-500/20" },
  { icon: BarChart3, name: "Analista de DRE", does: "Analisa Demonstrações de Resultados e gera insights", benefit: "Transforma dados em lucro para você e seus clientes", desc: "Em vez de apenas entregar relatórios, você fornecerá análises profundas, ajudando seus clientes a tomar decisões mais inteligentes.", gradient: "from-violet-600 to-violet-400", glow: "shadow-violet-500/20" },
];

const AgentsSection = () => (
  <section id="agents" className="py-16 sm:py-24 lg:py-32 bg-background section-pattern scroll-mt-20 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <ScrollReveal>
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-widest">
            Os 4 Agentes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 font-[Poppins] tracking-tight">
            Conheça seu Novo Time de
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Especialistas de IA</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Cada agente foi treinado especificamente para resolver um dos <span className="text-accent font-bold">maiores desafios</span> dos contadores modernos.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {agents.map((a, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-7 card-hover h-full flex flex-col group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center mb-4 sm:mb-5 shadow-lg ${a.glow} group-hover:scale-110 transition-transform duration-300`}>
                  <a.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-[Poppins] font-bold text-foreground text-lg sm:text-xl mb-2">{a.name}</h3>
                <p className="text-xs sm:text-sm text-accent font-semibold mb-2 flex items-center gap-1.5">
                  <ArrowRight size={12} />
                  {a.benefit}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 font-medium">{a.does}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-auto leading-relaxed">{a.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AgentsSection;
