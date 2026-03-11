import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import andersonImg from "@/assets/anderson_maisse.webp";

const AuthoritySection = () => (
  <section className="py-20 sm:py-28 bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
              <span className="text-primary-foreground font-[Poppins] font-bold text-4xl">AM</span>
            </div>
            <h3 className="font-[Poppins] font-bold text-foreground text-xl">Anderson Maisse</h3>
            <p className="text-muted-foreground text-sm mb-6">Contador & Mentor de Contadores</p>
            <div className="space-y-3">
              {["20+ anos de experiência em contabilidade", "Mentor de centenas de contadores", "Especialista em transformação digital"].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-accent shrink-0" size={18} />
                  <span className="text-sm text-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-[Poppins]">
              Criado por Contador, para Contador
            </h2>
            <p className="text-muted-foreground mb-4">
              Anderson Maisse é uma referência no mercado contábil brasileiro. Com mais de duas décadas de experiência, ele já ajudou centenas de contadores a transformarem seus escritórios em negócios lucrativos e estratégicos.
            </p>
            <p className="text-muted-foreground mb-6">
              Agora, ele combinou sua expertise com inteligência artificial para criar uma ferramenta que resolve os maiores desafios da profissão contábil.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
              <p className="text-sm text-foreground italic">
                "Criei este pack porque acredito que todo contador merece ter acesso às melhores ferramentas de IA, sem precisar ser um expert em tecnologia. Meu objetivo é que você use IA como um atalho para o sucesso."
              </p>
              <p className="text-sm text-accent font-semibold mt-2">— Anderson Maisse</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
