import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "Preciso ser um expert em tecnologia para usar os agentes?", a: "Não! Os agentes foram desenhados para serem extremamente fáceis de usar. Se você sabe digitar uma pergunta, você sabe usar o Pack Contador Estratégico IA. Tudo é intuitivo e foi testado com contadores que não têm experiência com IA." },
  { q: "Isso funciona para o meu nicho de contabilidade?", a: "Sim. Os agentes são treinados em princípios universais de marketing, vendas e análise financeira, podendo ser adaptados para qualquer nicho contábil. Seja você especialista em PJ, MEI, Simples Nacional ou Lucro Presumido, os agentes funcionam." },
  { q: "Terei suporte se tiver dificuldades?", a: "Sim. Você terá acesso à nossa comunidade de usuários e a um canal de suporte para tirar todas as suas dúvidas. Além disso, você receberá aulas e tutoriais exclusivos sobre como usar cada agente ao máximo." },
  { q: "Por quanto tempo terei acesso ao pack?", a: "O acesso é vitalício! Você paga uma vez e tem acesso a todos os agentes e futuras atualizações para sempre. Não há assinatura mensal ou anual. É um investimento único que continua gerando retorno indefinidamente." },
  { q: "Qual é a garantia?", a: "Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta nos enviar um e-mail e nós devolveremos 100% do seu investimento. Sem perguntas, sem burocracia." },
  { q: "Como funciona o pagamento?", a: "Você pode pagar à vista (R$ 297) ou parcelado em 12x de R$ 29,70. Aceitamos cartão de crédito, PIX e boleto. O acesso é liberado imediatamente após a confirmação do pagamento." },
];

const FaqSection = () => (
  <section id="faq" className="py-24 sm:py-32 bg-secondary scroll-mt-20 relative">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-[Poppins] tracking-tight">
            Perguntas
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Frequentes</span>
          </h2>
          <p className="text-muted-foreground">
            Respostas para as dúvidas mais comuns sobre o Pack Contador Estratégico IA
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card rounded-2xl px-6 data-[state=open]:shadow-lg data-[state=open]:border-accent/30 transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-[Poppins] font-semibold text-foreground hover:no-underline py-5 text-[15px]">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FaqSection;
