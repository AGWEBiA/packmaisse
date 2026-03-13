import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { name: "João P.", loc: "São Paulo/SP", role: "Contador", text: "Eu estava cético no início, mas o Pack Contador Estratégico IA mudou o jogo para mim. O Social Cont me deu uma voz nas redes sociais e, em menos de um mês, fechei dois novos clientes que vieram pelo Instagram. Finalmente estou sendo visto como uma referência!" },
  { name: "Carla M.", loc: "Belo Horizonte/MG", role: "Contadora", text: "A Mara Salles é incrível! Usei um dos scripts para renegociar com um cliente antigo que estava com honorários defasados. Consegui um aumento de 40% e o cliente ainda me agradeceu pela nova proposta de valor. Inacreditável!" },
  { name: "Roberto S.", loc: "Curitiba/PR", role: "Sócio de Escritório", text: "Implementamos o Pack Contador Estratégico em todo nosso escritório. A produtividade aumentou 35% em apenas 2 meses. Nossos clientes agora recebem análises muito mais profundas e consultivas. O ROI foi imediato." },
];

const TestimonialsSection = () => (
  <section className="py-20 sm:py-28 bg-secondary">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3 font-[Poppins]">
          Veja o que os contadores estão dizendo
        </h2>
        <p className="text-center text-muted-foreground mb-14">Contadores reais, resultados reais.</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="text-amber-400 fill-amber-400" size={16} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 flex-1 italic">"{t.text}"</p>
              <div>
                <p className="font-[Poppins] font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} • {t.loc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
