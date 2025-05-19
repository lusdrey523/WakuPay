import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, MessageSquare, Send, Loader2, MapPin, Phone } from 'lucide-react';

    const ContactSection = ({ id }) => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
          toast({ title: "Error", description: "Por favor, completa todos los campos.", variant: "destructive" });
          return;
        }
        setIsSubmitting(true);
        
        setTimeout(() => {
          console.log("Formulario de Contacto General Enviado:", formData);
          toast({ title: "¡Mensaje Enviado!", description: "Gracias por contactarnos. Te responderemos a la brevedad." });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        }, 1500);
      };

      return (
        <section id={id} className="py-16 sm:py-20 md:py-28 bg-slate-800 text-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <MessageSquare size={40} className="mx-auto text-secondary mb-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100">
                Hablemos de <span className="text-secondary">WakuPay</span>
              </h2>
              <p className="text-md sm:text-lg text-slate-400 max-w-2xl mx-auto mt-4 sm:mt-5">
                ¿Tienes preguntas, ideas o simplemente quieres saludar? Estamos aquí para escucharte.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-10 sm:gap-12 md:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-2 space-y-8"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-6">Información de Contacto</h3>
                <div className="flex items-start">
                  <div className="p-3 bg-primary/20 text-primary rounded-full mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200">Correo Electrónico</h4>
                    <a href="mailto:info@wakupay.com" className="text-primary hover:text-accent transition-colors">info@wakupay.com</a>
                    <p className="text-xs text-slate-500">Para consultas generales y soporte.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-secondary/20 text-secondary rounded-full mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200">Teléfono (Próximamente)</h4>
                    <p className="text-slate-400">+1 (555) WAKU-PAY</p>
                     <p className="text-xs text-slate-500">Atención al cliente y ventas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-accent/20 text-accent rounded-full mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200">Oficina Central (Próximamente)</h4>
                    <p className="text-slate-400">Santiago, Chile (Corazón de LATAM)</p>
                    <p className="text-xs text-slate-500">Visitas con cita previa.</p>
                  </div>
                </div>
                 <img  alt="Mapa abstracto de conexiones globales centrado en LATAM" class="w-full h-auto rounded-lg opacity-70 mt-6" src="https://images.unsplash.com/photo-1693996797678-d3ebd1cde1e1" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-3 glassmorphism-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-secondary/30"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-center text-slate-100 mb-6 sm:mb-8">
                  Envíanos un Mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-1">Nombre Completo*</label>
                    <Input type="text" name="name" id="contact-name" value={formData.name} onChange={handleInputChange} placeholder="Tu Nombre" className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-secondary" required />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-1">Correo Electrónico*</label>
                    <Input type="email" name="email" id="contact-email" value={formData.email} onChange={handleInputChange} placeholder="tu@correo.com" className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-secondary" required />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-300 mb-1">Asunto*</label>
                    <Input type="text" name="subject" id="contact-subject" value={formData.subject} onChange={handleInputChange} placeholder="Motivo de tu contacto" className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-secondary" required />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-1">Mensaje*</label>
                    <Textarea name="message" id="contact-message" value={formData.message} onChange={handleInputChange} placeholder="Escribe tu mensaje aquí..." rows={4} className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-secondary" required />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-secondary to-teal-500 text-white text-md sm:text-lg py-3 rounded-lg shadow-lg hover:shadow-secondary/40 transform hover:scale-105 transition-all duration-300 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 size={24} className="mr-2 animate-spin" />
                    ) : (
                      <Send size={20} className="mr-2 group-hover:animate-pingOnce" />
                    )}
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default ContactSection;