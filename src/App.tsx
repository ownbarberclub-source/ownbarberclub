/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Scissors, User, MapPin, Phone, Instagram, Check, Menu, X, Zap, Droplets, Sparkles, Paintbrush, Flame, Skull, PenTool as Piercing, ShieldCheck, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState, useRef } from "react";
import Logo from "./assets/logo.png";
import fachada from "./assets/fachada.jpg";
import clube from "./assets/clube.JPG";
// Equipe Tattoo
import equipeTai from "./assets/equipe-tai.jpg";
import equipeBruna from "./assets/equipe-bruna.jpg";
import equipeThiago from "./assets/equipe-thiago.jpg";
// Equipe Centro
import centroJohn from "./assets/bw-centro-john.jpg";
import centroVitinho from "./assets/bw-centro-vitinho.jpg";
import centroDouglas from "./assets/bw-centro-douglas.JPG";
import centroJulio from "./assets/bw-centro-julio.JPG";
import centroThiago from "./assets/bw-centro-thiago.jpg";
// Equipe Avenida
import avenidaHernaldo from "./assets/bw-avenida-hernaldo.jpg";
import avenidaNasser from "./assets/bw-avenida-nasser.jpg";
// Equipe Efapi
import efipiEduardo from "./assets/efapi-eduardo.jpg";
import efipiTiago from "./assets/bw-efapi-tiago.jpg";
import efipiKaique from "./assets/bw-efapi-kaique.JPG";
import efipiCarlos from "./assets/bw-efapi-carlos.JPG";
import efipiCadu from "./assets/bw-efapi-cadu.JPG";
import galeria1 from "./assets/galeria-01.jpg";
import galeria2 from "./assets/galeria-02.jpg";
import galeria3 from "./assets/galeira-03.jpg";
import galeria4 from "./assets/galeria-04.jpg";
import galeria5 from "./assets/galeria-05.jpg";
import galeria6 from "./assets/galeria-06.jpg";
import galeria7 from "./assets/galeria-07.jpg";
import galeria8 from "./assets/galeria-08.jpg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIgOpen, setIsIgOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const services = [
    { name: "Corte de Cabelo", icon: Scissors },
    { name: "Barba Premium", icon: User },
    { name: "Sobrancelha", icon: Check },
    { name: "Alisamento", icon: Zap },
    { name: "Argila", icon: Droplets },
    { name: "Depilação (Cera)", icon: Flame },
    { name: "Hidratação", icon: Droplets },
    { name: "Limpeza de Pele", icon: Sparkles },
    { name: "Luzes", icon: Zap },
    { name: "Matização", icon: Paintbrush },
    { name: "Pigmentação", icon: Paintbrush },
    { name: "Platinado", icon: Sparkles },
    { name: "Selagem", icon: Check },
    { name: "Tonalizante", icon: Paintbrush },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand selection:text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Own Barber Club" className="w-16 h-16 object-contain brightness-0 invert" />
            <span className="font-display text-3xl tracking-tighter">OWN <span className="text-brand">BARBER</span> CLUB</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {["Sobre", "Clube", "Serviços", "Tattoo", "Equipe", "Unidades"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-[0.2em] hover:text-brand transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed inset-0 top-20 bg-black z-40 p-10 flex flex-col gap-8"
          >
            {["Sobre", "Clube", "Serviços", "Tattoo", "Equipe", "Unidades"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-5xl font-display uppercase tracking-tighter hover:text-brand"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={fachada}
            alt="Barbershop"
            className="w-full h-full object-cover opacity-50 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] mb-4">
                OWN <br />
                BARBER <br />
                <span className="text-brand">CLUB.</span>
              </h1>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-white text-black font-bold uppercase text-xs tracking-widest">Estilo</span>
                <span className="px-4 py-2 bg-brand text-black font-bold uppercase text-xs tracking-widest">Atitude</span>
                <span className="px-4 py-2 border border-white text-white font-bold uppercase text-xs tracking-widest">Exclusividade</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand py-4 overflow-hidden border-t-4 border-black">
          <div className="animate-marquee flex gap-20">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-20 items-center">
                <span className="text-black font-display text-4xl uppercase tracking-tighter">Own Barber Club</span>
                <Scissors className="text-black" />
                <span className="text-black font-display text-4xl uppercase tracking-tighter">Chapecó - SC</span>
                <Zap className="text-black" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapecoense Partnership Section */}
      <section className="py-24 bg-chape relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 h-full">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full" />
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            {...fadeIn}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-48 h-48 bg-white p-4 flex items-center justify-center shrink-0 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.svg/500px-Logo_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.svg.png"
                alt="Chapecoense Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-black text-white font-mono text-xs tracking-widest uppercase mb-4">Parceria Exclusiva</span>
              <h2 className="text-5xl md:text-7xl text-white mb-6">BARBEARIA OFICIAL DA CHAPECOENSE.</h2>
              <p className="text-xl text-white/80 font-light max-w-2xl">
                O estilo que entra em campo. Temos o orgulho de cuidar do visual dos atletas e da comissão técnica do Verdão do Oeste.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-7xl md:text-9xl mb-10">O CLUBE.</h2>
            <div className="space-y-8 text-xl text-white/70 font-light leading-relaxed">
              <p>
                Não somos apenas uma barbearia. Somos o ponto de encontro de quem entende que o visual é sua marca no mundo.
              </p>
              <p className="text-white font-medium border-l-4 border-brand pl-6">
                No Own Barber Club, a régua é alta e o estilo é obrigatório.
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-square bg-brand/20 absolute -top-10 -left-10 w-full h-full -z-10" />
            <img
              src={clube}
              alt="O Clube"
              className="w-full aspect-square object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section id="clube" className="py-32 bg-brand text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
          <Scissors size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-6xl md:text-9xl mb-4 text-black">ASSINATURA.</h2>
            <p className="text-2xl font-display uppercase tracking-widest bg-black text-brand inline-block px-6 py-2">
              Somos a elite do corte ilimitado
            </p>
          </motion.div>

          <div className="relative group">
            {/* Navigation Arrows */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 bg-black text-brand rounded-full flex items-center justify-center border-2 border-brand shadow-xl opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex hover:bg-brand hover:text-black"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 bg-black text-brand rounded-full flex items-center justify-center border-2 border-brand shadow-xl opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex hover:bg-brand hover:text-black"
            >
              <ChevronRight size={32} />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-6 px-6 hide-scrollbar md:-mx-12 md:px-12 scroll-smooth"
            >
              {[
                { 
                  name: "Essencial Corte", 
                  price: "117", 
                  desc: "Esteja sempre pronto, qualquer dia da semana.",
                  tag: "TODOS OS DIAS",
                  features: ["Uso ilimitado todos os dias", "Vá quantas vezes quiser no mês", "Atendimento nas 3 unidades", "10% OFF em produtos e serviços extras"], 
                  link: "https://l.appbarber.com.br/d4vtuaa4" 
                },
                { 
                  name: "Essencial Barba", 
                  price: "137", 
                  desc: "Esteja sempre pronto, qualquer dia da semana.",
                  tag: "TODOS OS DIAS",
                  features: ["Uso ilimitado todos os dias", "Vá quantas vezes quiser no mês", "Atendimento nas 3 unidades", "10% OFF em produtos e serviços extras"], 
                  link: "https://l.appbarber.com.br/orfipymn" 
                },
                { 
                  name: "Essencial Combo", 
                  price: "197", 
                  desc: "O máximo de liberdade e praticidade.",
                  tag: "TODOS OS DIAS",
                  features: ["Uso ilimitado todos os dias", "Vá quantas vezes quiser no mês", "Atendimento nas 3 unidades", "10% OFF em produtos e serviços extras"], 
                  link: "https://l.appbarber.com.br/9kea4zr0",
                  highlight: true 
                },
                { 
                  name: "Start Corte", 
                  price: "87", 
                  desc: "Perfeito pra manter o cabelo sempre alinhado.",
                  tag: "SEG A QUA",
                  features: ["Uso ilimitado de segunda a quarta-feira", "Vá quantas vezes quiser no mês", "Atendimento nas 3 unidades", "10% OFF em produtos e serviços extras"], 
                  link: "https://l.appbarber.com.br/6m5vqc8k" 
                },
                { 
                  name: "Start Barba", 
                  price: "117", 
                  desc: "Barba sempre desenhada e na régua.",
                  tag: "SEG A QUA",
                  features: ["Uso ilimitado de segunda a quarta-feira", "Vá quantas vezes quiser no mês", "Atendimento nas 3 unidades", "10% OFF em produtos e serviços extras"], 
                  link: "https://l.appbarber.com.br/nhq05bpo" 
                },
                { 
                  name: "Start Combo", 
                  price: "167", 
                  desc: "O combo completo, sempre em dia.",
                  tag: "SEG A QUA",
                  features: ["Uso ilimitado de segunda a quarta-feira", "Vá quantas vezes quiser no mês", "Atendimento nas 3 unidades", "10% OFF em produtos e serviços extras"], 
                  link: "https://l.appbarber.com.br/ino9jcsg",
                  highlight: true
                },
                { 
                  name: "Chape Corte", 
                  price: "77", 
                  desc: "Sócio Chape tem vantagem exclusiva.",
                  tag: "SÓCIO CHAPE",
                  features: ["Uso ilimitado de segunda a quarta-feira", "Vá quantas vezes quiser no mês", "Atendimento nas 3 unidades", "10% OFF em produtos e tatuagens"], 
                  link: "https://l.appbarber.com.br/afd1u8yc",
                  chape: true
                },
                { 
                  name: "Chape Barba", 
                  price: "107", 
                  desc: "Sócio Chape tem vantagem exclusiva.",
                  tag: "SÓCIO CHAPE",
                  features: ["Uso ilimitado de segunda a quarta-feira", "Vá quantas vezes quiser no mês", "Atendimento nas 3 unidades", "10% OFF em produtos e tatuagens"], 
                  link: "https://l.appbarber.com.br/s1su0uyi",
                  chape: true
                },
                { 
                  name: "Chape Combo", 
                  price: "157", 
                  desc: "Sócio Chape tem vantagem exclusiva.",
                  tag: "SÓCIO CHAPE",
                  features: ["Uso ilimitado de segunda a quarta-feira", "Vá quantas vezes quiser no mês", "Atendimento nas 3 unidades", "10% OFF em produtos e tatuagens"], 
                  link: "https://l.appbarber.com.br/a710n5kg",
                  chape: true,
                  highlight: true
                },
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`flex-none w-[320px] md:w-[400px] snap-center p-10 border-4 border-black flex flex-col justify-between relative overflow-hidden ${
                    plan.chape 
                      ? 'bg-chape text-white shadow-[20px_20px_0px_0px_rgba(0,100,55,0.2)]' 
                      : plan.highlight 
                        ? 'bg-black text-white' 
                        : 'bg-white text-black shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)]'
                  }`}
                >
                  {plan.chape && (
                    <div className="absolute -top-4 -right-4 opacity-10 rotate-12">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.svg/500px-Logo_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.svg.png" 
                        alt="Chape Crest" 
                        className="w-40 h-40 object-contain"
                      />
                    </div>
                  )}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`text-xs font-mono font-bold tracking-widest uppercase inline-block px-2 py-1 ${
                        plan.chape ? 'bg-white text-chape' : plan.highlight ? 'bg-brand text-black' : 'bg-black text-white'
                      }`}>
                        {plan.tag}
                      </div>
                      {plan.chape && (
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.svg/500px-Logo_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.svg.png" 
                          alt="Chape" 
                          className="w-10 h-10 object-contain"
                        />
                      )}
                    </div>
                    <h3 className="text-4xl mb-2 leading-none">{plan.name}</h3>
                    <p className={`mb-6 text-sm opacity-80 ${plan.chape || plan.highlight ? 'text-white/70' : 'text-black/70'}`}>
                      {plan.desc}
                    </p>
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-sm font-bold">R$</span>
                      <span className="text-7xl font-display">{plan.price}</span>
                      <span className="text-sm font-bold uppercase">/mês</span>
                    </div>
                    <ul className="space-y-3 mb-10 text-sm">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 font-medium">
                          <Check size={18} className={`shrink-0 mt-0.5 ${plan.chape ? 'text-white' : plan.highlight ? 'text-brand' : 'text-black'}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-10 block py-4 text-center font-bold uppercase tracking-widest border-2 transition-all hover:scale-105 active:scale-95 ${
                      plan.chape 
                        ? 'bg-white text-chape border-white' 
                        : plan.highlight 
                          ? 'bg-brand text-black border-brand' 
                          : 'bg-black text-white border-black'
                    }`}
                  >
                    EXPERIÊNCIA DE CAMPEÃO
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-32 bg-charcoal border-y-4 border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-7xl md:text-9xl text-center lg:text-left">SERVIÇOS.</h2>
            <p className="text-brand font-mono text-center lg:text-left mt-4 uppercase tracking-[0.5em]">The Full Menu</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 border-2 border-white/10 hover:border-brand transition-all group relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon size={100} />
                </div>
                <service.icon className="text-brand mb-6 w-8 h-8" />
                <h3 className="text-2xl tracking-tight">{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tattoo Section */}
      <section id="tattoo" className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <span className="text-brand font-mono uppercase tracking-[0.5em] text-sm mb-4 block">Exclusive Space</span>
              <h2 className="text-7xl md:text-9xl mb-10">TATTOO & <br /> PIERCING.</h2>
              <p className="text-xl text-white/70 font-light leading-relaxed mb-12">
                Um espaço exclusivo dentro da nossa unidade Centro. Arte na pele com a mesma excelência e cuidado que você já conhece.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { name: "Tainara", role: "Body Piercer", img: equipeTai },
                  { name: "Bruna", role: "Body Piercer", img: equipeBruna },
                  { name: "Thiago", role: "Tattoo Artist", img: equipeThiago },
                ].map((artist, idx) => (
                  <div key={idx} className="group">
                    <div className="aspect-square overflow-hidden border-2 border-white/10 group-hover:border-brand transition-colors mb-4">
                      <img
                        src={artist.img}
                        alt={artist.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="text-xl font-display">{artist.name}</h4>
                    <p className="text-brand font-mono text-[10px] uppercase tracking-widest">{artist.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-32 px-6 bg-charcoal border-y-4 border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-8xl mb-4">GALERIA.</h2>
            <p className="text-brand font-mono uppercase tracking-widest">Nossos Trabalhos</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              galeria1,
              galeria2,
              galeria3,
              galeria4,
              galeria5,
              galeria6,
              galeria7,
              galeria8,
            ].map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden border-2 border-white/10"
              >
                <img
                  src={img}
                  alt={`Corte ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-32 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-7xl md:text-9xl mb-4">SCUDERIA.</h2>
            <p className="text-brand font-mono text-lg uppercase tracking-[0.2em]">Os melhores mecânicos para o seu chassi</p>
          </div>

          <div className="space-y-32">
            {[
              {
                unit: "Box Centro",
                barbers: [
                  { name: "John", role: "Chefe dos Box", img: centroJohn },
                  { name: "Vitinho", role: "Pit Crew", img: centroVitinho },
                  { name: "Douglas", role: "Mecânico Geral", img: centroDouglas },
                  { name: "Julio", role: "Engenheiro de Pista", img: centroJulio },
                  { name: "Thiago", role: "Especialista em Ajustes", img: centroThiago },
                ]
              },
              {
                unit: "Box Avenida",
                barbers: [
                  { name: "Hernaldo", role: "Chefe dos Box", img: avenidaHernaldo },
                  { name: "Nasser", role: "Chefe dos Box", img: avenidaNasser },
                ]
              },
              {
                unit: "Box Efapi",
                barbers: [
                  { name: "Eduardo", role: "Chefe dos Box", img: efipiEduardo },
                  { name: "Tiago", role: "Mecânico Geral", img: efipiTiago },
                  { name: "Kaique", role: "Pit Crew", img: efipiKaique },
                  { name: "Carlos", role: "Especialista em Aerodinâmica", img: efipiCarlos },
                  { name: "Cadu", role: "Pit Crew", img: efipiCadu },
                ]
              }
            ].map((group, gIdx) => (
              <div key={gIdx} className="space-y-12">
                <div className="flex items-center gap-6">
                  <h3 className="text-4xl md:text-6xl text-brand italic">{group.unit}</h3>
                  <div className="h-2 bg-white flex-grow" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {group.barbers.map((barber, bIdx) => (
                    <motion.div
                      key={bIdx}
                      whileHover={{ y: -10 }}
                      className="relative group"
                    >
                      <div className="aspect-[3/4] overflow-hidden border-4 border-white group-hover:border-brand transition-colors">
                        <img
                          src={barber.img}
                          alt={barber.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="mt-4">
                        <h4 className="text-xl font-display">{barber.name}</h4>
                        <p className="font-mono text-brand text-[10px] uppercase tracking-widest">{barber.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Units & Hours Section */}
      <section id="unidades" className="py-32 px-6 bg-brand text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl md:text-9xl mb-20 text-black">LOCATIONS.</h2>

          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              {[
                { 
                  name: "Centro", 
                  addr: "Av. Fernando Machado, 1470D", 
                  ig: "@ownbarberclub_",
                  map: "https://maps.app.goo.gl/DChXP4NxeVaPL7Te7"
                },
                { 
                  name: "Avenida", 
                  addr: "Av. Getúlio Vargas, 267S", 
                  ig: "@ownbarberclub.av",
                  map: "https://maps.app.goo.gl/2mchh7m9XaJPagfc6"
                },
                { 
                  name: "Efapi", 
                  addr: "R. Maravilha, 50 - Sala 4", 
                  ig: "@ownbarberclub_efapi",
                  map: "https://maps.app.goo.gl/SRiJ51zfiJUnY7W59"
                },
              ].map((unit, idx) => (
                <div key={idx} className="border-b-4 border-black pb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-4xl font-display mb-2 uppercase italic tracking-tighter">{unit.name}</h4>
                      <p className="text-xl font-medium mb-1">{unit.addr}</p>
                      <p className="text-sm uppercase tracking-[0.3em] opacity-60 mb-6">Chapecó - SC</p>
                      
                      <a 
                        href={unit.map}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-black text-white px-8 py-3 font-display text-xl uppercase italic tracking-tighter border-2 border-black hover:bg-white hover:text-black transition-all relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                      >
                        <MapPin size={20} className="group-hover:animate-bounce" />
                        Como Chegar
                        <ChevronRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </a>
                    </div>
                    <div className="flex items-center gap-2 font-mono font-bold text-sm shrink-0 bg-black text-white px-3 py-1 mt-2">
                      <Instagram size={16} />
                      {unit.ig}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-black text-white p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-5xl mb-10 text-brand">HOURS.</h3>
                <div className="space-y-6 text-2xl font-display">
                  <div className="flex justify-between border-b border-white/20 pb-4">
                    <span>SEG - SEX</span>
                    <span className="text-brand">09:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SÁBADO</span>
                    <span className="text-brand">09:00 - 18:00</span>
                  </div>
                </div>
              </div>
              <div className="mt-20 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-xl">
                  <Phone className="text-brand" />
                  <span className="font-mono">(49) 98911-7337</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-black text-white overflow-hidden border-y-8 border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-6xl md:text-9xl mb-4 text-white">VOZ DOS CAMPEÕES.</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#FBBC05" color="#FBBC05" />
              ))}
            </div>
            <p className="text-xl font-mono uppercase tracking-[0.3em] font-bold text-white/60">
              Avaliação 5.0 no Google
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Carlos Eduardo",
                text: "O melhor plano de assinatura que já tive. Corto toda semana, o atendimento é elite e o ambiente é diferenciado. Nota 10!",
                initials: "CE"
              },
              {
                name: "Marcos Vinicius",
                text: "O ambiente ficou sensacional. Sou sócio Chape e as vantagens são reais. Barbeiros de alto nível.",
                initials: "MV"
              },
              {
                name: "Ricardo Silva",
                text: "Experiência de campeão mesmo. Cerveja gelada, resenha boa e o corte sempre na régua. Recomendo pra todo mundo.",
                initials: "RS"
              },
              {
                name: "Felipe Souza",
                text: "A praticidade do app e a qualidade do serviço são imbatíveis em Chapecó. O Own Barber Club é outro nível.",
                initials: "FS"
              }
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border-4 border-white/10 bg-black flex flex-col justify-between hover:border-brand transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 mb-6 text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={40} className="text-white/5 absolute -mt-4 -ml-4" />
                  <p className="relative z-10 text-lg font-medium italic mb-8">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t-2 border-white/5 pt-6">
                  <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl font-display italic">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight leading-none text-lg text-white">{review.name}</h4>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-white/40">Cliente Verificado</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a 
              href="https://www.google.com/search?q=OWN+BARBER+CLUB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 border-4 border-white font-display text-2xl uppercase italic tracking-tighter hover:bg-brand hover:border-brand transition-colors cursor-pointer"
            >
              <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <span className="text-white font-black text-xs not-italic">G</span>
              </span>
              Ver todas as avaliações no Google
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 text-center border-t-4 border-white pb-32 md:pb-20">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Own Barber Club" className="w-16 h-16 object-contain brightness-0 invert" />
            <span className="font-display text-4xl tracking-tighter">OWN <span className="text-brand">BARBER</span> CLUB</span>
          </div>
          <p className="text-white/40 font-mono text-sm uppercase tracking-[0.5em]">
            © 2026 Own Barber Club // No Bullshit Just Style
          </p>
        </div>
      </footer>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4 items-end">
        {/* Instagram Menu */}
        <AnimatePresence>
          {isIgOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="flex flex-col gap-2 mb-2 bg-black/80 backdrop-blur-xl p-3 border border-white/10 rounded-2xl shadow-2xl"
            >
              {[
                { name: "Centro", url: "https://www.instagram.com/ownbarberclub_/" },
                { name: "Avenida", url: "https://www.instagram.com/ownbarberclub.av/" },
                { name: "Efapi", url: "https://www.instagram.com/ownbarberclub_efapi/" },
              ].map((unit) => (
                <a
                  key={unit.name}
                  href={unit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 hover:bg-brand hover:text-black rounded-lg transition-colors font-bold text-xs uppercase tracking-widest whitespace-nowrap"
                >
                  {unit.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsIgOpen(!isIgOpen)}
          whileHover={{ scale: 1.1, rotate: isIgOpen ? -90 : 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all border-2 border-white/20 ${isIgOpen ? 'bg-white text-black' : 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]'}`}
        >
          {isIgOpen ? <X size={28} /> : <Instagram size={28} className="text-white" />}
        </motion.button>
        
        <motion.a
          href="https://wa.me/5549989117337"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border-2 border-white/20"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
