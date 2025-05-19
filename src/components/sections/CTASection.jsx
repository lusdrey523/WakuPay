import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { Rocket } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const CTASection = () => {
      return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-wakupay-primary via-wakupay-accent to-wakupay-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para Transformar tus Finanzas o Unirte a la Causa?
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                Únete a WakuPay y sé parte del futuro financiero de América Latina y el Caribe, o colabora con nosotros para hacer este sueño realidad.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-wakupay-primary font-bold text-lg px-10 py-6 hover:bg-gray-100 transition-colors duration-300 shadow-2xl"
                  asChild
                >
                  <Link to="/colabora">¡Comienza Ahora!</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default CTASection;