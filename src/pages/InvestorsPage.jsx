import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { TrendingUp, Target, Users, ShieldCheck, Lightbulb, Send, CalendarClock, HeartHandshake as Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: "spring",
  stiffness: 50,
  duration: 0.8,
};

const InvestorsPage = () => {
  const { toast } = useToast();

  const handleInvestmentInquiry = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const organization = e.target.organization.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:Investors.WakuPay@gmail.com?subject=Interés de Inversión en WakuPay - ${name} (${organization || 'Individual'})&body=Estimado equipo de WakuPay,%0D%0A%0D%0AMi nombre es ${name} y represento a ${organization || 'mí mismo/a'}. Mi correo de contacto es ${email}.%0D%0A%0D%0AEstoy interesado/a en conocer más sobre las oportunidades de inversión en WakuPay. %0D%0A%0D%0AMensaje Adicional:%0D%0A${message}%0D%0A%0D%0AEspero su respuesta.%0D%0ASaludos cordiales,`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Consulta de Inversión Iniciada",
      description: "Se abrirá tu cliente de correo para enviar tu consulta. Por favor, completa y envía el email.",
      className: "bg-wakupay-primary text-white",
    });
    e.target.reset();
  };


  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="py-16 md:py-24 bg-gradient-to-br from-wakupay-secondary/5 via-wakupay-light to-wakupay-primary/5 dark:from-wakupay-secondary/10 dark:via-wakupay-dark dark:to-wakupay-primary/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-20">
          <TrendingUp className="h-20 w-20 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Invierte en el Futuro: <span className="gradient-text">WakuPay</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            Únete a nosotros en la misión de transformar el panorama financiero de América Latina y el Caribe. WakuPay presenta una oportunidad única para invertir en un proyecto con alto potencial de impacto social y crecimiento.
          </p>
          <div className="mt-4 flex items-center justify-center text-wakupay-accent dark:text-wakupay-secondary">
            <CalendarClock size={20} className="mr-2" />
            <p className="text-md">Proyecto con lanzamiento estimado para 2030. Buscamos socios estratégicos desde ahora.</p>
          </div>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-24">
          {[
            { icon: <Target className="h-10 w-10 text-wakupay-primary" />, title: "Mercado Desatendido", description: "Millones en LATAM y el Caribe carecen de acceso a servicios financieros justos y eficientes. WakuPay aborda esta necesidad crítica." },
            { icon: <Lightbulb className="h-10 w-10 text-wakupay-secondary" />, title: "Solución Innovadora", description: "Combinamos tecnología P2P, cripto (USDT) y herramientas digitales para ofrecer servicios de bajo costo, seguros y accesibles." },
            { icon: <Users className="h-10 w-10 text-wakupay-accent" />, title: "Impacto Social Medible", description: "Empoderamos a migrantes, emprendedores y comunidades, fomentando la inclusión y el desarrollo económico sostenible." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl glassmorphism shadow-lg border border-wakupay-primary/10 dark:border-wakupay-secondary/10"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2 text-wakupay-dark dark:text-wakupay-light">{item.title}</h3>
              <p className="text-sm text-center text-wakupay-dark/70 dark:text-wakupay-light/70">{item.description}</p>
            </motion.div>
          ))}
        </section>

        <section className="mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">La Oportunidad <span className="gradient-text">WakuPay</span></h2>
            <p className="text-lg text-wakupay-dark/80 dark:text-wakupay-light/80 mb-8">
              WakuPay está posicionado para capitalizar la creciente adopción de tecnologías financieras digitales en una región con una demanda insatisfecha significativa. Nuestra visión a largo plazo (lanzamiento 2030) nos permite construir una base sólida, desarrollar alianzas estratégicas y adaptarnos a la evolución del mercado. Buscamos ángeles inversionistas y socios que compartan nuestra visión y deseen ser parte de esta transformación desde sus etapas iniciales.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="p-4 rounded-lg bg-wakupay-light dark:bg-wakupay-dark/50 shadow">
                <h4 className="font-semibold text-wakupay-primary mb-1">¿Por qué invertir ahora?</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-wakupay-dark/70 dark:text-wakupay-light/70">
                  <li>Participar en la definición estratégica de un proyecto disruptivo.</li>
                  <li>Potencial de alto retorno a largo plazo en un mercado emergente.</li>
                  <li>Contribuir a un proyecto con un fuerte componente de RSE.</li>
                  <li>Acceso temprano a una red de innovadores y líderes de opinión.</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-wakupay-light dark:bg-wakupay-dark/50 shadow">
                <h4 className="font-semibold text-wakupay-secondary mb-1">¿Qué buscamos en un inversor?</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-wakupay-dark/70 dark:text-wakupay-light/70">
                  <li>Visión a largo plazo y alineación con nuestra misión social.</li>
                  <li>Experiencia o red en fintech, mercados emergentes o impacto social (deseable).</li>
                  <li>Capital semilla o pre-semilla para desarrollo, investigación y operaciones iniciales.</li>
                  <li>Disposición a actuar como mentor o asesor estratégico.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-2xl mx-auto shadow-2xl glassmorphism border-wakupay-primary/30 dark:border-wakupay-secondary/30">
            <CardHeader className="text-center">
              <Handshake className="h-12 w-12 text-wakupay-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-poppins gradient-text">Conéctate con Nosotros</CardTitle>
              <CardDescription className="text-wakupay-dark/70 dark:text-wakupay-light/70">
                Si compartes nuestra visión y estás interesado en explorar oportunidades de inversión, nos encantaría conversar contigo.
                Correo para inversionistas: <strong className="gradient-text">Investors.WakuPay@gmail.com</strong>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInvestmentInquiry} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-wakupay-dark dark:text-wakupay-light">Nombre Completo</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-wakupay-primary focus:border-wakupay-primary sm:text-sm bg-white/80 dark:bg-wakupay-dark/50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-wakupay-dark dark:text-wakupay-light">Correo Electrónico</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-wakupay-primary focus:border-wakupay-primary sm:text-sm bg-white/80 dark:bg-wakupay-dark/50" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-wakupay-dark dark:text-wakupay-light">Organización (Opcional)</label>
                  <input type="text" name="organization" id="organization" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-wakupay-primary focus:border-wakupay-primary sm:text-sm bg-white/80 dark:bg-wakupay-dark/50" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-wakupay-dark dark:text-wakupay-light">Mensaje Adicional (Opcional)</label>
                  <textarea name="message" id="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-wakupay-primary focus:border-wakupay-primary sm:text-sm bg-white/80 dark:bg-wakupay-dark/50"></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-wakupay-primary to-wakupay-accent text-white font-semibold text-lg hover:opacity-90 transition-opacity duration-300 shadow-lg">
                  Enviar Consulta de Inversión <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-xs text-wakupay-dark/60 dark:text-wakupay-light/60 w-full">
                Valoramos tu tiempo y tu interés. Nos pondremos en contacto a la brevedad.
              </p>
            </CardFooter>
          </Card>
        </motion.section>

        <div className="text-center mt-16">
            <p className="text-lg text-wakupay-dark/80 dark:text-wakupay-light/80 mb-4">
                ¿Quieres ayudar de otras formas?
            </p>
            <Button asChild variant="outline" size="lg" className="border-wakupay-secondary text-wakupay-secondary hover:bg-wakupay-secondary/10">
                <Link to="/colabora">Conviértete en Colaborador</Link>
            </Button>
        </div>

      </div>
    </motion.div>
  );
};

export default InvestorsPage;