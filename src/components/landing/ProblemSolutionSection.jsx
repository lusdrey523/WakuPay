import React from 'react';
    import { motion } from 'framer-motion';
    import { Users, AlertOctagon, ShieldCheck, Smile, TrendingDown, TrendingUp } from 'lucide-react';

    const cardVariants = {
      hidden: { opacity: 0, y: 50, scale: 0.9 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: i * 0.2,
          duration: 0.6,
          ease: "easeOut"
        }
      })
    };

    const ProblemSolutionSection = ({ id }) => {
      return (
        <section id={id} className="py-16 sm:py-20 md:py-28 bg-slate-800 text-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">El Desafío</span> y Nuestra <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-teal-400">Solución</span>
              </h2>
              <p className="text-md sm:text-lg text-slate-400 max-w-3xl mx-auto">
                Millones de migrantes y pequeños emprendedores son invisibles para el sistema financiero tradicional. WakuPay llega para cambiar esta realidad.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              <motion.div 
                custom={0}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glassmorphism-card p-6 sm:p-8 rounded-2xl border border-purple-500/30"
              >
                <div className="flex items-center text-red-400 mb-4">
                  <TrendingDown size={32} className="mr-3" />
                  <h3 className="text-2xl sm:text-3xl font-semibold">El Problema Actual</h3>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-slate-300">
                  <li className="flex items-start"><AlertOctagon size={20} className="mr-3 mt-1 text-red-500 flex-shrink-0" /><span>Exclusión por falta de documentos o historial crediticio.</span></li>
                  <li className="flex items-start"><AlertOctagon size={20} className="mr-3 mt-1 text-red-500 flex-shrink-0" /><span>Comisiones exorbitantes en remesas y transferencias internacionales.</span></li>
                  <li className="flex items-start"><AlertOctagon size={20} className="mr-3 mt-1 text-red-500 flex-shrink-0" /><span>Acceso limitado a herramientas de cobro digital para pequeños negocios.</span></li>
                  <li className="flex items-start"><AlertOctagon size={20} className="mr-3 mt-1 text-red-500 flex-shrink-0" /><span>Sistemas bancarios complejos, burocráticos y poco empáticos.</span></li>
                </ul>
              </motion.div>

              <motion.div 
                custom={1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glassmorphism-card p-6 sm:p-8 rounded-2xl border border-green-500/30"
              >
                <div className="flex items-center text-green-400 mb-4">
                  <TrendingUp size={32} className="mr-3" />
                  <h3 className="text-2xl sm:text-3xl font-semibold">La Solución WakuPay</h3>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-slate-300">
                  <li className="flex items-start"><ShieldCheck size={20} className="mr-3 mt-1 text-green-500 flex-shrink-0" /><span>Billetera digital accesible, incluso sin cuenta bancaria tradicional.</span></li>
                  <li className="flex items-start"><ShieldCheck size={20} className="mr-3 mt-1 text-green-500 flex-shrink-0" /><span>Remesas internacionales justas, transparentes y a bajo costo.</span></li>
                  <li className="flex items-start"><ShieldCheck size={20} className="mr-3 mt-1 text-green-500 flex-shrink-0" /><span>Herramientas de cobro simples (QR, links de pago) para emprendedores.</span></li>
                  <li className="flex items-start"><ShieldCheck size={20} className="mr-3 mt-1 text-green-500 flex-shrink-0" /><span>Plataforma intuitiva, soporte humano y en tu idioma. ¡Tecnología con corazón!</span></li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12 sm:mt-16 md:mt-20"
            >
              <div className="inline-flex items-center bg-primary/20 text-primary py-2 px-5 rounded-full mb-5">
                <Users size={22} className="mr-2" />
                <span className="font-semibold text-md sm:text-lg">Para Quién es WakuPay</span>
              </div>
              <p className="text-md sm:text-lg text-slate-400 max-w-3xl mx-auto">
                Para la madre en Venezuela que recibe apoyo de su hijo en España. Para el artesano en Colombia que vende online al mundo. Para el freelancer en Argentina que cobra por sus servicios globales. Para cada migrante y emprendedor con sueños grandes.
              </p>
               <Smile size={36} className="mx-auto text-accent mt-8 animate-pulse" />
            </motion.div>
          </div>
        </section>
      );
    };

    export default ProblemSolutionSection;