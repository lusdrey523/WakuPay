import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { ArrowRight, ShieldCheck, Users, Zap, HeartHandshake as Handshake } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const HeroSection = () => {
      return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-wakupay-primary/10 via-wakupay-light to-wakupay-secondary/10 dark:from-wakupay-primary/20 dark:via-wakupay-dark dark:to-wakupay-secondary/20 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
             <div className="absolute top-0 left-0 w-72 h-72 bg-wakupay-accent rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
             <div className="absolute bottom-0 right-0 w-72 h-72 bg-wakupay-secondary rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                <span className="block">Bienvenido a</span>
                <span className="gradient-text">WakuPay</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto mb-10">
                Una plataforma financiera de vanguardia diseñada para empoderar a migrantes, emprendedores y comunidades en América Latina y el Caribe.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Button size="lg" className="bg-gradient-to-r from-wakupay-primary to-wakupay-accent text-white font-semibold text-lg px-8 py-6 hover:opacity-90 transition-opacity duration-300 shadow-lg" asChild>
                  <Link to="/colabora">
                    Colabora con nosotros <Handshake className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-wakupay-primary text-wakupay-primary hover:bg-wakupay-primary/10 dark:border-wakupay-secondary dark:text-wakupay-secondary dark:hover:bg-wakupay-secondary/10 shadow-lg">
                  Más Información
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, staggerChildren: 0.2 }}
            >
              {[
                { icon: <Zap className="h-8 w-8 text-wakupay-primary" />, title: "Transacciones Rápidas", description: "Movimientos P2P eficientes y al instante." },
                { icon: <ShieldCheck className="h-8 w-8 text-wakupay-primary" />, title: "Seguridad Avanzada", description: "Protección de datos con 2FA y protocolos robustos." },
                { icon: <Users className="h-8 w-8 text-wakupay-primary" />, title: "Comunidad Fuerte", description: "Construyendo un ecosistema financiero inclusivo." },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 rounded-xl glassmorphism"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-wakupay-dark dark:text-wakupay-light">{item.title}</h3>
                  <p className="text-sm text-wakupay-dark/70 dark:text-wakupay-light/70">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      );
    };

    export default HeroSection;