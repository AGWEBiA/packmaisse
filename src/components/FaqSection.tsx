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
  <section id="faq" className="py-20 sm:py-28 bg-secondary scroll-mt-20">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3 font-[Poppins]">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Respostas para as dúvidas mais comuns sobre o Acelerador Contábil IA
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-[Poppins] font-semibold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
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
