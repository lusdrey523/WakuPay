import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, filter: "blur(5px)" },
  in: { opacity: 1, filter: "blur(0px)" },
  out: { opacity: 0, filter: "blur(5px)" },
};

const pageTransition = {
  type: "tween",
  ease: "circOut",
  duration: 0.6,
};

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      // Formspree submission
      // This happens natively by the browser due to form action and method
      // We show the toast just before that.
      toast({
        title: "¡Gracias por tu mensaje!",
        description: "Hemos recibido tu consulta y nos pondremos en contacto pronto. Serás redirigido por Formspree.",
        variant: "default",
        className: "bg-wakupay-primary text-white"
      });

      // Allow the native form submission to proceed after showing the toast
      // For a fully custom AJAX submission (if not redirecting via Formspree), you'd do:
      // const response = await fetch(form.action, {
      //   method: form.method,
      //   body: data,
      //   headers: {
      //     'Accept': 'application/json'
      //   }
      // });
      // if (response.ok) {
      //   setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      //   // Trigger ThankYouModal here if it existed and wasn't a redirect
      // } else {
      //   toast({ title: "Error", description: "Hubo un problema al enviar tu mensaje.", variant: "destructive" });
      // }
      
      // Simulate a short delay to ensure toast is visible before Formspree potentially redirects
      setTimeout(() => {
        form.submit(); 
      }, 1500);


    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="py-16 md:py-24 bg-wakupay-light dark:bg-wakupay-dark"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-20">
          <Mail className="h-20 w-20 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Ponte en <span className="gradient-text">Contacto</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            ¿Tienes preguntas, sugerencias o quieres colaborar? Estamos aquí para escucharte.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="shadow-2xl glassmorphism border-wakupay-primary/30 dark:border-wakupay-secondary/30">
              <CardHeader>
                <CardTitle className="text-3xl font-poppins gradient-text">Envíanos un Mensaje</CardTitle>
                <CardDescription className="text-wakupay-dark/70 dark:text-wakupay-light/70">
                  Completa el formulario y te responderemos lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  id="contactForm" 
                  action="https://formspree.io/f/xnndlpke" 
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <Label htmlFor="name" className="text-wakupay-dark dark:text-wakupay-light font-semibold">Nombre</Label>
                    <Input id="name" name="name" type="text" placeholder="Tu nombre completo" value={formData.name} onChange={handleChange} required className="mt-1 bg-white/80 dark:bg-wakupay-dark/50 border-wakupay-primary/50 focus:ring-wakupay-primary" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-wakupay-dark dark:text-wakupay-light font-semibold">Correo Electrónico</Label>
                    <Input id="email" name="email" type="email" placeholder="tu@correo.com" value={formData.email} onChange={handleChange} required className="mt-1 bg-white/80 dark:bg-wakupay-dark/50 border-wakupay-primary/50 focus:ring-wakupay-primary" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-wakupay-dark dark:text-wakupay-light font-semibold">Asunto</Label>
                    <Input id="subject" name="subject" type="text" placeholder="Motivo de tu consulta" value={formData.subject} onChange={handleChange} required className="mt-1 bg-white/80 dark:bg-wakupay-dark/50 border-wakupay-primary/50 focus:ring-wakupay-primary" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-wakupay-dark dark:text-wakupay-light font-semibold">Mensaje</Label>
                    <Textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." value={formData.message} onChange={handleChange} required className="mt-1 bg-white/80 dark:bg-wakupay-dark/50 border-wakupay-primary/50 focus:ring-wakupay-primary" rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-wakupay-primary to-wakupay-accent text-white font-semibold text-lg hover:opacity-90 transition-opacity duration-300 shadow-lg">
                    Enviar Mensaje <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold text-wakupay-dark dark:text-wakupay-light mb-6">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-wakupay-primary/10 dark:bg-wakupay-primary/20">
                <Mail className="h-8 w-8 text-wakupay-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-wakupay-dark dark:text-wakupay-light">Correo Electrónico Principal</h3>
                  <a href="mailto:Contactowakupay@gmail.com" className="text-wakupay-primary hover:underline">Contactowakupay@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-wakupay-secondary/10 dark:bg-wakupay-secondary/20">
                <Phone className="h-8 w-8 text-wakupay-secondary" />
                <div>
                  <h3 className="text-xl font-semibold text-wakupay-dark dark:text-wakupay-light">Teléfono (Próximamente)</h3>
                  <p className="text-wakupay-dark/70 dark:text-wakupay-light/70">Soporte y Consultas (Número por definir)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-wakupay-accent/10 dark:bg-wakupay-accent/20">
                <MapPin className="h-8 w-8 text-wakupay-accent" />
                <div>
                  <h3 className="text-xl font-semibold text-wakupay-dark dark:text-wakupay-light">Oficina Central (Planificada)</h3>
                  <p className="text-wakupay-dark/70 dark:text-wakupay-light/70">Un hub central en América Latina (Ubicación por definir)</p>
                </div>
              </div>
            </div>
             <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-teal-500/10 to-purple-500/10 dark:from-teal-500/20 dark:to-purple-500/20 shadow-lg">
                <h3 className="text-2xl font-semibold text-wakupay-dark dark:text-wakupay-light mb-3">¿Interesado en Colaborar?</h3>
                <p className="text-wakupay-dark/80 dark:text-wakupay-light/80 mb-4">
                    WakuPay es un proyecto comunitario y tu ayuda es invaluable. Visita nuestra sección de colaboración para más detalles.
                </p>
                <Button asChild variant="outline" className="border-wakupay-primary text-wakupay-primary hover:bg-wakupay-primary/10 dark:border-wakupay-accent dark:text-wakupay-accent dark:hover:bg-wakupay-accent/10">
                    <Link to="/colabora">Ver Oportunidades de Colaboración</Link>
                </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;