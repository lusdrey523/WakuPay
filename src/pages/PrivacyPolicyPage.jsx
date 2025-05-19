import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, UserCheck, DatabaseZap, Contact } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: -30 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: 30 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6,
};

const PrivacyPolicyPage = () => {
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
          <Shield className="h-20 w-20 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Política de <span className="gradient-text">Privacidad</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            Tu privacidad es fundamental para WakuPay. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
          </p>
          <p className="text-sm text-wakupay-dark/60 dark:text-wakupay-light/60 mt-2">Última actualización: 16 de Mayo de 2025</p>
        </header>

        <div className="max-w-4xl mx-auto space-y-10">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <FileText className="h-8 w-8 text-wakupay-primary mr-3" />
              1. Introducción
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
              WakuPay ("nosotros", "nuestro") se compromete a proteger la privacidad de nuestros usuarios ("tú", "tu"). Esta Política de Privacidad explica qué información recopilamos, cómo la usamos y compartimos, y tus derechos con respecto a tu información personal cuando utilizas nuestro sitio web y futuros servicios (colectivamente, "Servicios").
            </p>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
              WakuPay es un proyecto con lanzamiento previsto para 2030. Esta política refleja nuestras intenciones actuales y puede actualizarse a medida que desarrollemos nuestros servicios.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <DatabaseZap className="h-8 w-8 text-wakupay-secondary mr-3" />
              2. Información que Recopilamos
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
              Actualmente, la información que recopilamos es limitada, ya que el proyecto está en desarrollo. Podemos recopilar:
            </p>
            <ul className="list-disc list-inside space-y-2 text-wakupay-dark/70 dark:text-wakupay-light/70 pl-4 mb-3">
              <li><strong>Información de Contacto:</strong> Si te comunicas con nosotros (por ejemplo, a través del formulario de contacto o para colaborar), podemos recopilar tu nombre, dirección de correo electrónico y cualquier otra información que proporciones.</li>
              <li><strong>Información de Uso del Sitio Web:</strong> A través de cookies y tecnologías similares (con tu consentimiento), podemos recopilar información sobre cómo interactúas con nuestro sitio web, como las páginas visitadas, el tiempo de permanencia, y tu dirección IP anonimizada. Consulta nuestra <a href="/politica-de-cookies" className="text-wakupay-primary hover:underline">Política de Cookies</a> para más detalles.</li>
              <li><strong>Información de Colaboradores:</strong> Si te registras para colaborar, recopilaremos la información que nos proporciones, como tu área de especialización.</li>
            </ul>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
              A medida que los Servicios se desarrollen (hacia 2030), es probable que recopilemos información adicional necesaria para proporcionar servicios financieros, como información de identificación, datos de transacciones, etc., siempre cumpliendo con las regulaciones aplicables.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <UserCheck className="h-8 w-8 text-wakupay-accent mr-3" />
              3. Cómo Usamos tu Información
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
              Utilizamos la información que recopilamos para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-wakupay-dark/70 dark:text-wakupay-light/70 pl-4">
              <li>Proporcionar, operar y mantener nuestro sitio web.</li>
              <li>Responder a tus consultas y solicitudes de colaboración.</li>
              <li>Mejorar y personalizar nuestro sitio web y futuros Servicios.</li>
              <li>Entender y analizar cómo utilizas nuestro sitio web.</li>
              <li>Desarrollar nuevos productos, servicios, características y funcionalidades (con vistas al lanzamiento en 2030).</li>
              <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, incluso para servicio al cliente, para proporcionarte actualizaciones y otra información relacionada con el sitio web, y con fines de marketing y promoción (con tu consentimiento).</li>
              <li>Cumplir con obligaciones legales.</li>
            </ul>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <Shield className="h-8 w-8 text-green-500 mr-3" />
              4. Seguridad de tu Información
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
             La seguridad de tu información es importante para nosotros. Implementaremos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Sin embargo, ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <Contact className="h-8 w-8 text-indigo-500 mr-3" />
              5. Tus Derechos y Contacto
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
              Tienes derecho a acceder, corregir, eliminar o restringir el uso de tu información personal. También puedes oponerte al procesamiento de tus datos. Para ejercer estos derechos, o si tienes preguntas sobre esta Política de Privacidad, contáctanos en <a href="mailto:Contactowakupay@gmail.com" className="text-wakupay-primary hover:underline">Contactowakupay@gmail.com</a>.
            </p>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
              Puedes gestionar tus preferencias de cookies a través de nuestro <a href="/preferencias-de-cookies" className="text-wakupay-primary hover:underline">Centro de Preferencias de Cookies</a> o los ajustes de tu navegador.
            </p>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;