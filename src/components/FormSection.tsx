import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import ScrollReveal from "./ScrollReveal";

const schema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  whatsapp: z.string().min(10, "WhatsApp deve ter pelo menos 10 dígitos").regex(/^[\d()\s+-]+$/, "Formato inválido"),
});

type FormData = z.infer<typeof schema>;

const FormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", whatsapp: "" },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form submitted:", data);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="form" className="py-20 sm:py-28 bg-gradient-to-b from-background to-secondary scroll-mt-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3 font-[Poppins]">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Preencha o formulário abaixo para acessar o Pack Contador Estratégico IA
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <div className="bg-card border border-accent/30 rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Check className="text-accent" size={32} />
              </div>
              <h3 className="font-[Poppins] font-bold text-foreground text-xl mb-2">Obrigado!</h3>
              <p className="text-muted-foreground">Recebemos seus dados com sucesso. Em breve entraremos em contato!</p>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl><Input placeholder="Seu nome completo" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input type="email" placeholder="seu@email.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="whatsapp" render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp com DDD</FormLabel>
                      <FormControl><Input type="tel" placeholder="(11) 99999-9999" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base">
                    {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : null}
                    {loading ? "Enviando..." : "Sim, Eu Quero Acelerar Minha Contabilidade com IA!"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Garantia incondicional de 7 dias. Sem risco, sem compromisso.
                  </p>
                </form>
              </Form>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FormSection;
