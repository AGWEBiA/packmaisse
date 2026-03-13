import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { name: "João P.", loc: "São Paulo/SP", role: "Contador", text: "Eu estava cético no início, mas o Pack Contador Estratégico IA mudou o jogo para mim. O Social Cont me deu uma voz nas redes sociais e, em menos de um mês, fechei dois novos clientes que vieram pelo Instagram." },
  { name: "Carla M.", loc: "Belo Horizonte/MG", role: "Contadora", text: "A Mara Salles é incrível! Usei um dos scripts para renegociar com um cliente antigo que estava com honorários defasados. Consegui um aumento de 40% e o cliente ainda me agradeceu pela nova proposta de valor." },
  { name: "Roberto S.", loc: "Curitiba/PR", role: "Sócio de Escritório", text: "Implementamos o Pack Contador Estratégico em todo nosso escritório. A produtividade aumentou 35% em apenas 2 meses. Nossos clientes agora recebem análises muito mais profundas e consultivas." },
];

const TestimonialsSection = () => (
  <section className="py-16 sm:py-24 lg:py-32 bg-background section-pattern">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <ScrollReveal>
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 font-[Poppins] tracking-tight">
            Veja o que os contadores
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> estão dizendo</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">Contadores reais, resultados reais.</p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-7 card-hover h-full flex flex-col relative group">
              <Quote className="absolute top-4 right-4 text-accent/10 group-hover:text-accent/20 transition-colors duration-300" size={22} />
              <div className="flex gap-0.5 mb-4 sm:mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="text-amber-400 fill-amber-400" size={13} />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 flex-1 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm font-[Poppins] shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-[Poppins] font-semibold text-foreground text-xs sm:text-sm">{t.name}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{t.role} • {t.loc}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
