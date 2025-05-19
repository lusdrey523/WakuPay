import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Send, DollarSign, QrCode, TrendingUp, ShieldCheck, Zap as InnovationIcon } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const services = [
  {
    icon: <Send className="h-12 w-12 text-wakupay-primary mb-4" />,
    title: 'Transferencias P2P Eficientes',
    description: 'Envía y recibe dinero de forma instantánea y segura entre usuarios WakuPay. Olvídate de las comisiones elevadas y las esperas innecesarias. Facilitamos tus transacciones diarias con una plataforma intuitiva y ágil.',
    color: 'border-blue-500/50',
  },
  {
    icon: <DollarSign className="h-12 w-12 text-wakupay-secondary mb-4" />,
    title: 'Remesas con Costos Competitivos',
    description: 'Envía dinero a tus seres queridos en América Latina y el Caribe con tarifas transparentes y justas (1-2%). Maximizamos el valor de tu esfuerzo, asegurando que más dinero llegue a su destino.',
    color: 'border-yellow-500/50',
  },
  {
    icon: <QrCode className="h-12 w-12 text-wakupay-accent mb-4" />,
    title: 'Códigos QR para Comercio Local',
    description: 'Impulsa tu negocio con nuestra solución de pagos mediante códigos QR. Una forma moderna, rápida y sin contacto para que tus clientes paguen, ideal para emprendedores y comercios de todos los tamaños.',
    color: 'border-purple-500/50',
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-green-500 mb-4" />,
    title: 'Estabilidad con Criptomonedas (USDT)',
    description: 'Protege tus ahorros de la inflación y la devaluación utilizando USDT, una criptomoneda estable vinculada al dólar estadounidense. Accede a los beneficios de la economía digital de forma segura.',
    color: 'border-green-500/50',
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-red-500 mb-4" />,
    title: 'Seguridad de Nivel Superior',
    description: 'Tu tranquilidad es nuestra prioridad. Implementamos autenticación de dos factores (2FA), encriptación de extremo a extremo y los más altos protocolos de seguridad para proteger tus datos y fondos.',
    color: 'border-red-500/50',
  },
  {
    icon: <InnovationIcon className="h-12 w-12 text-indigo-500 mb-4" />,
    title: 'Innovación Financiera Constante',
    description: 'Estamos comprometidos con la evolución continua, buscando e implementando nuevas tecnologías y soluciones para mejorar tu experiencia financiera y fomentar la inclusión en la región.',
    color: 'border-indigo-500/50',
  },
];

const ServicesPage = () => {
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
        <div className="text-center mb-12 md:mb-16">
          <InnovationIcon className="h-16 w-16 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            Descubre cómo WakuPay está revolucionando las finanzas personales y comerciales en América Latina y el Caribe con soluciones innovadoras y accesibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className={`w-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out glassmorphism ${service.color} border-2`}>
                <CardHeader className="items-center text-center">
                  {service.icon}
                  <CardTitle className="text-2xl md:text-3xl text-wakupay-dark dark:text-wakupay-light">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base text-wakupay-dark/70 dark:text-wakupay-light/70 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;