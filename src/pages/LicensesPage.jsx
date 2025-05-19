import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, Code } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.9 },
};

const pageTransition = {
  type: "spring",
  damping: 15,
  stiffness: 100,
};

const licenses = [
  {
    name: "Proyecto WakuPay (Código Fuente Propio)",
    type: "Licencia MIT (Intención Futura)",
    description: "Actualmente, el código fuente específico de WakuPay es propiedad de sus desarrolladores voluntarios. Tenemos la intención de licenciar gran parte de nuestro trabajo bajo la Licencia MIT o una licencia de código abierto similar en el futuro, fomentando la colaboración y la transparencia.",
    link: "https://opensource.org/licenses/MIT",
    icon: <Code className="h-8 w-8 text-wakupay-primary mr-3" />,
  },
  {
    name: "React",
    type: "Licencia MIT",
    description: "Una biblioteca de JavaScript para construir interfaces de usuario.",
    link: "https://github.com/facebook/react/blob/main/LICENSE",
    icon: <Code className="h-8 w-8 text-blue-500 mr-3" />,
  },
  {
    name: "Vite",
    type: "Licencia MIT",
    description: "Una herramienta de frontend de próxima generación que proporciona una experiencia de desarrollo más rápida y ágil.",
    link: "https://github.com/vitejs/vite/blob/main/LICENSE",
    icon: <Code className="h-8 w-8 text-yellow-500 mr-3" />,
  },
  {
    name: "Tailwind CSS",
    type: "Licencia MIT",
    description: "Un framework CSS de utilidad primero para construir rápidamente diseños personalizados.",
    link: "https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE",
    icon: <Code className="h-8 w-8 text-teal-500 mr-3" />,
  },
  {
    name: "Framer Motion",
    type: "Licencia MIT",
    description: "Una biblioteca de animación para React.",
    link: "https://github.com/framer/motion/blob/main/LICENSE.md",
    icon: <Code className="h-8 w-8 text-purple-500 mr-3" />,
  },
  {
    name: "shadcn/ui (Radix UI Primitives)",
    type: "Licencia MIT",
    description: "Componentes de UI bellamente diseñados construidos con Primitivas Radix UI y Tailwind CSS.",
    link: "https://github.com/shadcn-ui/ui/blob/main/LICENSE.md",
    icon: <Code className="h-8 w-8 text-gray-700 dark:text-gray-300 mr-3" />,
  },
  {
    name: "Lucide React",
    type: "Licencia ISC",
    description: "Una biblioteca de iconos SVG simplemente hermosa y consistente.",
    link: "https://github.com/lucide-icons/lucide/blob/main/LICENSE",
    icon: <Code className="h-8 w-8 text-green-500 mr-3" />,
  },
  {
    name: "React Router DOM",
    type: "Licencia MIT",
    description: "Enrutamiento del lado del cliente para aplicaciones React.",
    link: "https://github.com/remix-run/react-router/blob/main/LICENSE.md",
    icon: <Code className="h-8 w-8 text-red-500 mr-3" />,
  }
];

const LicensesPage = () => {
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
          <BookOpen className="h-20 w-20 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Licencias y <span className="gradient-text">Atribuciones</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            WakuPay se construye utilizando varias tecnologías y recursos de código abierto. Agradecemos a sus respectivos creadores y comunidades.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {licenses.map((license, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-xl glassmorphism shadow-lg border border-wakupay-primary/20 dark:border-wakupay-secondary/20"
            >
              <div className="flex items-start">
                {license.icon}
                <div>
                  <h2 className="text-2xl font-semibold text-wakupay-dark dark:text-wakupay-light mb-1">{license.name}</h2>
                  <p className="text-sm text-wakupay-accent dark:text-wakupay-accent mb-2">{license.type}</p>
                  <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed mb-3">
                    {license.description}
                  </p>
                  <a 
                    href={license.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-wakupay-primary hover:underline font-medium flex items-center"
                  >
                    Ver Licencia <ShieldCheck size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: licenses.length * 0.05 }}
              className="p-6 rounded-xl glassmorphism shadow-lg border border-wakupay-primary/20 dark:border-wakupay-secondary/20"
            >
                <h2 className="text-xl font-semibold text-wakupay-dark dark:text-wakupay-light mb-2">Imágenes y Contenido</h2>
                <p className="text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
                  Las imágenes utilizadas en este sitio web provienen de <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-wakupay-primary hover:underline">Unsplash</a> y se utilizan bajo la Licencia Unsplash. El contenido textual es original del proyecto WakuPay, a menos que se indique lo contrario.
                </p>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LicensesPage;