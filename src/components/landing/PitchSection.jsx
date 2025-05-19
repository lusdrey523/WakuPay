import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Eye, AlertTriangle, CheckSquare, Users, Gift, Mail, MessageCircle, Download } from 'lucide-react';

    const SectionItem = ({ title, content, icon, listItems = null }) => (
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center mb-2">
          {icon}
          <h3 className="text-xl sm:text-2xl font-semibold text-primary ml-3">{title}</h3>
        </div>
        {content && <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{content}</p>}
        {listItems && (
          <ul className="mt-2 space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start text-sm sm:text-base text-foreground/80">
                {item.icon || <CheckSquare size={18} className="mr-2 mt-1 text-secondary flex-shrink-0" />}
                <span>{item.role || item.method || item}</span>
                {item.contact && (
                  <a 
                    href={item.download ? item.contact : (item.method.includes("WhatsApp") ? item.contact : `mailto:${item.contact}`)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    download={item.download}
                    className="ml-2 text-accent hover:underline flex items-center"
                  >
                    {item.download ? <Download size={16} className="mr-1"/> : (item.method.includes("WhatsApp") ? <MessageCircle size={16} className="mr-1"/> : <Mail size={16} className="mr-1"/>)}
                    <span className="text-xs sm:text-sm">{item.download ? "Descargar" : (item.method.includes("WhatsApp") ? "Unirse" : "Contactar")}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
    
    const PitchSection = ({ pitchData }) => {
      if (!pitchData) return null;

      const { title, vision, problem, solution, whoAreYou, whoWeSeek, whatWeOffer, howToParticipate } = pitchData;

      return (
        <section id="pitch-manifesto-section" className="py-12 sm:py-16 md:py-20 bg-slate-100 dark:bg-slate-800/70">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <img  alt="WakuPay logo iluminado" class="w-16 h-16 mx-auto mb-4" src="https://images.unsplash.com/photo-1586880244543-0528a802be97" />
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary">{title}</h2>
              <p className="text-md sm:text-lg text-foreground/70 max-w-2xl mx-auto mt-3 sm:mt-4">
                Nuestra carta de presentación y el faro que guía nuestra misión de construir un futuro financiero más inclusivo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-slate-900 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl"
            >
              <SectionItem title="Visión 2030" content={vision} icon={<Eye size={24} className="text-secondary" />} />
              <SectionItem title="El Problema que Atacamos" content={problem} icon={<AlertTriangle size={24} className="text-red-500" />} />
              <SectionItem title="Nuestra Solución Sencilla" content={solution} icon={<CheckSquare size={24} className="text-green-500" />} />
              <SectionItem title="Quiénes Somos" content={whoAreYou} icon={<Users size={24} className="text-blue-500" />} />
              <SectionItem title="A Quién Buscamos" listItems={whoWeSeek} icon={<Users size={24} className="text-purple-500" />} />
              <SectionItem title="Qué Ofrecemos" content={whatWeOffer} icon={<Gift size={24} className="text-yellow-500" />} />
              <SectionItem title="Cómo Participar" listItems={howToParticipate} icon={<Mail size={24} className="text-teal-500" />} />
            
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }} 
                className="mt-8 sm:mt-10 text-center"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent text-white text-md sm:text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('mailto:unete@wakupay.com?subject=Interesado en colaborar con WakuPay', '_blank')}
                >
                  ¡Quiero Ser Parte del Cambio!
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default PitchSection;