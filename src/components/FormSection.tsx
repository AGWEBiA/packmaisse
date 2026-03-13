import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2, Lock } from "lucide-react";
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
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form submitted:", data);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="form" className="py-16 sm:py-24 lg:py-32 bg-background section-pattern scroll-mt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary" />

      <div className="max-w-lg mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-widest">
              Inscreva-se
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 font-[Poppins] tracking-tight">
              Comece Sua Transformação
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Hoje</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Preencha o formulário abaixo para acessar o Pack Contador Estratégico IA
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <div className="glass-card rounded-xl sm:rounded-2xl p-8 sm:p-10 text-center glow-accent">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                <Check className="text-accent" size={32} />
              </div>
              <h3 className="font-[Poppins] font-bold text-foreground text-xl sm:text-2xl mb-3">Obrigado!</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Recebemos seus dados com sucesso. Em breve entraremos em contato!</p>
            </div>
          ) : (
            <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-9 glow-primary">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm">Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" className="h-11 sm:h-12 rounded-lg sm:rounded-xl bg-background/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu@email.com" className="h-11 sm:h-12 rounded-lg sm:rounded-xl bg-background/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="whatsapp" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm">WhatsApp com DDD</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(11) 99999-9999" className="h-11 sm:h-12 rounded-lg sm:rounded-xl bg-background/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-accent to-emerald-500 hover:opacity-90 text-accent-foreground py-6 sm:py-7 text-sm sm:text-base font-bold rounded-xl shadow-lg shadow-accent/20 animate-pulse-soft"
                  >
                    {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : null}
                    {loading ? "Enviando..." : "Sim, Eu Quero Acelerar Minha Contabilidade com IA!"}
                  </Button>
                  <p className="text-[10px] sm:text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
                    <Lock size={10} />
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
