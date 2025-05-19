import React from 'react';
    import Header from '@/components/landing/Header';
    import HeroSection from '@/components/landing/HeroSection';
    import ProblemSolutionSection from '@/components/landing/ProblemSolutionSection';
    import ManifestoSection from '@/components/landing/ManifestoSection';
    import HowWakuPayHelpsSection from '@/components/landing/HowWakuPayHelpsSection';
    import DifferentiatorSection from '@/components/landing/DifferentiatorSection';
    import JoinTeamSection from '@/components/landing/JoinTeamSection';
    import InvestorSection from '@/components/landing/InvestorSection';
    import ContactSection from '@/components/landing/ContactSection';
    import Footer from '@/components/landing/Footer';
    import { Briefcase, Code, PenTool, Megaphone, Scale, Users, Mail, MessageCircle, FileText, TrendingUp, ShieldCheck, HeartHandshake, MessageSquare as MessageSquareText, DollarSign, Lightbulb, HeartHandshake as Handshake } from 'lucide-react';

    const WakuPayLandingPage = () => {
      const WAKUPAY_LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e6e0052e-320a-4ee8-b163-8959152cfa32/d89e0051199306aeb2ab17209fd303c5.png";

      const navLinks = [
        { id: "hero", label: "Inicio" },
        { id: "problem", label: "Desafío" },
        { id: "solution", label: "Solución" },
        { id: "manifesto", label: "Promesa" },
        { id: "differentiators", label: "Diferencia" },
        { id: "join-us", label: "Únete" },
        { id: "investors", label: "Inversionistas" },
        { id: "contact", label: "Contacto" },
      ];

      const initialFeatures = [
        { name: "Billetera Digital Simple", description: "Gestiona tu dinero de forma segura y fácil." },
        { name: "Pagos con QR", description: "Cobra y paga al instante usando códigos QR." },
        { name: "Remesas a Bajo Costo", description: "Envía dinero a tus seres queridos sin comisiones abusivas." },
      ];

      const teamRoles = [
        { 
          title: "Tech Lead / Dev Backend", 
          icon: <Code size={24} className="text-primary" />, 
          description: "Definir arquitectura, tecnologías y seguridad. Liderar el desarrollo backend.",
          applyLink: "mailto:unete@wakupay.com?subject=Postulación Tech Lead"
        },
        { 
          title: "Diseñador UX/UI", 
          icon: <PenTool size={24} className="text-primary" />, 
          description: "Crear flujos de usuario intuitivos y una interfaz amigable y atractiva.",
          applyLink: "mailto:unete@wakupay.com?subject=Postulación Diseñador UX/UI"
        },
        { 
          title: "Community Manager", 
          icon: <Megaphone size={24} className="text-primary" />, 
          description: "Gestionar redes sociales, crear contenido y conectar con nuestra comunidad.",
          applyLink: "mailto:unete@wakupay.com?subject=Postulación Community Manager"
        },
      ];
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-200 overflow-x-hidden">
          <Header navLinks={navLinks} logoUrl={WAKUPAY_LOGO_URL} />
          <main className="pt-20 sm:pt-24 md:pt-28">
            <HeroSection id="hero" logoUrl={WAKUPAY_LOGO_URL} />
            <ProblemSolutionSection id="problem" />
            <ManifestoSection id="solution" initialFeatures={initialFeatures} />
            <DifferentiatorSection id="differentiators" />
            <HowWakuPayHelpsSection id="manifesto" /> {/* Re-using manifesto ID for now, can be changed */}
            <JoinTeamSection id="join-us" roles={teamRoles} />
            <InvestorSection id="investors" />
            <ContactSection id="contact" />
          </main>
          <Footer logoUrl={WAKUPAY_LOGO_URL} />
        </div>
      );
    };

    export default WakuPayLandingPage;