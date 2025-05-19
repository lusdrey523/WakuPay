
    import React from 'react';
    import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { Send, Zap, QrCode, DollarSign, ShieldCheck, TrendingUp } from 'lucide-react';

    const features = [
      {
        icon: <Send className="h-10 w-10 text-wakupay-primary mb-4" />,
        title: 'Transferencias P2P Eficientes',
        description: 'Envía y recibe dinero de forma rápida y segura entre usuarios WakuPay.',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 border-blue-500/30',
      },
      {
        icon: <DollarSign className="h-10 w-10 text-wakupay-secondary mb-4" />,
        title: 'Remesas Competitivas',
        description: 'Costos bajos (1-2%) en comparación con los estándares del mercado para tus envíos internacionales.',
        color: 'bg-yellow-500/10 dark:bg-yellow-500/20 border-yellow-500/30',
      },
      {
        icon: <QrCode className="h-10 w-10 text-wakupay-accent mb-4" />,
        title: 'Códigos QR para Comercio',
        description: 'Facilita pagos en comercios locales con herramientas digitales innovadoras y accesibles.',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 border-purple-500/30',
      },
      {
        icon: <TrendingUp className="h-10 w-10 text-green-500 mb-4" />,
        title: 'Estabilidad con Cripto (USDT)',
        description: 'Protege tu dinero contra la inflación utilizando la estabilidad de criptomonedas como USDT.',
        color: 'bg-green-500/10 dark:bg-green-500/20 border-green-500/30',
      },
      {
        icon: <ShieldCheck className="h-10 w-10 text-red-500 mb-4" />,
        title: 'Seguridad Prioritaria',
        description: 'Autenticación de dos factores (2FA) y protocolos avanzados para la protección de tus datos.',
        color: 'bg-red-500/10 dark:bg-red-500/20 border-red-500/30',
      },
      {
        icon: <Zap className="h-10 w-10 text-indigo-500 mb-4" />,
        title: 'Innovación Constante',
        description: 'Comprometidos con ofrecer soluciones financieras que transforman la accesibilidad económica.',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 border-indigo-500/30',
      },
    ];

    const FeaturesSection = () => {
      const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
          }
        })
      };

      return (
        <section className="py-16 md:py-24 bg-wakupay-light dark:bg-wakupay-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Soluciones <span className="gradient-text">Innovadoras</span> para Ti
              </h2>
              <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-2xl mx-auto">
                Descubre cómo WakuPay está transformando la accesibilidad económica en la región.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.custom
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`flex`} 
                >
                  <Card className={`w-full ${feature.color} hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-out glassmorphism`}>
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl md:text-2xl text-wakupay-dark dark:text-wakupay-light">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base text-wakupay-dark/70 dark:text-wakupay-light/70">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.custom>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default FeaturesSection;
  