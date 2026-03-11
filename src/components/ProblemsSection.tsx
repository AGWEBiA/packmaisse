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
  <section id="problem" className="py-20 sm:py-28 bg-secondary">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3 font-[Poppins]">
          Se você é um contador, provavelmente já sentiu isso na pele
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
          Você não está sozinho. Esses são os desafios que mais de 500 escritórios contábeis enfrentam todos os dias.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <p.icon className="text-destructive" size={24} />
              </div>
              <h3 className="font-[Poppins] font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-14 p-6 rounded-xl bg-gradient-to-r from-primary to-accent text-center">
          <p className="text-primary-foreground font-[Poppins] font-semibold text-lg">
            A boa notícia: Existe uma solução que resolve TODOS esses problemas de uma vez.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemsSection;
