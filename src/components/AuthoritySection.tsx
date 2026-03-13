import { Check, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import andersonImg from "@/assets/anderson_maisse.webp";

const AuthoritySection = () => (
  <section className="py-16 sm:py-24 lg:py-32 bg-secondary relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[150px]" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid lg:grid-cols-5 gap-10 sm:gap-12 items-center">
        <ScrollReveal direction="left" className="lg:col-span-2">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5 sm:mb-6">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-md" />
              <img
                src={andersonImg}
                alt="Anderson Maisse"
                className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full object-cover border-4 border-card shadow-2xl"
              />
            </div>
            <h3 className="font-[Poppins] font-bold text-foreground text-lg sm:text-xl">Anderson Maisse</h3>
            <p className="text-accent text-xs sm:text-sm font-semibold mb-5 sm:mb-6">Contador & Mentor de Contadores</p>
            <div className="space-y-2 sm:space-y-3 text-left w-full max-w-xs">
              {["20+ anos de experiência em contabilidade", "Mentor de centenas de contadores", "Especialista em transformação digital"].map((t, i) => (
                <div key={i} className="flex items-center gap-3 glass-card rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="text-accent" size={10} />
                  </div>
                  <span className="text-xs sm:text-sm text-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="lg:col-span-3">
          <div className="text-center lg:text-left">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
              Quem Criou
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5 sm:mb-6 font-[Poppins] tracking-tight">
              Criado por Contador,
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">para Contador</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              Anderson Maisse é uma referência no mercado contábil brasileiro. Com mais de duas décadas de experiência, ele já ajudou centenas de contadores a transformarem seus escritórios em negócios lucrativos e estratégicos.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Agora, ele combinou sua expertise com inteligência artificial para criar uma ferramenta que resolve os maiores desafios da profissão contábil.
            </p>
            <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 relative glow-accent">
              <Quote className="absolute top-4 right-4 text-accent/20" size={24} />
              <p className="text-sm sm:text-base text-foreground italic leading-relaxed pr-6 sm:pr-8">
                "Criei este pack porque acredito que todo contador merece ter acesso às melhores ferramentas de IA, sem precisar ser um expert em tecnologia. Meu objetivo é que você use IA como um atalho para o sucesso."
              </p>
              <p className="text-xs sm:text-sm text-accent font-bold mt-3 sm:mt-4 font-[Poppins]">— Anderson Maisse</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
