import React from 'react';
import { motion } from 'framer-motion';
import { Code2, TerminalSquare, GitFork, Layers, Puzzle, ShieldAlert, Users, CalendarDays, TrendingUp as Growth } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "spring",
  damping: 15,
  stiffness: 100,
};

const Section = ({ title, icon, children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="mb-12"
  >
    <Card className="shadow-xl glassmorphism border-wakupay-primary/20 dark:border-wakupay-secondary/20">
      <CardHeader>
        <div className="flex items-center mb-3">
          {icon}
          <CardTitle className="ml-3 text-2xl md:text-3xl text-wakupay-dark dark:text-wakupay-light">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-wakupay-dark/80 dark:text-wakupay-light/80 space-y-4">
        {children}
      </CardContent>
    </Card>
  </motion.section>
);

const TechItem = ({ name, description }) => (
  <li className="border-l-4 border-wakupay-primary pl-4 py-2 mb-2 transition-all hover:bg-wakupay-primary/5 dark:hover:bg-wakupay-primary/10 rounded-r-md">
    <strong className="font-semibold text-wakupay-dark dark:text-wakupay-light">{name}:</strong> {description}
  </li>
);

const DeveloperPortalPage = () => {
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
          <Code2 className="h-20 w-20 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Portal para <span className="gradient-text">Desarrolladores</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            Bienvenido/a al centro de desarrollo de WakuPay. Aquí encontrarás información sobre nuestra visión técnica, stack actual y cómo puedes contribuir a este proyecto transformador.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <Section title="Visión General del Proyecto" icon={<Layers className="h-8 w-8 text-wakupay-primary" />} delay={0.1}>
            <p>WakuPay es una plataforma financiera innovadora diseñada para empoderar a migrantes, emprendedores y comunidades en América Latina y el Caribe. Nuestro objetivo es facilitar transacciones P2P, remesas a bajo costo, pagos QR para comercios, y la gestión segura de criptomonedas (como USDT), entre otros servicios financieros.</p>
            <div className="mt-4 p-4 bg-wakupay-primary/10 dark:bg-wakupay-primary/20 rounded-lg flex items-center">
                <CalendarDays size={24} className="text-wakupay-primary mr-3 flex-shrink-0" />
                <p className="text-sm"><strong>Lanzamiento Planeado:</strong> 2030. Actualmente estamos en fase de prototipado y desarrollo de la base frontend, buscando colaboradores para construir un prototipo funcional robusto para pruebas y retroalimentación.</p>
            </div>
          </Section>

          <Section title="Arquitectura Frontend Actual y Tecnologías" icon={<TerminalSquare className="h-8 w-8 text-wakupay-secondary" />} delay={0.2}>
            <p>El frontend de WakuPay se está construyendo como una Aplicación de Página Única (SPA) altamente interactiva y responsiva. El stack tecnológico actual es:</p>
            <ul className="mt-4">
              <TechItem name="Vite" description="Como herramienta de construcción y servidor de desarrollo. Proporciona un arranque rápido y HMR eficiente." />
              <TechItem name="React 18.2.0" description="Para la creación de una interfaz de usuario modular y componentizada, utilizando Hooks y Context API para la gestión del estado." />
              <TechItem name="React Router 6.16.0" description="Para la navegación del lado del cliente." />
              <TechItem name="TailwindCSS 3.3.2" description="Framework utility-first para un estilizado rápido y consistente. Utilizamos una paleta de colores personalizada (principal: #4A90E2, secundaria: #50C878) y un tema oscuro." />
              <TechItem name="shadcn/ui & Radix UI" description="Para componentes de UI accesibles y bien diseñados, construidos sobre primitivas de Radix UI." />
              <TechItem name="Lucide React 0.292.0" description="Para un conjunto limpio y personalizable de iconos SVG." />
              <TechItem name="Framer Motion 10.16.4" description="Para animaciones fluidas y microinteracciones que mejoran la experiencia de usuario." />
              <TechItem name="JavaScript (ES6+)" description="Como lenguaje de programación principal, utilizando archivos .jsx para componentes React." />
            </ul>
            <p className="mt-4 text-sm text-wakupay-dark/70 dark:text-wakupay-light/70">
              Nota: Si bien la descripción original menciona Next.js, el proyecto actual se desarrolla con Vite y React puro para el frontend. La transición a Next.js podría considerarse en el futuro para optimización SEO y SSR si el proyecto lo requiere.
            </p>
          </Section>

          <Section title="Backend y Persistencia de Datos (Conceptual)" icon={<Puzzle className="h-8 w-8 text-wakupay-accent" />} delay={0.3}>
            <p>Como proyecto frontend en esta etapa, WakuPay dependerá de servicios de Backend como Servicio (BaaS) para la persistencia de datos y funcionalidades de servidor. Nuestra visión conceptual incluye:</p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li><strong>Supabase (Recomendado) / Firebase:</strong> Para la gestión de bases de datos (saldo, puntos, perfiles de usuario), autenticación y potencialmente funciones serverless.</li>
              <li><strong>Formspree:</strong> Utilizado actualmente para la gestión de formularios de contacto y colaboración (ej: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">https://formspree.io/f/xldbzzpv</code> y <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">https://formspree.io/f/xnndlpke</code>).</li>
              <li><strong>APIs de Terceros:</strong> Para servicios como recargas móviles, tasas de cambio de criptomonedas, y pasarelas de pago para remesas, se integrarán APIs externas robustas y seguras.</li>
            </ul>
            <p className="mt-3">La elección final de las tecnologías de backend se definirá a medida que el proyecto evolucione y se forme un equipo de backend.</p>
          </Section>
          
          <Section title="Estructura del Proyecto y Guías" icon={<GitFork className="h-8 w-8 text-green-500" />} delay={0.4}>
            <p>La estructura actual del proyecto sigue las convenciones de Vite + React:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
              <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">public/</code>: Para activos estáticos (se pueden crear subcarpetas como <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">images/</code> para logos).</li>
              <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src/components/</code>: Para componentes React reutilizables (UI, layout, sections).</li>
              <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src/pages/</code>: Para los componentes de nivel de ruta.</li>
              <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src/lib/</code>: Para utilidades (ej: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">utils.js</code> para <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">cn</code>).</li>
              <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src/assets/</code>: (Opcional) Para otros activos como fuentes personalizadas si se necesitaran.</li>
            </ul>
            <p className="mt-3">Se utiliza Git para control de versiones. Se recomienda seguir guías de estilo de código consistentes (ej. ESLint configurado) y convenciones de nombrado claras.</p>
          </Section>

          <Section title="Seguridad y Escalabilidad" icon={<ShieldAlert className="h-8 w-8 text-red-500" />} delay={0.5}>
            <p><strong>Seguridad:</strong> Es una prioridad máxima. Desde el frontend, esto implica asegurar las interacciones con APIs (uso de HTTPS, manejo seguro de tokens si aplica) y la validación de entradas. La seguridad de datos críticos recaerá en la plataforma BaaS elegida (ej. políticas de seguridad de Supabase/Firebase, 2FA).</p>
            <p className="mt-2"><strong>Escalabilidad:</strong> El diseño actual con componentes modulares en React y la dependencia de servicios BaaS escalables está pensado para soportar el crecimiento futuro. A medida que se añadan nuevas funcionalidades, se crearán nuevos componentes y se integrarán APIs adicionales sin afectar la estructura central.</p>
          </Section>

          <Section title="Cómo Colaborar" icon={<Users className="h-8 w-8 text-indigo-500" />} delay={0.6}>
            <p>¡Estamos buscando desarrolladores apasionados que quieran unirse a esta causa! Si tienes experiencia en React, TailwindCSS, y te entusiasma la idea de construir soluciones financieras con impacto social, nos encantaría saber de ti.</p>
            <ul className="mt-3 list-disc list-inside space-y-2">
              <li><strong>Áreas de Colaboración Frontend:</strong> Desarrollo de nuevos componentes, mejora de los existentes, implementación de nuevas funcionalidades de UI, optimización de rendimiento, pruebas.</li>
              <li><strong>Proceso:</strong> Revisa nuestro código, identifica áreas de mejora o nuevas características, y ponte en contacto a través de nuestra página de <Link to="/colabora" className="text-wakupay-primary hover:underline">Colaboradores</Link>.</li>
              <li><strong>Herramientas:</strong> Familiarízate con nuestro stack actual y las herramientas de desarrollo (Node.js 20+, Vite).</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-wakupay-primary to-wakupay-accent text-white">
                    <Link to="/colabora">Quiero Colaborar</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-wakupay-secondary text-wakupay-secondary hover:bg-wakupay-secondary/10">
                    <Link to="/licencias">Ver Licencias del Proyecto</Link>
                </Button>
            </div>
          </Section>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.6, delay: 0.7 }}
             className="mt-16 text-center p-6 rounded-xl bg-gradient-to-r from-green-400/10 via-transparent to-blue-400/10 dark:from-green-500/20 dark:to-blue-500/20 border border-green-500/30 dark:border-blue-500/30"
            >
                <Growth size={48} className="mx-auto mb-4 text-green-500 dark:text-blue-400" />
                <h2 className="text-2xl font-semibold mb-3 text-wakupay-dark dark:text-wakupay-light">¡Construyamos el Futuro Juntos!</h2>
                <p className="text-wakupay-dark/80 dark:text-wakupay-light/80 mb-6 max-w-xl mx-auto">
                    WakuPay es más que código; es una oportunidad para generar un cambio real. Tu talento puede ayudarnos a alcanzar nuestra visión de un ecosistema financiero más inclusivo para 2030.
                </p>
                 <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-semibold">
                    <Link to="/contacto">Contacta al Equipo Principal</Link>
                </Button>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperPortalPage;