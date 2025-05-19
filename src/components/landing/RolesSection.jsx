import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowRight } from 'lucide-react';

    const RoleCard = ({ icon, title, description, applyLink, delay }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
      >
        <div className="flex items-center mb-3">
          {icon}
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white ml-3">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <Button 
          variant="outline" 
          className="mt-auto border-secondary text-secondary hover:bg-secondary/10 w-full text-xs sm:text-sm"
          onClick={() => window.open(applyLink, '_blank')}
        >
          Postular <ArrowRight size={16} className="ml-2" />
        </Button>
      </motion.div>
    );

    const RolesSection = ({ roles }) => {
      if (!roles || roles.length === 0) return null;

      return (
        <section className="py-12 sm:py-16 md:py-20 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <img  alt="Icono de equipo colaborando" class="w-12 h-12 mx-auto mb-4" src="https://images.unsplash.com/photo-1643101447193-9c59d5db2771" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Roles Clave que Necesitamos (Etapa Inicial 2025)</h2>
            <p className="text-md sm:text-lg text-foreground/70 max-w-2xl mx-auto mt-3 sm:mt-4">
              Buscamos pioneros apasionados para dar vida a WakuPay. Estos son los perfiles esenciales para arrancar con fuerza.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {roles.map((role, index) => (
              <RoleCard
                key={role.title}
                icon={role.icon}
                title={role.title}
                description={role.description}
                applyLink={role.applyLink}
                delay={index * 0.15}
              />
            ))}
          </div>
        </section>
      );
    };

    export default RolesSection;