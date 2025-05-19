import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { useToast } from '@/components/ui/use-toast';
    import { DollarSign, TrendingUp, Lightbulb, Send, Loader2, Briefcase } from 'lucide-react';

    const InvestorSection = ({ id }) => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
          toast({ title: "Error", description: "Por favor, completa tu nombre y correo electrónico.", variant: "destructive" });
          return;
        }
        setIsSubmitting(true);
        
        setTimeout(() => {
          console.log("Formulario de Inversionista Enviado:", formData);
          toast({ title: "¡Gracias por tu interés!", description: "Hemos recibido tu mensaje. Un miembro de nuestro equipo se pondrá en contacto pronto." });
          setFormData({ name: '', email: '', organization: '', message: '' });
          setIsSubmitting(false);
        }, 1500);
      };

      return (
        <section id={id} className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-slate-900 to-purple-900/80 text-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <DollarSign size={40} className="mx-auto text-accent mb-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100">
                Invierte en el Futuro de la <span className="text-accent">Inclusión Financiera</span>
              </h2>
              <p className="text-md sm:text-lg text-slate-400 max-w-3xl mx-auto mt-4 sm:mt-5">
                WakuPay está posicionado para un crecimiento exponencial al servir a un mercado desatendido con soluciones innovadoras. Únete a nosotros para generar un impacto social significativo y obtener retornos atractivos.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-primary/20 text-primary rounded-full mr-4 flex-shrink-0">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-1">Oportunidad de Mercado Masiva</h3>
                    <p className="text-sm sm:text-base text-slate-400">Miles de millones de personas migrantes y pequeños emprendedores carecen de acceso a servicios financieros adecuados. WakuPay cierra esta brecha.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-secondary/20 text-secondary rounded-full mr-4 flex-shrink-0">
                    <Lightbulb size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-1">Modelo de Negocio Escalable</h3>
                    <p className="text-sm sm:text-base text-slate-400">Nuestra plataforma tecnológica permite una rápida expansión a nuevos mercados con costos marginales bajos.</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <div className="p-3 bg-accent/20 text-accent rounded-full mr-4 flex-shrink-0">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-1">Equipo Apasionado y Experimentado</h3>
                    <p className="text-sm sm:text-base text-slate-400">Liderados por fundadores con experiencia directa en los desafíos que resolvemos y un profundo conocimiento técnico.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="glassmorphism-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-accent/30"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-center text-slate-100 mb-6 sm:mb-8">
                  Conéctate con Nosotros
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="investor-name" className="block text-sm font-medium text-slate-300 mb-1">Nombre Completo*</label>
                    <Input type="text" name="name" id="investor-name" value={formData.name} onChange={handleInputChange} placeholder="Tu Nombre" className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-accent" required />
                  </div>
                  <div>
                    <label htmlFor="investor-email" className="block text-sm font-medium text-slate-300 mb-1">Correo Electrónico*</label>
                    <Input type="email" name="email" id="investor-email" value={formData.email} onChange={handleInputChange} placeholder="tu@correo.com" className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-accent" required />
                  </div>
                  <div>
                    <label htmlFor="investor-organization" className="block text-sm font-medium text-slate-300 mb-1">Organización (Opcional)</label>
                    <Input type="text" name="organization" id="investor-organization" value={formData.organization} onChange={handleInputChange} placeholder="Nombre de tu Fondo o Empresa" className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-accent" />
                  </div>
                  <div>
                    <label htmlFor="investor-message" className="block text-sm font-medium text-slate-300 mb-1">Mensaje (Opcional)</label>
                    <Textarea name="message" id="investor-message" value={formData.message} onChange={handleInputChange} placeholder="¿Algo específico que te gustaría discutir?" rows={3} className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-accent" />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-accent to-orange-500 text-white text-md sm:text-lg py-3 rounded-lg shadow-lg hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 size={24} className="mr-2 animate-spin" />
                    ) : (
                      <Send size={20} className="mr-2 group-hover:animate-pingOnce" />
                    )}
                    {isSubmitting ? "Enviando..." : "Solicitar Información"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default InvestorSection;