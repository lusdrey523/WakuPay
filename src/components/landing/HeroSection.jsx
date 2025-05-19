import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, PlayCircle } from 'lucide-react';

    const HeroSection = ({ id, logoUrl }) => {
      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <section id={id} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-10">
            <img-replace src="https://images.unsplash.com/photo-1604398900209-60730250a7c1" alt="Abstract background with glowing network lines" className="w-full h-full object-cover"/>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 opacity-70"></div>

          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="mb-8"
            >
              <img src={logoUrl} alt="WakuPay Logo" className="h-20 sm:h-24 md:h-28 w-auto mx-auto mb-4"/>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary">Finanzas Sin Fronteras.</span>
              <span className="block text-accent mt-2">Tecnología Con Corazón.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="text-md sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 sm:mb-12"
            >
              WakuPay revoluciona la inclusión financiera para migrantes y emprendedores. Accede a servicios justos, rápidos y diseñados para ti.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white text-md sm:text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 group"
                onClick={() => scrollToSection('join-us')}
              >
                Únete a la Revolución <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-md sm:text-lg px-8 py-3 rounded-full border-secondary text-secondary hover:bg-secondary/10 hover:text-white shadow-lg hover:shadow-secondary/30 transform hover:scale-105 transition-all duration-300 group"
              >
                <PlayCircle size={20} className="mr-2 group-hover:animate-pulse" /> Ver Demo (Próximamente)
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <ArrowRight size={24} className="rotate-90 text-slate-400" />
          </motion.div>
        </section>
      );
    };

    export default HeroSection;