import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, AlertTriangle, Mail } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.95 },
};

const pageTransition = {
  type: "spring",
  stiffness: 80,
  duration: 0.4,
};

const TermsPage = () => {
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
          <FileText className="h-20 w-20 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Términos y <span className="gradient-text">Condiciones</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            Por favor, lee atentamente nuestros términos y condiciones antes de utilizar los servicios de WakuPay.
          </p>
          <p className="text-sm text-wakupay-dark/60 dark:text-wakupay-light/60 mt-2">Última actualización: 16 de Mayo de 2025</p>
        </header>

        <div className="max-w-4xl mx-auto space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <Users className="h-8 w-8 text-wakupay-primary mr-3" />
              1. Aceptación de los Términos
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
              Al acceder o utilizar los servicios ofrecidos por WakuPay ("Servicios"), aceptas estar sujeto a estos Términos y Condiciones ("Términos"), nuestra Política de Privacidad y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, se te prohíbe usar o acceder a este sitio y nuestros servicios.
            </p>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
              WakuPay es una iniciativa en desarrollo, actualmente operada por voluntarios. La plataforma y sus servicios se ofrecen "tal cual" y "según disponibilidad".
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay:0.1 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <Shield className="h-8 w-8 text-wakupay-secondary mr-3" />
              2. Uso de los Servicios
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
              Debes ser mayor de 18 años para utilizar nuestros Servicios. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña y de restringir el acceso a tu computadora. Aceptas la responsabilidad de todas las actividades que ocurran bajo tu cuenta o contraseña.
            </p>
            <ul className="list-disc list-inside space-y-2 text-wakupay-dark/70 dark:text-wakupay-light/70 pl-4">
              <li>No utilizarás los Servicios para ningún propósito ilegal o no autorizado.</li>
              <li>No debes, en el uso del Servicio, violar ninguna ley en tu jurisdicción (incluyendo pero no limitado a las leyes de derechos de autor).</li>
              <li>Nos reservamos el derecho de suspender o terminar tu cuenta si se detecta cualquier actividad fraudulenta o ilegal.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay:0.2 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <AlertTriangle className="h-8 w-8 text-wakupay-accent mr-3" />
              3. Limitación de Responsabilidad
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
              Dado que WakuPay es un proyecto impulsado por voluntarios y en una fase temprana de desarrollo, los Servicios se proporcionan sin garantías de ningún tipo, ya sean expresas o implícitas. En la máxima medida permitida por la ley aplicable, WakuPay, sus voluntarios, directores y afiliados renuncian a todas las garantías.
            </p>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
              WakuPay no será responsable de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo que resulte del uso o la imposibilidad de usar los Servicios, incluso si WakuPay ha sido advertido de la posibilidad de dichos daños.
            </p>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay:0.3 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <FileText className="h-8 w-8 text-wakupay-primary mr-3" />
              4. Modificaciones a los Términos
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
              WakuPay se reserva el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso de al menos 30 días antes de que entren en vigor los nuevos términos. Lo que constituye un cambio material se determinará a nuestra sola discreción.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay:0.4 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <Mail className="h-8 w-8 text-wakupay-secondary mr-3" />
              5. Contacto
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
              Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en <a href="mailto:Contactowakupay@gmail.com" className="text-wakupay-primary hover:underline">Contactowakupay@gmail.com</a>.
            </p>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsPage;