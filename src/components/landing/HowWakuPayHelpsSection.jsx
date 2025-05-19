import React from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRightCircle } from 'lucide-react';

    const HelpCard = ({ imgSrc, imgPlaceholder, altText, title, description, delay }) => (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay, ease: "circOut" }}
        className="p-6 rounded-2xl bg-slate-800/70 dark:bg-slate-800 text-center shadow-2xl hover:shadow-primary/30 transition-shadow duration-400 border border-purple-500/20 group"
      >
        <div className="relative w-32 h-32 mx-auto mb-5 overflow-hidden rounded-full shadow-lg border-2 border-primary/50">
          <img 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            alt={altText}
           src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{title}</h3>
        <p className="text-sm text-slate-300 mb-4">{description}</p>
        <a href="#" className="inline-flex items-center text-sm text-secondary hover:text-accent font-semibold transition-colors duration-300">
          Saber más <ArrowRightCircle size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    );

    const HowWakuPayHelpsSection = ({ id }) => {
      const helpScenarios = [
        {
          imgPlaceholder: "Madre sonriendo al usar su teléfono para recibir dinero",
          altText: "Madre en Perú sonriendo al recibir dinero en su teléfono",
          title: "Envía y Recibe Dinero Globalmente",
          description: "Conecta con tus seres queridos o cobra a clientes internacionales con remesas rápidas, seguras y a bajo costo.",
          delay: 0.1
        },
        {
          imgPlaceholder: "Emprendedor sonriente mostrando un código QR en su teléfono en su puesto de mercado",
          altText: "Vendedor ambulante en Bogotá sonriendo mientras un cliente le paga con QR",
          title: "Digitaliza tu Negocio Fácilmente",
          description: "Acepta pagos con QR, links de pago y más. Moderniza tu emprendimiento sin complicaciones ni costos elevados.",
          delay: 0.25
        },
        {
          imgPlaceholder: "Comunidad diversa de personas colaborando y usando WakuPay en sus dispositivos",
          altText: "Grupo de personas de la comunidad migrante colaborando y apoyándose",
          title: "Únete a una Comunidad de Apoyo",
          description: "Más que una app, somos una red. Accede a recursos, conocimiento y apoyo para crecer y prosperar.",
          delay: 0.4
        }
      ];

      return (
        <section id={id} className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-purple-900/60 to-slate-900 text-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-slate-100"
            >
              Transformando <span className="text-secondary">Vidas</span>, Un Waku a la Vez
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
              {helpScenarios.map(scenario => (
                <HelpCard
                  key={scenario.title}
                  imgPlaceholder={scenario.imgPlaceholder}
                  altText={scenario.altText}
                  title={scenario.title}
                  description={scenario.description}
                  delay={scenario.delay}
                />
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default HowWakuPayHelpsSection;