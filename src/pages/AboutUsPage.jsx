import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Zap, CalendarClock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: "spring",
  stiffness: 50,
  duration: 0.5,
};

const AboutUsPage = () => {
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
          <Users className="h-20 w-20 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Sobre <span className="gradient-text">Nosotros</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            WakuPay es más que una plataforma financiera; somos un movimiento dedicado a la inclusión y el empoderamiento económico en América Latina y el Caribe.
          </p>
           <div className="mt-4 flex items-center justify-center text-wakupay-secondary dark:text-wakupay-accent">
            <CalendarClock size={20} className="mr-2" />
            <p className="text-md">Proyecto con lanzamiento estimado para 2030</p>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              alt="Equipo de WakuPay trabajando en un ambiente colaborativo y moderno"
             src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <Target className="h-10 w-10 text-wakupay-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-wakupay-dark dark:text-wakupay-light">Nuestra Misión</h2>
                <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
                  Empoderar a migrantes, emprendedores y comunidades en América Latina y el Caribe mediante una plataforma financiera accesible que simplifica pagos, reduce costos de remesas al mínimo (1-2%), protege contra la inflación con criptomonedas, y fomenta la seguridad digital a través de tecnologías avanzadas. Buscamos construir un ecosistema financiero inclusivo con soluciones innovadoras, cerrar la brecha financiera y promover un desarrollo económico sostenible, conectando a las personas con sus sueños y transformando sus vidas a través del poder de la tecnología.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Eye className="h-10 w-10 text-wakupay-secondary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-wakupay-dark dark:text-wakupay-light">Nuestra Visión</h2>
                <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
                  Transformar América Latina, el Caribe y más allá en un ecosistema financiero inclusivo, donde cada persona y negocio, independientemente de su contexto, pueda mover su dinero de manera rápida, segura y accesible. Aspiramos a ser la plataforma financiera líder y de mayor confianza en la región, reconocida por nuestra innovación, seguridad y compromiso con el impacto social positivo, impulsando comunidades conectadas y prósperas hacia un futuro donde todos tengan acceso a herramientas financieras para prosperar.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="text-center mb-16 md:mb-24">
          <Zap className="h-16 w-16 gradient-text mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Nuestros <span className="gradient-text">Valores</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Inclusión', 'Innovación', 'Seguridad', 'Comunidad'].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl glassmorphism shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-wakupay-dark dark:text-wakupay-light mb-2">{value}</h3>
                <p className="text-sm text-wakupay-dark/70 dark:text-wakupay-light/70">
                  {
                    value === 'Inclusión' ? 'Creemos en un acceso financiero para todos, sin barreras.' :
                    value === 'Innovación' ? 'Buscamos constantemente nuevas formas de mejorar nuestros servicios.' :
                    value === 'Seguridad' ? 'Protegemos los activos y datos de nuestros usuarios con la máxima diligencia.' :
                    'Fomentamos la colaboración y el apoyo mutuo dentro de nuestra comunidad.'
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-wakupay-primary/10 via-wakupay-light to-wakupay-secondary/10 dark:from-wakupay-primary/20 dark:via-wakupay-dark dark:to-wakupay-secondary/20 p-8 md:p-12 rounded-xl shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            El <span className="gradient-text">Equipo</span> Detrás de WakuPay
          </h2>
          <p className="text-lg text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto text-center mb-8">
            Somos un equipo apasionado de profesionales, voluntarios y visionarios comprometidos con hacer una diferencia real. Nuestra diversidad de experiencias y culturas es nuestra mayor fortaleza. Desde desarrolladores y diseñadores hasta expertos en finanzas y líderes comunitarios, todos compartimos un objetivo común: empoderar a nuestra gente.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-wakupay-primary to-wakupay-accent text-white font-semibold text-lg px-8 py-4 hover:opacity-90 transition-opacity duration-300">
              <Link to="/colabora">
                ¡Únete a Nosotros!
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default AboutUsPage;