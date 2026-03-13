import { Clock, Users, TrendingDown, AlertCircle, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  { icon: Clock, title: "Tarefas Repetitivas Consumem seu Tempo", desc: "Você passa horas em digitação de documentos e conciliações, quando poderia estar sendo estratégico." },
  { icon: Users, title: "Clientes Não Veem Seu Verdadeiro Valor", desc: "Muitos ainda o veem apenas como um 'mal necessário', sempre questionando seus honorários." },
  { icon: TrendingDown, title: "Crescimento Sem Lucratividade", desc: "Seu escritório cresce em clientes, mas a lucratividade não acompanha. Você trabalha mais, mas não ganha mais." },
  { icon: AlertCircle, title: "Medo de Ficar Para Trás", desc: "A tecnologia avança, a IA ganha espaço, e você se pergunta se seu escritório está ficando obsoleto." },
  { icon: Zap, title: "Falta de Diferencial no Mercado", desc: "Você sonha em ser um parceiro estratégico, mas a rotina operacional não deixa tempo para isso." },
];

const ProblemsSection = () => (
  <section id="problem" className="py-24 sm:py-32 bg-background section-pattern relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-semibold uppercase tracking-widest">
            Os Desafios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-[Poppins] tracking-tight">
            Se você é um contador, provavelmente
            <br className="hidden sm:block" />
            <span className="text-destructive"> já sentiu isso na pele</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Você não está sozinho. Esses são os desafios que mais de 500 escritórios contábeis enfrentam todos os dias.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5">
        {problems.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="glass-card rounded-2xl p-6 card-hover group">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/15 transition-colors duration-300">
                <p.icon className="text-destructive" size={22} />
              </div>
              <h3 className="font-[Poppins] font-semibold text-foreground mb-2 text-lg">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary via-primary to-accent text-center shadow-2xl shadow-primary/20 animate-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }} />
          <p className="text-primary-foreground font-[Poppins] font-bold text-lg sm:text-xl relative z-10">
            A boa notícia: Existe uma solução que resolve TODOS esses problemas de uma vez.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemsSection;
