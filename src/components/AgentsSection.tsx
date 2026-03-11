import { Smartphone, Handshake, Youtube, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const agents = [
  { icon: Smartphone, name: "Social Cont", does: "Cria posts, legendas e roteiros para redes sociais", benefit: "Transforma sua presença online e atrai clientes qualificados", desc: "Chega de se preocupar com o que postar. Ele posiciona você como uma autoridade no mercado, gerando um fluxo constante de oportunidades.", color: "from-primary to-primary/70" },
  { icon: Handshake, name: "Mara Salles", does: "Desenvolve scripts de vendas e negociação", benefit: "Aumenta sua conversão e seus honorários", desc: "Com scripts testados e validados, você terá a confiança para vender serviços de maior valor, renegociar contratos e fechar mais negócios.", color: "from-accent to-accent/70" },
  { icon: Youtube, name: "Contuber", does: "Cria roteiros otimizados para vídeos no YouTube com SEO", benefit: "Expande seu alcance e constrói uma audiência fiel", desc: "O YouTube é uma poderosa ferramenta de marketing. Este agente cria o conteúdo certo para você se destacar, educar seu público e gerar leads.", color: "from-primary to-accent" },
  { icon: BarChart3, name: "Analista de DRE", does: "Analisa Demonstrações de Resultados e gera insights", benefit: "Transforma dados em lucro para você e seus clientes", desc: "Em vez de apenas entregar relatórios, você fornecerá análises profundas, ajudando seus clientes a tomar decisões mais inteligentes.", color: "from-accent to-primary" },
];

const AgentsSection = () => (
  <section id="agents" className="py-20 sm:py-28 bg-secondary scroll-mt-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3 font-[Poppins]">
          Conheça seu Novo Time de Especialistas de IA
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
          Cada agente foi treinado especificamente para resolver um dos maiores desafios dos contadores modernos.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {agents.map((a, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center mb-4`}>
                <a.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-[Poppins] font-bold text-foreground text-xl mb-1">{a.name}</h3>
              <p className="text-sm text-accent font-semibold mb-2">{a.benefit}</p>
              <p className="text-sm text-muted-foreground mb-3">{a.does}</p>
              <p className="text-sm text-muted-foreground mt-auto">{a.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AgentsSection;
