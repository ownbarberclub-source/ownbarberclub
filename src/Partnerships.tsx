import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Search, Check, Scissors, Phone, Building2, ChevronRight, Calendar, Sparkles, Share2 } from "lucide-react";
import serAuroraLogo from "./assets/ser-aurora.png";

interface PartnerPlan {
  name: string;
  price: string;
  desc: string;
  tag: string;
  features: string[];
  link: string;
  highlight?: boolean;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  longDescription?: string;
  badge: string;
  theme: {
    bg: string;
    text: string;
    accent: string;
    border: string;
    cardBg?: string;
    cardText?: string;
    cardBorder?: string;
    cardShadow?: string;
    checkColor?: string;
    btnStyle?: string;
    highlightCardBg?: string;
    highlightCardText?: string;
    highlightCardBorder?: string;
    highlightCardShadow?: string;
    highlightBtnStyle?: string;
    highlightCheckColor?: string;
  };
  plans: PartnerPlan[];
}

const PARTNERS: Partner[] = [
  {
    id: "chapecoense",
    name: "Chapecoense",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.svg/500px-Logo_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.svg.png",
    badge: "Parceiro Oficial",
    description: "Descontos e planos de assinatura exclusivos para sócio-torcedor adimplente da Chape.",
    longDescription: "O estilo que entra em campo! Temos o orgulho de ser a barbearia oficial da Chapecoense. Se você é sócio do Verdão do Oeste, tem acesso a condições exclusivas nos planos de assinatura ilimitados para manter o visual sempre de campeão.",
    theme: {
      bg: "bg-chape",
      text: "text-white",
      accent: "text-white",
      border: "border-white/20",
      cardBg: "bg-chape",
      cardText: "text-white",
      cardBorder: "border-black/20",
      cardShadow: "shadow-[20px_20px_0px_0px_rgba(0,100,55,0.2)]",
      checkColor: "text-white",
      btnStyle: "bg-white text-chape border-white hover:bg-black hover:text-white hover:border-black",
      highlightCardBg: "bg-chape",
      highlightCardText: "text-white",
      highlightCardBorder: "border-white",
      highlightCardShadow: "shadow-[20px_20px_0px_0px_rgba(0,100,55,0.3)]",
      highlightCheckColor: "text-white",
      highlightBtnStyle: "bg-white text-chape border-white hover:bg-black hover:text-white hover:border-black"
    },
    plans: [
      {
        name: "Chape Corte",
        price: "97",
        desc: "Sócio Chape tem vantagem exclusiva.",
        tag: "SÓCIO CHAPE",
        features: [
          "Uso ilimitado de segunda a quinta-feira",
          "Utilize quantas vezes quiser no mês",
          "Atendimento nas 3 unidades",
          "10% de desconto em produtos",
          "Acesso ao clube de fidelidade OWN Club"
        ],
        link: "https://l.appbarber.com.br/imfl6wp9"
      },
      {
        name: "Chape Barba",
        price: "134",
        desc: "Sócio Chape tem vantagem exclusiva.",
        tag: "SÓCIO CHAPE",
        features: [
          "Uso ilimitado de segunda a quinta-feira",
          "Utilize quantas vezes quiser no mês",
          "Atendimento nas 3 unidades",
          "10% de desconto em produtos",
          "Acesso ao clube de fidelidade OWN Club"
        ],
        link: "https://l.appbarber.com.br/5gukxsxs"
      },
      {
        name: "Chape Combo",
        price: "197",
        desc: "Sócio Chape tem vantagem exclusiva.",
        tag: "SÓCIO CHAPE",
        features: [
          "Uso ilimitado de segunda a quinta-feira",
          "Utilize quantas vezes quiser no mês",
          "Atendimento nas 3 unidades",
          "10% de desconto em produtos",
          "Acesso ao clube de fidelidade OWN Club"
        ],
        link: "https://l.appbarber.com.br/ew81tyzf",
        highlight: true
      }
    ]
  },
  {
    id: "ser-aurora",
    name: "SER Aurora",
    logo: serAuroraLogo,
    badge: "Parceiro Oficial",
    description: "Descontos e planos de assinatura exclusivos para colaboradores associados à SER Aurora.",
    longDescription: "Benefício corporativo especial para os colaboradores associados à SER Aurora. Tenha acesso a assinaturas ilimitadas de cabelo, barba ou combo para estar sempre na régua com condições exclusivas nas 3 unidades.",
    theme: {
      bg: "bg-[#F39C01]",
      text: "text-black",
      accent: "text-black",
      border: "border-black/10",
      cardBg: "bg-[#F39C01]",
      cardText: "text-black",
      cardBorder: "border-black/20",
      cardShadow: "shadow-[20px_20px_0px_0px_rgba(243,156,1,0.2)]",
      checkColor: "text-[#C71918]",
      btnStyle: "bg-black text-white border-black hover:bg-white hover:text-black hover:border-black",
      highlightCardBg: "bg-black",
      highlightCardText: "text-[#F39C01]",
      highlightCardBorder: "border-[#F39C01]",
      highlightCardShadow: "shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]",
      highlightCheckColor: "text-[#F39C01]",
      highlightBtnStyle: "bg-[#F39C01] text-black border-[#F39C01] hover:bg-white hover:text-black hover:border-white"
    },
    plans: [
      {
        name: "Aurora Corte",
        price: "97",
        desc: "Associado SER Aurora tem vantagem exclusiva.",
        tag: "ASSOCIADO",
        features: [
          "Uso ilimitado de segunda a quinta-feira",
          "Utilize quantas vezes quiser no mês",
          "Atendimento nas 3 unidades",
          "10% de desconto em produtos",
          "Acesso ao clube de fidelidade OWN Club"
        ],
        link: "https://l.appbarber.com.br/qd70wbme"
      },
      {
        name: "Aurora Barba",
        price: "134",
        desc: "Associado SER Aurora tem vantagem exclusiva.",
        tag: "ASSOCIADO",
        features: [
          "Uso ilimitado de segunda a quinta-feira",
          "Utilize quantas vezes quiser no mês",
          "Atendimento nas 3 unidades",
          "10% de desconto em produtos",
          "Acesso ao clube de fidelidade OWN Club"
        ],
        link: "https://l.appbarber.com.br/l9sxvjal"
      },
      {
        name: "Aurora Combo",
        price: "197",
        desc: "Associado SER Aurora tem vantagem exclusiva.",
        tag: "ASSOCIADO",
        features: [
          "Uso ilimitado de segunda a quinta-feira",
          "Utilize quantas vezes quiser no mês",
          "Atendimento nas 3 unidades",
          "10% de desconto em produtos",
          "Acesso ao clube de fidelidade OWN Club"
        ],
        link: "https://l.appbarber.com.br/k1ceatak",
        highlight: true
      }
    ]
  }
];

interface PartnershipsProps {
  onBack: () => void;
  trackEvent?: (eventName: string, params?: Record<string, any>) => void;
}

export default function Partnerships({ onBack, trackEvent }: PartnershipsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);
  const [shareFeedback, setShareFeedback] = useState(false);

  const handleShare = () => {
    if (!selectedPartner) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}#/parcerias/${selectedPartner.id}`;

    if (navigator.share) {
      navigator.share({
        title: `Planos Exclusivos - ${selectedPartner.name}`,
        text: `Confira os planos de assinatura ilimitados do Own Barber Club exclusivos para parceiros ${selectedPartner.name}!`,
        url: shareUrl,
      })
      .then(() => {
        if (trackEvent) trackEvent("share_partner_success", { partner_id: selectedPartner.id });
      })
      .catch((err) => console.log(err));
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setShareFeedback(true);
        setTimeout(() => setShareFeedback(false), 2000);
        if (trackEvent) trackEvent("share_partner_copied", { partner_id: selectedPartner.id });
      });
    }
  };

  // Monitorar hash para links diretos como #/parcerias/chapecoense
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const parts = hash.split("/");
      if (parts.length > 2) {
        const id = parts[2];
        const partnerExists = PARTNERS.some(p => p.id === id);
        if (partnerExists) {
          setSelectedPartnerId(id);
        }
      } else {
        setSelectedPartnerId(null);
      }
    };

    handleHashChange(); // Executar no load
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const selectPartner = (id: string | null) => {
    if (id) {
      window.location.hash = `#/parcerias/${id}`;
      if (trackEvent) trackEvent("view_partner", { partner_id: id });
    } else {
      window.location.hash = `#/parcerias`;
    }
    setSelectedPartnerId(id);
  };

  const filteredPartners = useMemo(() => {
    return PARTNERS.filter(partner =>
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const selectedPartner = useMemo(() => {
    return PARTNERS.find(p => p.id === selectedPartnerId) || null;
  }, [selectedPartnerId]);

  return (
    <div className="min-h-screen bg-black text-white font-sans pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb / Back Button */}
        <div className="mb-12">
          <button
            onClick={() => {
              if (selectedPartner) {
                selectPartner(null);
              } else {
                onBack();
              }
            }}
            className="group flex items-center gap-3 text-xs uppercase font-mono tracking-widest text-white/50 hover:text-brand transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {selectedPartner ? "Ver todos os parceiros" : "Voltar ao Início"}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!selectedPartner ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="text-center md:text-left mb-16">
                <h1 className="text-6xl md:text-8xl leading-none mb-6">
                  CLUB <span className="text-brand">PARTNERS.</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/70 max-w-2xl leading-relaxed">
                  Benefícios e planos de assinatura exclusivos para empresas, clubes e associações parceiras do Own Barber Club.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-xl mb-16">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-white/40">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Digite o nome da sua empresa ou clube..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-charcoal border-2 border-white/10 focus:border-brand py-5 pl-14 pr-6 rounded-none font-sans text-lg text-white placeholder-white/40 focus:outline-none transition-colors"
                />
              </div>

              {/* Partners Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-20">
                {filteredPartners.map((partner) => (
                  <motion.div
                    key={partner.id}
                    whileHover={{ y: -6 }}
                    onClick={() => selectPartner(partner.id)}
                    className="p-8 md:p-10 border-4 border-white/10 hover:border-brand bg-charcoal cursor-pointer flex flex-col justify-between group transition-all"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-20 h-20 bg-white p-2 flex items-center justify-center rounded-none shadow-lg">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <span className="px-3 py-1 bg-brand text-black text-xs font-mono font-bold uppercase tracking-wider">
                          {partner.badge}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl mb-4 italic uppercase font-black tracking-tight group-hover:text-brand transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-white/60 font-light leading-relaxed text-sm md:text-base">
                        {partner.description}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center gap-3 text-brand font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                      Ver planos exclusivos
                      <ChevronRight size={16} />
                    </div>
                  </motion.div>
                ))}

                {/* Card CTA: Quer ser parceiro? */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-8 md:p-10 border-4 border-dashed border-white/20 bg-transparent flex flex-col justify-between"
                >
                  <div>
                    <div className="w-20 h-20 border-2 border-dashed border-white/20 flex items-center justify-center text-white/30 mb-8">
                      <Building2 size={32} />
                    </div>
                    <h3 className="text-3xl md:text-4xl mb-4 italic uppercase font-black tracking-tight text-white/60">
                      Sua Empresa Aqui
                    </h3>
                    <p className="text-white/40 font-light leading-relaxed text-sm md:text-base">
                      Quer oferecer desconto em folha, planos de assinatura ilimitados ou vantagens exclusivas na barbearia para os seus colaboradores? Vamos conversar.
                    </p>
                  </div>

                  <div className="mt-10">
                    <a
                      href="https://wa.me/5549989117337?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20parcerias%20corporativas%20com%20o%20Own%20Barber%20Club."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-brand hover:text-black transition-colors"
                    >
                      <Phone size={14} />
                      Seja Parceiro
                    </a>
                  </div>
                </motion.div>
              </div>

              {filteredPartners.length === 0 && (
                <div className="text-center py-20 border-2 border-dashed border-white/10">
                  <p className="text-white/50 font-mono text-sm uppercase tracking-widest">
                    Nenhuma empresa encontrada com "{searchQuery}"
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Partner Showcase Panel */}
              <div className={`p-8 md:p-16 border-4 border-white/10 ${selectedPartner.theme.bg} ${selectedPartner.theme.text} mb-12 relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]`}>
                
                {/* Background watermarked logo */}
                <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none select-none">
                  <img
                    src={selectedPartner.logo}
                    alt=""
                    className="w-[400px] h-[400px] object-contain"
                  />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-between">
                  <div className="w-40 h-40 bg-white p-4 flex items-center justify-center shrink-0 shadow-2xl">
                    <img
                      src={selectedPartner.logo}
                      alt={selectedPartner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-black text-white font-mono text-xs tracking-widest uppercase mb-4">
                      {selectedPartner.badge}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
                      {selectedPartner.name}
                    </h2>
                    <p className="text-lg md:text-xl font-light text-white/95 max-w-3xl leading-relaxed">
                      {selectedPartner.longDescription || selectedPartner.description}
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start">
                      <button
                        onClick={handleShare}
                        className="group inline-flex items-center gap-2 bg-black text-white hover:bg-white hover:text-black px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors cursor-pointer border border-white/10"
                      >
                        <Share2 size={14} className="group-hover:scale-110 transition-transform" />
                        {shareFeedback ? "Link Copiado!" : "Compartilhar Link"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plans Section */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <span className="text-brand font-mono text-xs uppercase tracking-[0.3em]">Benefício Exclusivo</span>
                  <h3 className="text-4xl md:text-5xl mt-2 italic font-black uppercase tracking-tight">ASSINATURAS ILIMITADAS.</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {selectedPartner.plans.map((plan, idx) => {
                    const theme = selectedPartner.theme;
                    
                    const cardBg = plan.highlight 
                      ? (theme.highlightCardBg || "bg-brand") 
                      : (theme.cardBg || "bg-charcoal");
                    
                    const cardText = plan.highlight 
                      ? (theme.highlightCardText || "text-black") 
                      : (theme.cardText || "text-white");
                    
                    const cardBorder = plan.highlight 
                      ? (theme.highlightCardBorder || "border-brand") 
                      : (theme.cardBorder || "border-white/10");
                    
                    const cardShadow = plan.highlight 
                      ? (theme.highlightCardShadow || "shadow-[15px_15px_0px_0px_rgba(225,6,0,0.2)]") 
                      : (theme.cardShadow || "shadow-[15px_15px_0px_0px_rgba(255,255,255,0.05)]");
                    
                    const checkColor = plan.highlight 
                      ? (theme.highlightCheckColor || "text-black") 
                      : (theme.checkColor || "text-brand");
                    
                    const btnStyle = plan.highlight 
                      ? (theme.highlightBtnStyle || "bg-black text-brand border-black hover:bg-white hover:text-black hover:border-white") 
                      : (theme.btnStyle || "bg-brand text-black border-brand hover:bg-white hover:border-white hover:text-black");

                    const tagStyle = plan.highlight
                      ? "bg-black text-brand"
                      : "bg-white/10 text-white";

                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className={`p-10 border-4 flex flex-col justify-between relative overflow-hidden ${cardBg} ${cardText} ${cardBorder} ${cardShadow}`}
                      >
                        {/* Watermark Logo */}
                        <div className="absolute -top-4 -right-4 opacity-10 rotate-12 pointer-events-none select-none">
                          <img 
                            src={selectedPartner.logo} 
                            alt="" 
                            className="w-40 h-40 object-contain"
                          />
                        </div>

                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-4">
                            <span className={`text-xs font-mono font-bold tracking-widest uppercase inline-block px-2 py-1 ${tagStyle}`}>
                              {plan.tag}
                            </span>
                          </div>
                          <h4 className="text-3xl font-black italic uppercase tracking-tight mb-2 leading-none">{plan.name}</h4>
                          <p className={`mb-6 text-sm ${plan.highlight ? 'opacity-85 font-medium' : 'opacity-70'}`}>
                            {plan.desc}
                          </p>
                          <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-sm font-bold">R$</span>
                            <span className="text-6xl font-display font-black leading-none">{plan.price}</span>
                            <span className="text-xs font-bold uppercase">/mês</span>
                          </div>
                          <ul className="space-y-3 mb-10 text-sm">
                            {plan.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-3 font-medium">
                                <Check size={18} className={`shrink-0 mt-0.5 ${checkColor}`} />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href={plan.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            if (trackEvent) {
                              trackEvent("click_partner_plan", {
                                partner_id: selectedPartner.id,
                                plan_name: plan.name,
                                price: plan.price
                              });
                            }
                          }}
                          className={`relative z-10 block py-4 text-center font-black uppercase tracking-widest border-2 transition-all hover:scale-105 active:scale-95 ${btnStyle}`}
                        >
                          EXPERIÊNCIA DE CAMPEÃO
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Validation Note */}
              <div className="p-8 border-2 border-white/10 bg-charcoal/40 max-w-3xl mx-auto text-center">
                <Sparkles className="text-brand mx-auto mb-4" size={28} />
                <h4 className="text-lg font-bold uppercase tracking-wider mb-2">Como validar seu benefício?</h4>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  Para usufruir das tarifas corporativas, basta assinar o plano desejado acima e apresentar seu documento de comprovação (crachá da empresa, contracheque ou carteirinha de sócio no aplicativo oficial da Chapecoense) em seu primeiro atendimento na barbearia.
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
