import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const pageVariants = {
  initial: { opacity: 0, filter: "blur(3px)" },
  in: { opacity: 1, filter: "blur(0px)" },
  out: { opacity: 0, filter: "blur(3px)" },
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.5,
};

const CookiesPage = () => {
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
          <Cookie className="h-20 w-20 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Política de <span className="gradient-text">Cookies</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            Información sobre cómo WakuPay utiliza cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web.
          </p>
          <p className="text-sm text-wakupay-dark/60 dark:text-wakupay-light/60 mt-2">Última actualización: 16 de Mayo de 2025</p>
        </header>

        <div className="max-w-4xl mx-auto space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <Cookie className="h-8 w-8 text-wakupay-primary mr-3" />
              1. ¿Qué son las Cookies?
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
              Las cookies son pequeños archivos de texto que los sitios web que visitas colocan en tu computadora o dispositivo móvil. Se utilizan ampliamente para que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
              WakuPay, como proyecto en desarrollo con lanzamiento previsto para 2030, actualmente utiliza cookies de forma limitada, principalmente para el funcionamiento básico del sitio y para recordar tus preferencias de consentimiento.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              2. Cookies que Utilizamos (Actualmente)
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
              En esta etapa del proyecto, nuestro uso de cookies es mínimo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-wakupay-dark/70 dark:text-wakupay-light/70 pl-4 mb-3">
              <li><strong>Cookies Esenciales/Funcionales:</strong>
                <ul className="list-circle list-inside pl-6 space-y-1 mt-1">
                  <li><code>wakupay_cookie_consent</code>: Esta cookie se utiliza para recordar tu elección sobre el consentimiento de cookies en nuestro sitio. Caduca después de un período razonable (por ejemplo, 1 año).</li>
                </ul>
              </li>
            </ul>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
              A medida que nos acerquemos al lanzamiento en 2030 y desarrollemos más funcionalidades, podríamos introducir cookies analíticas o de personalización, siempre solicitando tu consentimiento explícito y actualizando esta política.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <Settings className="h-8 w-8 text-wakupay-secondary mr-3" />
              3. Cómo Controlar las Cookies
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
              Tienes varias opciones para controlar o limitar cómo nosotros y terceros usamos cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-wakupay-dark/70 dark:text-wakupay-light/70 pl-4">
              <li><strong>Consentimiento en el Sitio:</strong> Puedes gestionar tus preferencias de cookies directamente en nuestro sitio a través de nuestro banner de consentimiento o visitando nuestra página de <Link to="/preferencias-de-cookies" className="text-wakupay-primary hover:underline">Preferencias de Cookies</Link>.</li>
              <li><strong>Configuración del Navegador:</strong> La mayoría de los navegadores web te permiten controlar las cookies a través de la configuración de tu navegador. Puedes configurar tu navegador para que te notifique cuando se establecen cookies, o para rechazarlas por completo. Ten en cuenta que si deshabilitas las cookies esenciales, es posible que algunas partes de nuestro sitio no funcionen correctamente. Encuentra cómo gestionar cookies en navegadores populares:
                <ul className="list-decimal list-inside pl-6 space-y-1 mt-1 text-sm">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-wakupay-primary hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-wakupay-primary hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-wakupay-primary hover:underline">Apple Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-wakupay-primary hover:underline">Microsoft Edge</a></li>
                </ul>
              </li>
            </ul>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 md:p-8 rounded-xl glassmorphism shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-wakupay-dark dark:text-wakupay-light flex items-center">
              <AlertCircle className="h-8 w-8 text-wakupay-accent mr-3" />
              4. Cambios a esta Política
            </h2>
            <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
              Podemos actualizar nuestra Política de Cookies de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Cookies en esta página y actualizando la fecha de "Última actualización". Te recomendamos revisar esta Política de Cookies periódicamente para cualquier cambio.
            </p>
          </motion.section>

           <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
            >
            <p className="text-lg text-wakupay-dark/80 dark:text-wakupay-light/80 mb-4">
                Gestiona tus preferencias de cookies o aprende más sobre cómo protegemos tu privacidad.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-wakupay-primary to-wakupay-accent text-white">
                    <Link to="/preferencias-de-cookies">Mis Preferencias de Cookies</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-wakupay-secondary text-wakupay-secondary hover:bg-wakupay-secondary/10">
                    <Link to="/politica-de-privacidad">Leer Política de Privacidad</Link>
                </Button>
            </div>
        </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiesPage;