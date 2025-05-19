import React from 'react';
import { motion } from 'framer-motion';
import { UserCog, Cookie, FileLock as DatabaseLock, ShieldQuestion, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

const PrivacyCenterPage = () => {
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
          <UserCog className="h-20 w-20 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Centro de <span className="gradient-text">Privacidad</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            En WakuPay, valoramos tu privacidad y te ofrecemos control sobre tus datos personales. Aquí puedes gestionar tus preferencias y entender tus derechos.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full shadow-xl glassmorphism border-wakupay-primary/30 dark:border-wakupay-primary/40">
              <CardHeader className="items-center text-center">
                <Cookie className="h-12 w-12 text-wakupay-primary mb-3" />
                <CardTitle className="text-2xl md:text-3xl text-wakupay-dark dark:text-wakupay-light">Gestión de Cookies</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-base text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
                  Controla cómo utilizamos las cookies en tu navegador. Puedes ajustar tus preferencias para cookies analíticas, de personalización o de marketing (cuando estén disponibles). Las cookies esenciales no se pueden desactivar ya que son necesarias para el funcionamiento del sitio.
                </CardDescription>
                <Button asChild variant="outline" className="border-wakupay-primary text-wakupay-primary hover:bg-wakupay-primary/10 dark:text-wakupay-accent dark:border-wakupay-accent dark:hover:bg-wakupay-accent/10">
                  <Link to="/preferencias-de-cookies">Administrar Preferencias de Cookies</Link>
                </Button>
                <Button asChild variant="link" className="text-wakupay-secondary hover:underline">
                  <Link to="/politica-de-cookies">Leer nuestra Política de Cookies</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full shadow-xl glassmorphism border-wakupay-secondary/30 dark:border-wakupay-secondary/40">
              <CardHeader className="items-center text-center">
                <DatabaseLock className="h-12 w-12 text-wakupay-secondary mb-3" />
                <CardTitle className="text-2xl md:text-3xl text-wakupay-dark dark:text-wakupay-light">Tus Datos Personales</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-base text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
                  Entendemos la importancia de tus datos. Tienes derecho a solicitar acceso, rectificación o eliminación de la información personal que podamos tener sobre ti (principalmente datos de contacto si te has comunicado con nosotros).
                </CardDescription>
                <p className="text-sm text-wakupay-dark/60 dark:text-wakupay-light/60">
                  Para ejercer estos derechos, por favor contáctanos.
                </p>
                <Button asChild className="bg-gradient-to-r from-wakupay-secondary to-wakupay-accent text-white">
                  <a href="mailto:Contactowakupay@gmail.com?subject=Solicitud%20de%20Datos%20Personales%20-%20WakuPay">
                    <Mail className="mr-2 h-4 w-4" /> Solicitar Gestión de Datos
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-xl bg-gradient-to-br from-wakupay-primary/5 via-transparent to-wakupay-secondary/5 dark:from-wakupay-primary/10 dark:to-wakupay-secondary/10 border border-wakupay-primary/20 dark:border-wakupay-secondary/20 shadow-inner"
        >
          <h2 className="text-3xl font-semibold text-center mb-8 text-wakupay-dark dark:text-wakupay-light flex items-center justify-center">
            <ShieldQuestion className="h-10 w-10 gradient-text mr-4" /> Más Información y Contacto
          </h2>
          <p className="text-lg text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto text-center mb-6">
            Para una comprensión completa de cómo manejamos tu información, te recomendamos leer nuestra Política de Privacidad y los Términos y Condiciones. Si tienes alguna pregunta o inquietud sobre tu privacidad, no dudes en ponerte en contacto con nuestro equipo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild variant="ghost" className="text-wakupay-primary dark:text-wakupay-accent hover:bg-wakupay-primary/10 dark:hover:bg-wakupay-accent/10">
              <Link to="/politica-de-privacidad">Leer Política de Privacidad</Link>
            </Button>
            <Button asChild variant="ghost" className="text-wakupay-secondary dark:text-wakupay-primary hover:bg-wakupay-secondary/10 dark:hover:bg-wakupay-primary/10">
              <Link to="/terminos-y-condiciones">Leer Términos y Condiciones</Link>
            </Button>
            <Button asChild className="bg-wakupay-primary text-white hover:bg-wakupay-primary/90">
              <Link to="/contacto">Contactar Soporte</Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PrivacyCenterPage;