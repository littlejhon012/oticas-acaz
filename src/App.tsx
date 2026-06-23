import React, { useState } from 'react';
import { 
  Glasses, 
  Sun, 
  Award, 
  ShieldCheck, 
  Eye, 
  Sparkles, 
  Clock, 
  Heart, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  CheckCircle, 
  MessageCircle, 
  Calendar, 
  ChevronRight, 
  Check, 
  X, 
  MapPinned, 
  Smile, 
  Sparkle,
  Settings2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData, testimonialsData } from './data';
import imgHeroClassic from './assets/images/hero_glasses_classic_1781716292199.jpg';
import imgExamRoom from './assets/images/exam_room_modern_1781716318032.jpg';
import imgPremiumGlasses from './assets/images/glasses_premium_1781716305293.jpg';

export default function App() {
  // Custom interactive booking system
  const [bookingStep, setBookingStep] = useState<number>(0);
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingPhone, setBookingPhone] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');
  const [bookingPeriod, setBookingPeriod] = useState<string>('manha');
  
  // Floating Chat Widget state
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [chatMessage, setChatMessage] = useState<string>('');

  // WhatsApp core config
  const DEFAULT_PHONE = "551141257371"; // Official commercial WhatsApp

  const getGeneralWhatsAppLink = (messageText: string) => {
    return `https://api.whatsapp.com/send?phone=${DEFAULT_PHONE}&text=${encodeURIComponent(messageText)}`;
  };

  // pre-fill for the custom modal booker
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const periodLabel = bookingPeriod === 'manha' ? 'Período da Manhã' : 'Período da Tarde/Noite';
    const msg = `Olá, Ótica Acaz! Desejo agendar um Exame de Vista Computadorizado Gratuito.\n\n` +
                `*Dados do Agendamento:*\n` +
                `• Nome: ${bookingName}\n` +
                `• Celular: ${bookingPhone}\n` +
                `• Preferência de Data: ${bookingDate}\n` +
                `• Período Desejado: ${periodLabel}\n\n` +
                `Por favor, me confirmem os horários disponíveis!`;
    
    // Open in a new tab
    window.open(getGeneralWhatsAppLink(msg), '_blank');
    setBookingStep(2); // Success step
  };

  return (
    <div className="relative min-h-screen font-sans bg-brand-blue-950 text-white overflow-x-hidden selection:bg-brand-blue-100 selection:text-brand-blue-100" id="otica-root">
      
      {/* EXCLUSIVE TOP ANNOUNCEMENT BAR */}
      <div className="bg-brand-blue-950 text-white text-xs py-2 px-4 border-b border-brand-blue-800 text-center relative z-40 font-medium" id="top-bar">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-6">
          <span className="flex items-center gap-1.5 py-0.5">
            <span className="w-2 h-2 rounded-full bg-brand-yellow-400 animate-pulse"></span>
            <strong>Nova Coleção Italiana 2026:</strong> Peças de titânio e cristais translúcidos exclusivas em showroom.
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#d9bc06]" />
            Exames computadorizados hoje: agende rápido com retorno em até 24h.
          </span>
        </div>
      </div>

      {/* FLOATING HEADER */}
      <header className="sticky top-0 z-30 bg-brand-blue-950/95 backdrop-blur-md border-b border-brand-blue-100/60 shadow-xs transition-all" id="main-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <a href="#otica-root" className="flex items-center gap-2.5 group" id="brand-logo">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl shadow-md overflow-hidden bg-brand-blue-950 border border-brand-blue-100">
              <img 
                src="https://i.pinimg.com/736x/ba/11/20/ba11208b24b4b426350e3f11bd392e62.jpg" 
                alt="Logo Óticas Acaz" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-xl font-serif font-bold text-[#81a1c9] tracking-tight block">
                Óticas <span className="text-[#d9bc06] font-sans font-extrabold uppercase text-[15px] tracking-widest block sm:inline sm:text-lg sm:capitalize sm:font-serif leading-none">Acaz</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest font-mono uppercase block -mt-1 leading-none">
                Estilo & Precisão
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide text-[#81a1c9]/80">
            <a href="#produtos-exclusivos" className="hover:text-[#335b9d] transition-colors">Nossa Loja</a>
            <a href="#cuidados-clinicos" className="hover:text-[#335b9d] transition-colors">Exames de Vista</a>
            <a href="#sobre-nos" className="hover:text-[#335b9d] transition-colors">Por Que Nós?</a>
            <a href="#depoimentos" className="hover:text-[#335b9d] transition-colors">Opiniões</a>
          </nav>

          {/* QUICK HEADER CTA */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:1141257371" 
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-[#335b9d] transition-colors px-3 py-2"
              id="header-phone-accent"
            >
              <Phone className="w-4 h-4 text-[#d9bc06]" />
              (11) 4125-7371
            </a>
            
            <a
              href="#agendamento-direto"
              className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-brand-blue-650/15 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              id="header-cta-booking"
            >
              <Calendar className="w-4 h-4 text-[#d9bc06] sm:w-4.5 sm:h-4.5" />
              Agendar Exame
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION - HIGHLY EMOTIONAL & COHESIVE WITH GENERATED ASSET */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-16 lg:py-24 overflow-hidden" id="hero-premium">
        
        {/* Background gradient design */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-50/70 via-natural-50 to-white -z-20"></div>
        <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-brand-blue-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-brand-blue-950 rounded-full blur-2xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* HERO TYPOGRAPHY COLUMN */}
            <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10" id="hero-text-container">
              
              {/* BRAND EMBLEM TAG */}
              <div 
                className="inline-flex items-center gap-2 bg-brand-yellow-150 border border-brand-yellow-250 text-[#d9bc06] text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
                id="hero-tag"
              >
                <Sparkle className="w-3.5 h-3.5 text-[#d9bc06] fill-brand-yellow-500 animate-spin-slow" />
                Um Novo Olhar Para o Seu Bem-Estar e Estilo
              </div>

              {/* HEADING (EMOTIONAL & FORMIDABLE) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-[#81a1c9] leading-[1.1] mb-6">
                A vida é feita de detalhes. <span className="text-[#335b9d] block italic font-medium font-serif mt-1">Enxergue-os com afeto e elegância.</span>
              </h1>

              {/* SUBHEADLINE (WARM, HUMAN & EMOTIONAL) */}
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                Na <strong>Ótica Acaz</strong>, cuidar da sua saúde visual é uma arte humana. Aliamos tecnologia óptica de ponta a uma curadoria estética cuidadosa que destaca a sua beleza real e protege o que você mais ama.
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#produtos-exclusivos"
                  className="bg-brand-blue-950 hover:bg-brand-blue-800 text-white font-semibold text-center py-4 px-8 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 duration-200 flex items-center justify-center gap-2 group"
                  id="hero-primary-cta"
                >
                  Conhecer Modelos em Loja
                  <ChevronRight className="w-5 h-5 text-[#d9bc06] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={getGeneralWhatsAppLink("Olá! Gostaria de conversar com um especialista da Ótica Acaz para tirar dúvidas sobre minhas lentes e agendar um atendimento.")}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-blue-950 hover:bg-brand-blue-800 text-emerald-700 font-semibold text-center py-4 px-8 rounded-xl border-2 border-emerald-600/70 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  id="hero-whatsapp-cta"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600/10" />
                  Atendimento WhatsApp Rápido
                </a>
              </div>

              {/* CLINICAL PROOFS */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-brand-blue-100 w-full" id="hero-bullet-trust">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#81a1c9] block">100%</span>
                  <span className="text-xs sm:text-sm text-gray-400">Exatidão de Grau</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#81a1c9] block">+5 mil</span>
                  <span className="text-xs sm:text-sm text-gray-400">Olhares Cuidando</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#81a1c9] block">40 min</span>
                  <span className="text-xs sm:text-sm text-gray-400">Montagem Expressa</span>
                </div>
              </div>

            </div>

            {/* HERO IMAGE COLUMN USING THE COMPRESSED REAL GENERATED ASSET */}
            <div className="lg:col-span-5 relative" id="hero-image-column">
              <div className="relative mx-auto max-w-[380px] lg:max-w-none">
                
                {/* Visual design badges orbiting */}
                <div className="absolute -top-4 -left-4 bg-brand-blue-950/95 backdrop-blur-xs p-3 rounded-2xl shadow-lg border border-brand-blue-100 flex items-center gap-2.5 z-20 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-extrabold text-[#81a1c9] text-sm block">Premium Care</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Showroom Exclusivo</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-4 bg-brand-blue-950 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse-ring shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-[#d9bc06] block font-mono">Suporte Imediato</span>
                    <span className="font-bold text-xs sm:text-sm leading-tight block">Fale Conosco Online</span>
                  </div>
                </div>

                {/* Main Framed Hero Image */}
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-brand-blue-100 bg-brand-blue-900 group">
                  <img
                    src={imgHeroClassic}
                    alt="Casal elegante sorrindo com óculos de luxo Ótica Acaz"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    id="hero-img-main"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/45 via-transparent to-transparent"></div>
                </div>

                {/* Retro subtle wireframe accents */}
                <div className="absolute -inset-4 border-2 border-dashed border-brand-yellow-500/30 rounded-[3rem] -z-10 pointer-events-none scale-98"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / DIFERENCIAIS SECTION */}
      <section className="bg-brand-blue-950 py-16 sm:py-24 border-y border-brand-blue-800" id="sobre-nos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#335b9d] font-mono text-xs uppercase tracking-widest font-bold block mb-2">História e Compromisso</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#81a1c9]">
              O cuidado com seus olhos merece um atendimento humano.
            </h2>
            <div className="w-16 h-1 bg-[#d9bc06] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
              Fundada em valores de respeito, honestidade e excelência, a <strong>Ótica Acaz</strong> redefiniu a forma com que as pessoas escolhem óculos na região. Longe de vendas automáticas, criamos relações genuínas orientadas por amor à saúde e design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Atendimento Altamente Humanizado',
                desc: 'Acolhemos você de forma única. Ouvimos suas dores, sua postura diária no trabalho, seus gostos e passatempos para sugerir a armação e lentes perfeitas.',
                badge: 'Acolhimento'
              },
              {
                icon: ShieldCheck,
                title: 'Laboratório Próprio Avançado',
                desc: 'Nossa tecnologia de montagem permite cortes térmicos de alta fidelidade sem rebarbas. Seus óculos ficam mais resistentes, sem marcas e duráveis.',
                badge: 'Tecnologia'
              },
              {
                icon: Sparkles,
                title: 'Curadoria Internacional Exclusiva',
                desc: 'Garantimos acesso direto a marcas inovadoras e exclusividades premium em acetato polido à mão, fibras de carbono leve e armações hipoalergênicas.',
                badge: 'Sofisticação'
              }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-brand-blue-800 rounded-2xl p-6 sm:p-8 border border-brand-blue-700 transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-blue-100 text-left flex flex-col justify-between"
                  id={`pillar-card-${idx}`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-[#335b9d] flex items-center justify-center mb-6 border border-brand-blue-100">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#d9bc06] uppercase tracking-widest block mb-2">
                      {pillar.badge}
                    </span>
                    <h3 className="text-lg font-bold text-[#81a1c9] mb-3">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-blue-800/50 flex items-center text-[#335b9d] text-xs font-semibold gap-1">
                    Saúde em Primeiro Lugar <CheckCircle className="w-3.5 h-3.5 text-[#d9bc06]" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CLINICAL EYE EXAMS SECTION - FEATURING Modern Exam Asset */}
      <section className="bg-brand-blue-950 py-16 sm:py-24 border-y border-brand-blue-800/80 overflow-hidden" id="cuidados-clinicos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column showing generated exam room */}
            <div className="lg:col-span-6 relative order-last lg:order-first" id="clinic-image-side">
              <div className="absolute -inset-4 border-2 border-dashed border-brand-blue-200 rounded-[2.5rem] pointer-events-none -z-10 scale-98"></div>
              
              {/* Highlight card overlapping */}
              <div className="absolute top-6 right-6 bg-brand-blue-950/95 backdrop-blur-xs p-4 rounded-xl shadow-lg border border-brand-blue-800 flex items-center gap-3 z-10 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#81a1c9] block">Higienização Total</h4>
                  <p className="text-[11px] text-gray-400">Aparelhos monitorados e sanitizados entre exames.</p>
                </div>
              </div>

              <div className="relative aspect-video lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white cursor-pointer group">
                <img
                  src={imgExamRoom}
                  alt="Consultório óptico higienizado de optometria da Ótica Acaz"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  id="clinic-img-view"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
              </div>
            </div>

            {/* Content info column */}
            <div className="lg:col-span-6 text-left flex flex-col justify-center items-start" id="clinic-content-side">
              <div className="bg-brand-blue-50 text-[#335b9d] text-xs font-bold font-mono px-3.5 py-1.5 rounded-full mb-4">
                Consultório Optométrico Licenciado
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#81a1c9] mb-6">
                Exames de alta precisão com médicos e especialistas
              </h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-sm sm:text-base">
                Na Ótica Acaz, a sua saúde ocular é levada a sério. Contamos com um <strong>consultório integrado moderno</strong> para mapeamento completo da fisionomia ocular, medição computadorizada da refração e indicação ideal de focos. Ambiente totalmente higienizado, climatizado e seguro.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 w-full" id="grid-clinic-perks">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow-100 text-[#d9bc06] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#81a1c9]">Aparelhos Digitais</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Exatidão instantânea no mapeamento da visão.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow-100 text-[#d9bc06] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#81a1c9]">Optometristas Credenciados</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Profissionais calmos e detalhistas na análise.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow-100 text-[#d9bc06] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#81a1c9]">Montagem Express</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Laboratório próprio reduz o tempo de confecção.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow-100 text-[#d9bc06] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#81a1c9]">Retorno de Adaptação</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Acompanhamento completo de adaptação com lentes.</p>
                  </div>
                </div>
              </div>

              <a
                href="#agendamento-direto"
                className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold text-sm py-4 px-8 rounded-xl shadow-md shadow-brand-blue-600/10 transition-all flex items-center gap-1.5"
                id="btn-clinic-learn-more"
              >
                Conhecer Procedimentos
                <ChevronRight className="w-4.5 h-4.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CORE EXPERIENCE - ATTRACT CUSTOMERS TO STORE */}
      <section className="bg-brand-blue-900 py-20 sm:py-28 text-left border-b border-brand-blue-800" id="produtos-exclusivos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Content Side: Why in-person matters */}
            <div className="lg:col-span-7 flex flex-col items-start relative z-10">
              <span className="text-[#335b9d] font-bold font-mono text-xs uppercase tracking-widest block mb-2">
                Experimentação Presencial
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#81a1c9] font-semibold mb-6 leading-tight">
                Por que escolher seus óculos pessoalmente faz toda a diferença?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                Encontrar os óculos ideais vai muito além de um clique na tela. É uma experiência tátil, de conforto facial e sintonia estética. Em nosso showroom exclusivo, ajudamos você a sentir e experimentar centenas de modelos originais de marcas renomadas em um ambiente calmo e acolhedor.
              </p>

              {/* Benefits list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#152540] text-[#335b9d] flex items-center justify-center shrink-0">
                    <Glasses className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#81a1c9]">Ajuste Anatômico Sob Medida</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Nossos especialistas realizam o ajuste exato das hastes e plaquetas no seu rosto para eliminar qualquer pressão ou desconforto.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#152540] text-[#335b9d] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#81a1c9]">Curadoria e Textura Real</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Sinta na pele o toque do legítimo acetato italiano polido à mão, o peso pluma do titânio espacial e a robustez da fibra de carbono.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#152540] text-[#335b9d] flex items-center justify-center shrink-0">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#81a1c9]">Consultoria Estética Express</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Análise presencial das suas expressões e traços faciais para sugerir o modelo que melhor valoriza o seu formato de sobrancelhas e bochechas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#152540] text-[#335b9d] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#81a1c9]">Centragem Pupilográfica</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Medimos com precisão milimétrica a distância pupilar com equipamentos físicos digitais, evitando cansaço visual e distorções nas lentes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#agendamento-direto"
                  className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold text-center text-sm py-4 px-8 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 duration-200 flex items-center justify-center gap-2 group"
                >
                  Agendar Visita com Especialista
                  <ChevronRight className="w-4 h-4 text-[#d9bc06] group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="https://maps.google.com/?q=R.+Dr.+Fl%C3%A1quer,+209+-+Centro,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09710-180"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0c172a] hover:bg-[#152540] text-white font-semibold text-center text-sm py-4 px-8 rounded-xl border border-gray-200 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#d9bc06]" />
                  Ver Rota no Google Maps
                </a>
              </div>
            </div>

            {/* Graphics/Showcase block: Immersive Store experience card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                
                {/* Micro ornament overlay */}
                <div className="absolute -top-5 -right-5 bg-brand-blue-950 p-4 rounded-2xl shadow-xl border border-brand-blue-150 flex flex-col items-start gap-1 z-20 max-w-[200px]">
                  <span className="text-[10px] text-[#335b9d] font-bold uppercase tracking-wider block">Cafezinho Gourmet</span>
                  <p className="text-[11px] text-gray-400 leading-tight">
                    Preparamos um delicioso café espresso grátis durante a sua escolha de modelos.
                  </p>
                </div>

                {/* Main Showroom Card with image inside */}
                <div className="bg-brand-blue-950 rounded-[2.5rem] border border-gray-150 p-6 shadow-xl relative overflow-hidden flex flex-col">
                  <div className="relative aspect-[4/3] rounded-[1.8rem] overflow-hidden bg-brand-blue-900 border border-brand-blue-800">
                    <img
                      src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGMVXPjPXwCdz1ssaxWw5YK126H8Lq7zbacj4Pg0EknY16hwMojWV8BMdTIxJ2gJsu9YcjAGxgBvV6KOt7CgXqBtp-KycF53DxXrKTiH7hvTrVLrpcosyrReDjVM8fiBo1Ja6sE=s680-w680-h510-rw"
                      alt="Nossos modelos de óculos disponíveis para experimentação na loja"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover sm:hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-blue-950/85 backdrop-blur-xs text-[10px] text-white font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                      Showroom Comercial SP
                    </div>
                  </div>

                  <div className="mt-6 text-left">
                    <h3 className="font-serif font-semibold text-lg text-[#81a1c9] mb-2">
                      Nosso Ambiente de Atendimento
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      Ambiente agradável e climatizado, com um amplo estoque de modelos de grau, escuros e infantis de fabricação internacional e nacional. Venha sem pressa!
                    </p>

                    <div className="bg-brand-blue-50/50 rounded-2xl p-4 border border-brand-blue-100/60 flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#335b9d] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-[#81a1c9] uppercase tracking-wide">Experimentação Sem Fila</span>
                        <span className="block text-xs text-gray-400 mt-0.5">Agendando previamente, você tem um consultor exclusivo e horário reservado.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle outer geometric dashed ring */}
                <div className="absolute -inset-4 border-2 border-dashed border-brand-yellow-500/20 rounded-[3rem] -z-10 pointer-events-none scale-98"></div>
              </div>
            </div>

          </div>

          {/* EDITORIAL BANNER FOR EXCLUSIVE SERVICES */}
          <div className="bg-brand-blue-950 text-white rounded-3xl p-8 sm:p-12 mt-16 relative overflow-hidden border border-brand-blue-800 shadow-xl" id="editorial-luxury-banner">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d9bc06]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-600/30 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 text-left">
                <span className="text-[#d9bc06] text-xs font-mono font-bold uppercase tracking-widest block mb-2">Sua visão com os melhores</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold tracking-tight text-[#81a1c9]">
                  Lentes Multifocais Alemãs e Japonesas de última geração
                </h3>
                <p className="text-brand-blue-200 text-xs sm:text-sm mt-4 leading-relaxed max-w-xl">
                  Parceria oficial credenciada com laboratórios de fabricação robotizada alemães e franceses. Fornecemos os tratamentos antirreflexo e filtros de luz digital mais avançados do mercado internacional com garantia estendida de 1 ano. 
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <span className="bg-brand-blue-700/50 text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 font-medium">Antirreflexo Inteligente</span>
                  <span className="bg-brand-blue-700/50 text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 font-medium font-serif italic">100% Polarizadas</span>
                  <span className="bg-brand-blue-700/50 text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 font-medium">Filtro de Luz Azul Real</span>
                </div>
              </div>

              {/* Banner side asset using 2nd generated asset */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-white/25">
                  <img
                    src={imgPremiumGlasses}
                    alt="Armações de óculos refinadas no showroom da Ótica Acaz"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    id="clinic-img-editorial"
                  />
                  <div className="absolute inset-0 bg-brand-blue-950/20"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DETAILED SERVICES CARDS GRID */}
      <section className="bg-brand-blue-950 py-16 sm:py-24 border-y border-brand-blue-800" id="servicos-premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#335b9d] font-bold font-mono text-xs uppercase tracking-widest block mb-2">Excelência Clínica e Comercial</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#81a1c9] font-semibold">
              Serviços desenhados para proteger sua saúde visual
            </h2>
            <div className="w-16 h-1 bg-[#d9bc06] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-cards-grid">
            {servicesData.map((service, index) => {
              // Custom map for icons in order of data structure
              const ServiceIcon = {
                'service-1': Eye,
                'service-2': Sparkles,
                'service-3': ShieldCheck,
                'service-4': Settings2
              }[service.id] || Eye;

              return (
                <div 
                  key={service.id} 
                  className="bg-brand-blue-900/50 rounded-2xl p-6 border border-brand-blue-800/60 text-left hover:border-brand-blue-200 transition-colors flex flex-col justify-between"
                  id={`service-card-${index}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-[#335b9d] flex items-center justify-center mb-5">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#81a1c9] text-base mb-2">{service.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-250/50">
                    <span className="text-[10px] text-[#d9bc06] font-bold uppercase block tracking-wider">Benefício Primário:</span>
                    <span className="text-xs font-semibold text-[#81a1c9] mt-0.5 block">{service.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION - EMOTIONAL & STORIES */}
      <section className="bg-brand-blue-900/60 py-20 sm:py-28 text-white relative overflow-hidden text-left border-b border-brand-blue-800" id="depoimentos">
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-yellow-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Context Header Side */}
            <div className="lg:col-span-4" id="testimonials-context">
              <span className="text-[#335b9d] font-bold font-mono text-xs uppercase tracking-widest block mb-2">Comunidade e Depoimentos</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#81a1c9] leading-tight">
                Mais do que óculos: <span className="text-brand-yellow-650 block italic font-normal font-serif">histórias reais de clareza ocular.</span>
              </h2>
              <p className="text-gray-300 text-sm mt-5 leading-relaxed">
                Mudar de óculos envolve resgatar o conforto diário, eliminar as terríveis dores de cabeça e reviver a autoconfiança de se sentir elegante. Veja os relatos reais dos nossos clientes.
              </p>
              
              <div className="mt-8 p-4 bg-brand-blue-50/80 rounded-2xl border border-brand-blue-150 inline-flex items-center gap-3 shadow-xs">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-xs font-extrabold text-[#81a1c9]">M</div>
                  <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-xs font-extrabold text-[#81a1c9]">J</div>
                  <div className="w-8 h-8 rounded-full bg-amber-200 border-2 border-white flex items-center justify-center text-xs font-extrabold text-[#81a1c9]">R</div>
                </div>
                <div className="text-xs text-[#81a1c9]">
                  <span className="block font-bold">Nota 5,0 de 5 no Google ⭐</span>
                  <span className="text-brand-blue-800 font-medium">644 avaliações</span>
                </div>
              </div>
            </div>

            {/* Testimonials List Side */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="testimonials-grid">
              {testimonialsData.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-brand-blue-950 text-white p-6 rounded-3xl border border-brand-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between hover:border-brand-blue-200"
                  id={`testimonial-card-${testimonial.id}`}
                >
                  <div>
                    {/* Stars bar */}
                    <div className="flex gap-1 mb-4 text-[#d9bc06]">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-6">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-brand-blue-50 text-[#335b9d] font-bold text-sm shrink-0 flex items-center justify-center border border-brand-blue-100">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#81a1c9] text-xs sm:text-sm leading-tight">{testimonial.name}</h4>
                      <span className="text-[10px] text-gray-400 block mt-0.5">{testimonial.role} &bull; {testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* DYNAMIC WHATSAPP BOOKING FUNNEL / CTA */}
      <section className="bg-brand-blue-950 py-20 sm:py-24 border-b border-brand-blue-800" id="agendamento-direto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="bg-brand-blue-950 rounded-[2.5rem] p-6 sm:p-12 border border-brand-blue-100 shadow-xl relative overflow-hidden" id="form-booking-box">
            
            <div className="absolute top-0 right-0 w-44 h-44 bg-brand-yellow-400/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
              <span className="bg-brand-yellow-105 border border-brand-yellow-300 text-[#d9bc06] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                Sua saúde em 1 clique
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#81a1c9] font-semibold mt-3">
                Agende Seu Exame de Vista Gratuito
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Insira seus dados abaixo para iniciar seu agendamento. Você será direcionado para confirmar seu horário com nosso especialista no WhatsApp.
              </p>
            </div>

            {bookingStep === 0 && (
              <form onSubmit={() => setBookingStep(1)} className="space-y-4 max-w-lg mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">Seu nome Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Silva"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full bg-brand-blue-800 rounded-xl px-4 py-3 text-sm border border-brand-blue-800 focus:bg-brand-blue-950 focus:outline-none focus:ring-2 focus:ring-brand-blue-600/20 text-[#81a1c9] font-medium"
                      id="input-booking-name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">WhatsApp com DDD</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 98888-8888"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full bg-brand-blue-800 rounded-xl px-4 py-3 text-sm border border-brand-blue-800 focus:bg-brand-blue-950 focus:outline-none focus:ring-2 focus:ring-brand-blue-600/20 text-[#81a1c9] font-medium"
                      id="input-booking-phone"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
                    id="btn-trigger-step1-booking"
                  >
                    Próxima Etapa: Escolher Data
                  </button>
                </div>
              </form>
            )}

            {bookingStep === 1 && (
              <form onSubmit={handleBookingSubmit} className="space-y-5 max-w-lg mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">Preferência de Data</label>
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-brand-blue-800 rounded-xl px-4 py-3 text-sm border border-brand-blue-800 focus:bg-brand-blue-950 focus:outline-none text-[#81a1c9] font-medium cursor-pointer"
                      id="input-booking-date"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">Melhor Período</label>
                    <select
                      value={bookingPeriod}
                      onChange={(e) => setBookingPeriod(e.target.value)}
                      className="w-full bg-brand-blue-800 rounded-xl px-4 py-3 text-sm border border-brand-blue-800 focus:bg-brand-blue-950 focus:outline-none text-[#81a1c9] font-medium cursor-pointer"
                      id="input-booking-period"
                    >
                      <option value="manha">Manhã (09:00h às 12:00h)</option>
                      <option value="tarde">Tarde (13:00h às 18:00h)</option>
                      <option value="sabado">Sábado de Manhã</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 justify-center">
                  <button
                    type="button"
                    onClick={() => setBookingStep(0)}
                    className="bg-brand-blue-800 text-gray-400 hover:bg-brand-blue-700 text-sm font-semibold py-3.5 px-6 rounded-xl transition-colors cursor-pointer"
                    id="btn-back-step"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    id="btn-submit-booking-to-wa"
                  >
                    <MessageCircle className="w-5 h-5 text-white fill-white/10" />
                    Enviar para WhatsApp
                  </button>
                </div>
              </form>
            )}

            {bookingStep === 2 && (
              <div className="text-center py-6 relative z-10 max-w-lg mx-auto" id="booking-success-box">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#81a1c9] mb-2">Sua solicitação foi enviada!</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  Para sua agilidade, geramos uma conversa pré-formatada. Verifique seu aplicativo do WhatsApp para concluir o horário com o atendente.
                </p>
                <button
                  onClick={() => {
                    setBookingStep(0);
                    setBookingName('');
                    setBookingPhone('');
                    setBookingDate('');
                  }}
                  className="text-[#335b9d] hover:text-brand-blue-800 text-xs font-semibold underline cursor-pointer"
                  id="btn-reset-booking"
                >
                  Novo agendamento / Limpar dados
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* BRAND FOOTER */}
      <footer className="bg-brand-blue-950 text-white pt-16 pb-8 border-t border-brand-blue-800 text-left relative z-10" id="rodape-profissional">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            {/* Store details info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-brand-blue-950 flex items-center justify-center border border-brand-blue-900">
                  <img 
                    src="https://i.pinimg.com/736x/ba/11/20/ba11208b24b4b426350e3f11bd392e62.jpg" 
                    alt="Logo Colmeia Óticas Acaz" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-lg font-serif font-bold text-[#81a1c9]">Ótica Acaz</span>
              </div>
              <p className="text-xs text-brand-blue-200 leading-relaxed">
                Cuidado humanizado e rigor técnico para sua saúde visual. Encontre sua personalidade nas melhores armações exclusivas do showroom comercial.
              </p>
              <div className="flex gap-3 mt-6">
                <a 
                  href="https://maps.google.com/?q=R.+Dr.+Fl%C3%A1quer,+209+-+Centro,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09710-180" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-blue-700/50 text-[#d9bc06] flex items-center justify-center border border-white/10 transition-colors" 
                  title="Google Maps da loja"
                >
                  <MapPinned className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/acazotica/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-blue-700/50 text-white flex items-center justify-center border border-white/10 transition-colors" 
                  title="Nosso Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/acazotica/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-blue-700/50 text-white flex items-center justify-center border border-white/10 transition-colors" 
                  title="Nosso Instagram"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links navigation */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Navegação</h4>
              <ul className="space-y-2 text-xs text-brand-blue-200">
                <li><a href="#sobre-nos" className="hover:text-[#d9bc06] transition-colors block">Diferenciais</a></li>
                <li><a href="#produtos-exclusivos" className="hover:text-[#d9bc06] transition-colors block">Experimentação Presencial</a></li>
                <li><a href="#servicos-premium" className="hover:text-[#d9bc06] transition-colors block font-serif italic">Nossas Técnicas & Lentes</a></li>
                <li><a href="#cuidados-clinicos" className="hover:text-[#d9bc06] transition-colors block">Exame Optométrico</a></li>
                <li><a href="#sobre-nos" className="hover:text-[#d9bc06] transition-colors block">Nossos Diferenciais</a></li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Horário de Funcionamento</h4>
              <ul className="space-y-2 text-xs text-brand-blue-200">
                <li>
                  <span className="font-semibold block text-white">Segunda a Sexta-feira:</span>
                  <span>08:30 às 17:30</span>
                </li>
                <li>
                  <span className="font-semibold block text-white">Sábados:</span>
                  <span>08:30 às 16:30</span>
                </li>
                <li>
                  <span className="font-semibold block text-white">Domingos:</span>
                  <span>Fechado</span>
                </li>
                <li className="text-[#d9bc06] text-xs font-semibold pt-1">
                  📋 Atendimento sob agendamento
                </li>
              </ul>
            </div>

            {/* Endereco e Contato */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contato Oficial Local</h4>
              <ul className="space-y-3.5 text-xs text-brand-blue-200">
                <li className="flex gap-2">
                  <MapPin className="w-4 h-4 text-[#d9bc06] shrink-0" />
                  <span>R. Dr. Fláquer, 209 - Centro, São Bernardo do Campo - SP, 09710-180</span>
                </li>
                <li className="flex gap-2">
                  <Phone className="w-4 h-4 text-[#d9bc06] shrink-0" />
                  <div>
                    <span className="block font-semibold">Telefone &amp; WhatsApp: (11) 4125-7371</span>
                    <span className="block text-[10px] text-[#335b9d] mt-1 leading-normal italic">(Fixo comercial e celular)</span>
                  </div>
                </li>
                <li className="pt-2">
                  <a
                    href={getGeneralWhatsAppLink("Olá! Vi o endereço de vocês no rodapé do site e gostaria de agendar um horário de visita.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold py-2 px-3.5 rounded-lg text-xs"
                    id="btn-footer-wa"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Chamar no WhatsApp
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-brand-blue-800/80 pt-8 mt-8 text-center text-xs text-[#335b9d] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>&copy; 2026 Óticas Acaz. Todos os direitos reservados. CNPJ: 21.497.865/0001-85</p>
            <p className="text-[10px] tracking-wide text-brand-blue-400 font-mono">
              Precisão Óptica. Curadoria de Design de Alto Visual.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP CHAT WIDGET - PRESTIGE CONVERSION */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end" id="flying-chat-box">
        
        {/* Unread notification badge */}
        {showNotification && !isChatOpen && (
          <div className="bg-brand-blue-950 text-[#81a1c9] px-4 py-2.5 rounded-xl shadow-xl border border-brand-blue-100 text-left max-w-[250px] mb-3 relative animate-bounce-slow">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowNotification(false);
              }}
              className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-300"
              title="Fechar"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span className="text-[10px] text-[#d9bc06] font-bold uppercase tracking-wider">Atendimento Acaz</span>
            </div>
            <p className="text-xs text-gray-300 font-medium leading-relaxed mt-1">
              Olá! Em que podemos ajudar com sua visão hoje?
            </p>
          </div>
        )}

        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="bg-brand-blue-950 rounded-3xl overflow-hidden shadow-2xl border border-brand-blue-100 max-w-sm w-[350px] mb-3 text-left"
              id="chat-window"
            >
              
              {/* Header */}
              <div className="bg-brand-blue-950 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-brand-blue-700/50 text-white flex items-center justify-center font-bold font-serif text-sm">A</div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-brand-blue-950"></span>
                  </div>
                  <div>
                    <span className="font-bold text-xs sm:text-sm block">Suporte Ótica Acaz</span>
                    <span className="text-[10px] text-[#335b9d] block leading-none">Online &mdash; Responde na hora</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-brand-blue-200 hover:text-white transition-colors cursor-pointer"
                  title="Fechar Chat"
                  id="btn-close-widget"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat body messages */}
              <div className="p-4 bg-brand-blue-50/50 space-y-3.5 h-[240px] overflow-y-auto font-sans" id="chat-scroller">
                <div className="bg-brand-blue-950 p-3 rounded-2xl rounded-tl-none shadow-xs border border-gray-150/50 text-xs text-gray-300 leading-relaxed max-w-[85%]">
                  👋 Olá! Seja muito bem-vindo à Ótica Acaz.
                </div>
                <div className="bg-brand-blue-950 p-3 rounded-2xl rounded-tl-none shadow-xs border border-gray-150/50 text-xs text-gray-300 leading-relaxed max-w-[85%]">
                  Estou aqui para ajudar você a encontrar os óculos perfeitos ou agendar seu exame de vista gratuito computadorizado. Como posso te apoiar hoje?
                </div>
                
                {chatMessage && (
                  <div className="bg-emerald-600 text-white p-3 rounded-2xl rounded-tr-none shadow-xs text-xs leading-relaxed max-w-[85%] ml-auto text-right">
                    {chatMessage}
                  </div>
                )}
              </div>

              {/* Chat Quick Actions */}
              <div className="p-3 border-t border-gray-100 flex flex-wrap gap-1.5 justify-start bg-brand-blue-900/50">
                <button
                  onClick={() => setChatMessage("Quero saber mais sobre Lentes Multifocais")}
                  className="text-[10.5px] bg-brand-blue-950 border border-gray-250 hover:bg-brand-blue-50 text-[#81a1c9] rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                >
                  Lentes Multifocais
                </button>
                <button
                  onClick={() => setChatMessage("Agendar Exame de Vista Gratuito")}
                  className="text-[10.5px] bg-brand-blue-950 border border-gray-250 hover:bg-brand-blue-50 text-[#81a1c9] rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                >
                  Exame Gratuito 🩺
                </button>
                <button
                  onClick={() => setChatMessage("Como funciona a consultoria de estilo presencial?")}
                  className="text-[10.5px] bg-brand-blue-950 border border-gray-250 hover:bg-brand-blue-50 text-[#81a1c9] rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                >
                  Consultoria de Estilo 👓
                </button>
              </div>

              {/* Chat Input form triggers WhatsApp */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!chatMessage.trim()) return;
                  window.open(getGeneralWhatsAppLink(chatMessage), '_blank');
                }}
                className="p-3 border-t border-gray-100 flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Escreva sua pergunta ou selecione acima..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="bg-brand-blue-800 flex-1 rounded-xl px-3 py-2 text-xs border border-brand-blue-800 outline-none text-[#81a1c9] focus:bg-brand-blue-950"
                  id="chat-user-input"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-4 py-2 text-xs font-semibold shrink-0 transition-colors cursor-pointer flex items-center gap-1"
                  id="btn-chat-send"
                >
                  Enviar
                </button>
              </form>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse button */}
        <button
          onClick={() => {
            setIsChatOpen(!isChatOpen);
            setShowNotification(false);
          }}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl flex items-center justify-center animate-pulse-ring transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          title="Fale Conosco"
          id="btn-widget-toggle"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7 fill-white/10" />}
        </button>

      </div>

    </div>
  );
}
