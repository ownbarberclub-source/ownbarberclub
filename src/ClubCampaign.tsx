import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Gift, Award, Star, Zap, Scissors, Crown, Trophy } from "lucide-react";

interface ClubCampaignProps {
  onBack: () => void;
  trackEvent?: (eventName: string, params?: Record<string, any>) => void;
}

export default function ClubCampaign({ onBack, trackEvent }: ClubCampaignProps) {
  React.useEffect(() => {
    if (trackEvent) trackEvent("view_club_campaign");
  }, [trackEvent]);

  const steps = [
    {
      icon: Scissors,
      title: "1. Agende e Compareça",
      desc: "Faça seu agendamento em qualquer uma de nossas 3 unidades (Centro, Avenida ou Efapi) e realize seu serviço de cabelo ou barba."
    },
    {
      icon: Star,
      title: "2. Avalie seu Atendimento",
      desc: "Responda ao nosso rápido formulário de feedback pós-serviço. Cada avaliação sincera garante seus pontos na hora!"
    },
    {
      icon: Zap,
      title: "3. Acumule Pontos (XP)",
      desc: "Quanto mais você frequenta e interage, mais pontos acumula. Acompanhe seu ranking e seu saldo de pontos."
    },
    {
      icon: Trophy,
      title: "4. Resgate Prêmios de Elite",
      desc: "Ao atingir as pontuações necessárias, resgate prêmios exclusivos diretamente com a recepção da sua unidade."
    }
  ];

  const prizes = [
    {
      level: "NÍVEL 01",
      points: "100 pts",
      title: "Kit Styling Own",
      desc: "Pomada Modeladora Premium de alta fixação + Pente de madeira exclusivo Own Barber Club.",
      icon: Gift,
      highlight: false
    },
    {
      level: "NÍVEL 02",
      points: "250 pts",
      title: "Corte + Sobrancelha VIP",
      desc: "Um corte de cabelo na régua com acabamento, design de sobrancelha e uma cerveja artesanal trincando.",
      icon: Award,
      highlight: false
    },
    {
      level: "NÍVEL 03",
      points: "500 pts",
      title: "T-Shirt Scuderia Own",
      desc: "Camiseta oficial de algodão egípcio da nossa Scuderia, de edição limitada e caimento perfeito.",
      icon: Crown,
      highlight: true
    },
    {
      level: "NÍVEL 04",
      points: "1000 pts",
      title: "Mês de Ouro (Free Pass)",
      desc: "1 mês inteiramente grátis da nossa Assinatura Combo Essencial (Cabelo e Barba à vontade) + Kit Barba Premium.",
      icon: Trophy,
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb / Back Button */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 text-xs uppercase font-mono tracking-widest text-white/50 hover:text-brand transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
          </button>
        </div>

        {/* Hero Header */}
        <div className="text-center md:text-left mb-20 relative overflow-hidden bg-gradient-to-r from-zinc-950 to-black p-10 md:p-16 border-4 border-white/10 shadow-[20px_20px_0px_0px_rgba(225,6,0,0.1)]">
          <div className="absolute right-0 bottom-0 opacity-5 translate-x-10 translate-y-10 pointer-events-none select-none">
            <Trophy size={300} className="text-brand" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-brand text-black font-mono text-xs tracking-widest uppercase mb-4 font-bold">
              Nova Campanha de Fidelidade
            </span>
            <h1 className="text-5xl md:text-8xl leading-none font-black uppercase tracking-tighter mb-6">
              OWN <span className="text-brand">CLUB.</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed">
              Chegou o clube de vantagens oficial da barbearia de elite de Chapecó. Aqui, sua lealdade é recompensada com prêmios reais e experiências exclusivas. Cabelo na régua e vantagens garantidas.
            </p>
          </div>
        </div>

        {/* Como Funciona Section */}
        <div className="mb-24">
          <div className="text-center lg:text-left mb-16">
            <span className="text-brand font-mono text-xs uppercase tracking-[0.3em]">Funcionamento</span>
            <h2 className="text-4xl md:text-6xl mt-2 italic font-black uppercase tracking-tight">COMO FUNCIONA?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="p-8 border-2 border-white/10 bg-zinc-950 flex flex-col justify-between min-h-[250px] hover:border-brand/50 transition-colors group">
                <div>
                  <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{step.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premios Section */}
        <div className="mb-24">
          <div className="text-center lg:text-left mb-16">
            <span className="text-brand font-mono text-xs uppercase tracking-[0.3em]">Recompensas</span>
            <h2 className="text-4xl md:text-6xl mt-2 italic font-black uppercase tracking-tight">OS PRÊMIOS DE ELITE.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prizes.map((prize, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-10 border-4 flex flex-col justify-between relative overflow-hidden transition-all ${
                  prize.highlight
                    ? "bg-brand text-black border-brand shadow-[20px_20px_0px_0px_rgba(225,6,0,0.2)]"
                    : "bg-zinc-950 text-white border-white/10 shadow-[20px_20px_0px_0px_rgba(255,255,255,0.03)]"
                }`}
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className={`text-xs font-mono font-bold tracking-widest uppercase inline-block px-2 py-1 ${
                      prize.highlight ? "bg-black text-brand" : "bg-brand text-black"
                    }`}>
                      {prize.level}
                    </span>
                    <span className="text-2xl font-display font-black tracking-tight">{prize.points}</span>
                  </div>
                  <h3 className="text-2xl font-black italic uppercase leading-none mb-3">{prize.title}</h3>
                  <p className={`text-sm leading-relaxed ${prize.highlight ? "text-black/80 font-medium" : "text-white/60 font-light"}`}>
                    {prize.desc}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <prize.icon size={28} className={prize.highlight ? "text-black" : "text-brand"} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Campanha Info / CTA */}
        <div className="p-8 md:p-12 border-2 border-white/10 bg-zinc-950 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Dúvidas sobre o regulamento?</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                A campanha é válida por tempo limitado a partir de 15/06/2026. Os pontos são cumulativos e vinculados ao CPF cadastrado no AppBarber em cada atendimento.
              </p>
            </div>
            <a
              href="https://wa.me/5549989117337?text=Quero%20saber%20mais%20sobre%20o%20Own%20Club!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-black px-8 py-4 font-display font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors shrink-0"
            >
              Falar com Suporte
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
