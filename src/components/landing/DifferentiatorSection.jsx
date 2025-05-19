import React from 'react';
    import { motion } from 'framer-motion';
    import { Zap, Users, Heart, ShieldAlert, TrendingUp, Lightbulb } from 'lucide-react';

    const DiffCard = ({ icon, title, description, delay }) => (
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className="bg-slate-800/60 dark:bg-slate-800 p-6 rounded-xl shadow-xl hover:shadow-secondary/40 transition-all duration-300 flex flex-col items-center text-center border border-purple-600/30 hover:border-secondary/50 transform hover:-translate-y-2"
      >
        <div className="p-4 bg-secondary/20 text-secondary rounded-full mb-5">
          {React.cloneElement(icon, { size: 32 })}
        </div>
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{title}</h3>
        <p className="text-sm text-slate-400 flex-grow">{description}</p>
      </motion.div>
    );

    const DifferentiatorSection = ({ id }) => {
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
              <Lightbulb size={40} className="mx-auto text-accent mb-4 animate-pulse" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100">¿Qué Nos Hace <span className="text-accent">Únicos</span>?</h2>
              <p className="text-md sm:text-lg text-slate-400 max-w-2xl mx-auto mt-4 sm:mt-5">
                No somos solo otra fintech. Somos un movimiento. Construimos con empatía, transparencia y un compromiso real con tu progreso.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <DiffCard
                icon={<Heart />}
                title="Hecho por y para Migrantes"
                description="Entendemos tus desafíos porque los hemos vivido. Diseñamos soluciones pensando en ti, con empatía real."
                delay={0.1}
              />
              <DiffCard
                icon={<Users />}
                title="Comunidad Primero"
                description="Más que transacciones, fomentamos una red de apoyo, colaboración y crecimiento mutuo."
                delay={0.2}
              />
              <DiffCard
                icon={<Zap />}
                title="Simplicidad Radical"
                description="Adiós a la burocracia. Procesos ágiles, intuitivos y transparentes, para que te enfoques en lo importante."
                delay={0.3}
              />
              <DiffCard
                icon={<ShieldAlert />}
                title="Inclusión Real"
                description="Luchamos contra la exclusión. Acceso para todos, sin importar tu documentación o historial bancario."
                delay={0.4}
              />
              <DiffCard
                icon={<TrendingUp />}
                title="Costos Justos y Claros"
                description="Creemos en la transparencia total. Comisiones bajas y sin sorpresas, para que tu dinero rinda más."
                delay={0.5}
              />
              <DiffCard
                icon={<img  alt="WakuPay logo icon" className="w-8 h-8 filter brightness-0 invert" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/e6e0052e-320a-4ee8-b163-8959152cfa32/d89e0051199306aeb2ab17209fd303c5.png" />}
                title="Tecnología con Propósito"
                description="Usamos la innovación no como un fin, sino como un medio para generar impacto social positivo y duradero."
                delay={0.6}
              />
            </div>
          </div>
        </section>
      );
    };
    export default DifferentiatorSection;