import React from 'react';
    import { motion } from 'framer-motion';
    import { Zap, QrCode, Send, CheckCircle, Sparkles, Heart } from 'lucide-react';

    const FeatureItem = ({ icon, title, description, delay }) => (
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className="flex flex-col items-center text-center p-6 bg-slate-800/50 dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-primary/30 transition-shadow duration-300 border border-purple-500/20"
      >
        <div className="p-4 bg-primary/20 text-primary rounded-full mb-4">
          {React.cloneElement(icon, { size: 28 })}
        </div>
        <div>
          <h4 className="font-semibold text-lg sm:text-xl text-slate-100 mb-2">{title}</h4>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </motion.div>
    );

    const ManifestoSection = ({ id, initialFeatures }) => {
      const featureIcons = {
        "Billetera Digital Simple": <Zap />,
        "Pagos con QR": <QrCode />,
        "Remesas a Bajo Costo": <Send />,
      };

      return (
        <section id={id} className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-slate-900 to-purple-900/60 text-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <Sparkles size={40} className="mx-auto text-accent mb-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100">Nuestra <span className="text-primary">Promesa</span> Inicial</h2>
              <p className="text-md sm:text-lg text-slate-400 max-w-2xl mx-auto mt-4 sm:mt-5">
                Comenzamos con lo esencial para transformar tu experiencia financiera. Simple, efectivo y con corazón.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
              {initialFeatures.map((feature, index) => (
                <FeatureItem
                  key={feature.name}
                  icon={featureIcons[feature.name] || <CheckCircle />}
                  title={feature.name}
                  description={feature.description}
                  delay={index * 0.2}
                />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: initialFeatures.length * 0.2 + 0.1, type: "spring", stiffness: 80 }}
              className="text-center glassmorphism-card p-8 sm:p-10 md:p-12 rounded-2xl shadow-2xl border border-secondary/30"
            >
              <Heart size={36} className="mx-auto text-secondary mb-4" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-4">¿Por Qué <span className="text-secondary">Existe</span> WakuPay?</h3>
              <p className="text-md sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                WakuPay nace de la convicción de que todos merecen acceso a servicios financieros justos y dignos. Existimos para derribar barreras, empoderar a comunidades migrantes y pequeños emprendedores, y construir un ecosistema donde la tecnología sirva al progreso humano. Creemos en un mundo donde tu origen no define tus oportunidades.
              </p>
            </motion.div>
          </div>
        </section>
      );
    };

    export default ManifestoSection;