import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { useToast } from '@/components/ui/use-toast';
    import { Users, Briefcase, ArrowRight, Send, Loader2 } from 'lucide-react';

    const RoleCard = ({ icon, title, description, onApply, delay }) => (
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(3px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay }}
        className="bg-slate-800/70 p-6 rounded-xl shadow-lg hover:shadow-primary/30 transition-shadow duration-300 flex flex-col border border-purple-500/30"
      >
        <div className="flex items-center mb-3">
          {React.cloneElement(icon, { className: "text-primary mr-3"})}
          <h3 className="text-lg sm:text-xl font-semibold text-slate-100">{title}</h3>
        </div>
        <p className="text-sm text-slate-400 mb-4 flex-grow">{description}</p>
        <Button 
          variant="outline" 
          className="mt-auto border-primary text-primary hover:bg-primary/10 hover:text-white w-full text-xs sm:text-sm group"
          onClick={onApply}
        >
          Me Interesa <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    );

    const JoinTeamSection = ({ id, roles }) => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [selectedRole, setSelectedRole] = useState('');

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleRoleApply = (roleTitle) => {
        setSelectedRole(roleTitle);
        setFormData(prev => ({ ...prev, role: roleTitle }));
        const formElement = document.getElementById('join-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          document.getElementById('name').focus();
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.role) {
          toast({ title: "Error", description: "Por favor, completa los campos obligatorios.", variant: "destructive" });
          return;
        }
        setIsSubmitting(true);
        
        setTimeout(() => {
          console.log("Formulario de Colaborador Enviado:", formData);
          toast({ title: "¡Gracias por tu interés!", description: "Hemos recibido tu mensaje. Nos pondremos en contacto pronto." });
          setFormData({ name: '', email: '', role: selectedRole, message: '' });
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
              <Users size={40} className="mx-auto text-primary mb-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100">
                Únete al Equipo <span className="text-primary">Waku</span>
              </h2>
              <p className="text-md sm:text-lg text-slate-400 max-w-2xl mx-auto mt-4 sm:mt-5">
                Buscamos talento apasionado para revolucionar las finanzas. Si crees en nuestra misión, ¡queremos conocerte!
              </p>
            </motion.div>

            {roles && roles.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
                {roles.map((role, index) => (
                  <RoleCard
                    key={role.title}
                    icon={role.icon}
                    title={role.title}
                    description={role.description}
                    onApply={() => handleRoleApply(role.title)}
                    delay={index * 0.15}
                  />
                ))}
              </div>
            )}
            
            <motion.div
              id="join-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay:0.3 }}
              className="max-w-2xl mx-auto glassmorphism-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-primary/30"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-center text-slate-100 mb-6 sm:mb-8">
                {selectedRole ? `Aplicar para: ${selectedRole}` : "Manifiesta tu Interés"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nombre Completo*</label>
                  <Input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="Tu Nombre" className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-primary" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Correo Electrónico*</label>
                  <Input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="tu@correo.com" className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-primary" required />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-1">Rol de Interés*</label>
                  <Input type="text" name="role" id="role" value={formData.role} onChange={handleInputChange} placeholder="Ej: Desarrollador Frontend, Marketing..." className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-primary" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Mensaje (Opcional)</label>
                  <Textarea name="message" id="message" value={formData.message} onChange={handleInputChange} placeholder="Cuéntanos un poco sobre ti y por qué te interesa WakuPay." rows={4} className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-primary" />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent text-white text-md sm:text-lg py-3 rounded-lg shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 group"
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
        </section>
      );
    };
    
    export default JoinTeamSection;