import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input'; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { HeartHandshake as Handshake, Send, Users, Code, Palette, Briefcase, Lightbulb, MessageSquare, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const professions = [
  { value: 'developer_nextjs', label: 'Desarrollador Next.js', icon: <Code className="mr-2 h-4 w-4" /> },
  { value: 'developer_nodejs', label: 'Desarrollador Node.js', icon: <Code className="mr-2 h-4 w-4" /> },
  { value: 'developer_react_native', label: 'Desarrollador React Native', icon: <Code className="mr-2 h-4 w-4" /> },
  { value: 'designer_ui_ux', label: 'Diseñador UI/UX', icon: <Palette className="mr-2 h-4 w-4" /> },
  { value: 'lawyer', label: 'Abogado/Asesor Legal', icon: <Briefcase className="mr-2 h-4 w-4" /> },
  { value: 'marketing_communications', label: 'Marketing y Comunicaciones', icon: <MessageSquare className="mr-2 h-4 w-4" /> },
  { value: 'project_manager', label: 'Gestor de Proyectos', icon: <Briefcase className="mr-2 h-4 w-4" /> },
  { value: 'tester_qa', label: 'Tester / QA', icon: <Users className="mr-2 h-4 w-4" /> },
  { value: 'community_manager', label: 'Community Manager', icon: <Users className="mr-2 h-4 w-4" /> },
  { value: 'content_creator', label: 'Creador de Contenido', icon: <Lightbulb className="mr-2 h-4 w-4" /> },
  { value: 'other', label: 'Otro (especificar)', icon: <Users className="mr-2 h-4 w-4" /> },
];

const CollaboratePage = () => {
  const { toast } = useToast();
  const [selectedProfession, setSelectedProfession] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [otherProfession, setOtherProfession] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const professionLabel = professions.find(p => p.value === selectedProfession)?.label || otherProfession;
    const mailtoLink = `mailto:Contactowakupay@gmail.com?subject=Colaboración WakuPay - ${professionLabel} (${name})&body=Hola WakuPay,%0D%0A%0D%0AMi nombre es ${name} (${email}) y estoy interesado/a en colaborar como ${professionLabel}.%0D%0A%0D%0AMis motivaciones o ideas son:%0D%0A${message}%0D%0A%0D%0ASaludos,`;
    
    window.location.href = mailtoLink;

    toast({
      title: "¡Gracias por tu interés!",
      description: "Se abrirá tu cliente de correo para enviar tu solicitud. Por favor, completa y envía el email.",
      variant: "default",
      className: "bg-wakupay-primary text-white"
    });

    setName('');
    setEmail('');
    setMessage('');
    setSelectedProfession('');
    setOtherProfession('');
  };

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-wakupay-primary/5 via-wakupay-light to-wakupay-secondary/5 dark:from-wakupay-primary/10 dark:via-wakupay-dark dark:to-wakupay-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <Handshake className="h-16 w-16 text-wakupay-primary mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Únete a la <span className="gradient-text">Revolución WakuPay</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            WakuPay es un proyecto de impacto social con lanzamiento en 2030 y necesitamos tu talento para construir el futuro financiero de la región. Si eres un profesional apasionado o simplemente quieres apoyar una causa transformadora, ¡queremos conocerte!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="w-full shadow-2xl glassmorphism border-wakupay-primary/30 dark:border-wakupay-secondary/30">
              <CardHeader>
                <CardTitle className="text-3xl text-center font-poppins gradient-text">Formulario de Colaboración</CardTitle>
                <CardDescription className="text-center text-wakupay-dark/70 dark:text-wakupay-light/70">
                  Selecciona tu área de experticia y envíanos un mensaje. ¡Juntos construiremos algo grande!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-wakupay-dark dark:text-wakupay-light font-semibold">Nombre Completo</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Tu nombre" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                      className="mt-1 bg-white/80 dark:bg-wakupay-dark/50 border-wakupay-primary/50 focus:ring-wakupay-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-wakupay-dark dark:text-wakupay-light font-semibold">Correo Electrónico</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="tu@correo.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      className="mt-1 bg-white/80 dark:bg-wakupay-dark/50 border-wakupay-primary/50 focus:ring-wakupay-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="profession" className="text-wakupay-dark dark:text-wakupay-light font-semibold">Área de Colaboración</Label>
                    <Select onValueChange={setSelectedProfession} value={selectedProfession} required>
                      <SelectTrigger id="profession" className="mt-1 bg-white/80 dark:bg-wakupay-dark/50 border-wakupay-primary/50 focus:ring-wakupay-primary">
                        <SelectValue placeholder="Selecciona tu profesión o área de interés" />
                      </SelectTrigger>
                      <SelectContent className="bg-wakupay-light dark:bg-wakupay-dark border-wakupay-primary/50">
                        {professions.map((prof) => (
                          <SelectItem key={prof.value} value={prof.value} className="hover:bg-wakupay-primary/10 dark:hover:bg-wakupay-primary/20">
                            <div className="flex items-center">
                              {prof.icon} {prof.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedProfession === 'other' && (
                    <div>
                      <Label htmlFor="otherProfession" className="text-wakupay-dark dark:text-wakupay-light font-semibold">Especifica tu Área</Label>
                      <Input 
                        id="otherProfession" 
                        type="text" 
                        placeholder="Ej: Traductor, Soporte Comunitario" 
                        value={otherProfession}
                        onChange={(e) => setOtherProfession(e.target.value)}
                        required 
                        className="mt-1 bg-white/80 dark:bg-wakupay-dark/50 border-wakupay-primary/50 focus:ring-wakupay-primary"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="message" className="text-wakupay-dark dark:text-wakupay-light font-semibold">¿Por qué WakuPay? (Opcional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Cuéntanos qué te motiva a unirte, tus ideas, o cómo crees que puedes aportar..." 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 bg-white/80 dark:bg-wakupay-dark/50 border-wakupay-primary/50 focus:ring-wakupay-primary"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-wakupay-primary to-wakupay-accent text-white font-semibold text-lg hover:opacity-90 transition-opacity duration-300 shadow-lg">
                    Enviar Solicitud de Colaboración <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-center text-wakupay-dark/60 dark:text-wakupay-light/60 w-full">
                    Al hacer clic, se abrirá tu cliente de correo electrónico predeterminado con un borrador.
                    El correo de contacto es: <strong className="gradient-text">Contactowakupay@gmail.com</strong>
                </p>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Card className="shadow-xl glassmorphism border-wakupay-secondary/30 dark:border-wakupay-accent/30">
              <CardHeader>
                <CardTitle className="text-2xl text-wakupay-dark dark:text-wakupay-light">¿Qué Buscamos?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-wakupay-dark/70 dark:text-wakupay-light/70">
                <p className="flex items-start"><Lightbulb className="h-5 w-5 text-wakupay-secondary mr-2 mt-1 flex-shrink-0" /> Personas apasionadas por la inclusión financiera y el impacto social.</p>
                <p className="flex items-start"><Code className="h-5 w-5 text-wakupay-secondary mr-2 mt-1 flex-shrink-0" /> Talento en desarrollo (web, móvil), diseño, legal, marketing, gestión de comunidades y más.</p>
                <p className="flex items-start"><Users className="h-5 w-5 text-wakupay-secondary mr-2 mt-1 flex-shrink-0" /> Compromiso y ganas de ser parte de un equipo que está construyendo el futuro.</p>
                <p className="flex items-start"><Handshake className="h-5 w-5 text-wakupay-secondary mr-2 mt-1 flex-shrink-0" /> Proactividad e ideas innovadoras para enfrentar los desafíos financieros de la región.</p>
              </CardContent>
            </Card>
            <Card className="shadow-xl glassmorphism border-wakupay-accent/30 dark:border-wakupay-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl text-wakupay-dark dark:text-wakupay-light">¿Qué Ofrecemos?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-wakupay-dark/70 dark:text-wakupay-light/70">
                <p className="flex items-start"><Zap className="h-5 w-5 text-wakupay-accent mr-2 mt-1 flex-shrink-0" /> Ser parte de un proyecto pionero con un enorme potencial de impacto.</p>
                <p className="flex items-start"><Palette className="h-5 w-5 text-wakupay-accent mr-2 mt-1 flex-shrink-0" /> Oportunidad de aplicar y desarrollar tus habilidades en un contexto real y desafiante.</p>
                <p className="flex items-start"><Users className="h-5 w-5 text-wakupay-accent mr-2 mt-1 flex-shrink-0" /> Networking con profesionales de diversas áreas y culturas.</p>
                <p className="flex items-start"><Briefcase className="h-5 w-5 text-wakupay-accent mr-2 mt-1 flex-shrink-0" /> La satisfacción de contribuir a una causa que puede cambiar vidas.</p>
                <p className="text-sm mt-4 text-wakupay-dark/60 dark:text-wakupay-light/60">
                  Actualmente, las colaboraciones son voluntarias. A medida que el proyecto crezca, exploraremos modelos de compensación.
                </p>
              </CardContent>
            </Card>
             <div className="text-center mt-6">
                <Button variant="outline" asChild className="border-wakupay-primary text-wakupay-primary hover:bg-wakupay-primary/10 dark:text-wakupay-accent dark:border-wakupay-accent">
                    <Link to="/inversionistas">¿Interesado en Invertir?</Link>
                </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CollaboratePage;