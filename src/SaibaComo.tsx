import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Play } from "lucide-react";

interface SaibaComoProps {
  onBack: () => void;
  trackEvent?: (eventName: string, params?: Record<string, any>) => void;
}

export default function SaibaComo({ onBack, trackEvent }: SaibaComoProps) {
  React.useEffect(() => {
    if (trackEvent) trackEvent("view_saiba_como");
  }, [trackEvent]);

  return (
    <div className="min-h-screen bg-black text-white font-sans pt-24 pb-32 selection:bg-brand selection:text-black">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb / Botão Voltar */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 text-xs uppercase font-mono tracking-widest text-white/50 hover:text-brand transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
          </button>
        </div>

        {/* Cabeçalho */}
        <div className="text-center md:text-left mb-12 relative overflow-hidden bg-gradient-to-r from-zinc-950 to-black p-8 md:p-12 border-4 border-white/10 shadow-[20px_20px_0px_0px_rgba(225,6,0,0.1)]">
          <span className="inline-block px-3 py-1 bg-brand text-black font-mono text-xs tracking-widest uppercase mb-4 font-bold">
            Promoção Ativa
          </span>
          <h1 className="text-4xl md:text-6xl leading-none font-black uppercase tracking-tighter mb-4">
            SAIBA <span className="text-brand">COMO.</span>
          </h1>
          <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">
            Nossa equipe de marketing está finalizando o vídeo com o regulamento detalhado. Enquanto isso, você já pode fazer o download do aplicativo abaixo para acompanhar seus pontos e resgatar prêmios!
          </p>
        </div>

        {/* Placeholder do Vídeo */}
        <div 
          className="mb-12 border-4 border-white/10 bg-zinc-950/80 backdrop-blur-md p-12 shadow-[20px_20px_0px_0px_rgba(255,255,255,0.03)] hover:border-brand/40 transition-colors relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-zinc-900 border-2 border-brand/50 text-brand rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(225,6,0,0.2)] animate-pulse">
              <Play size={36} className="fill-brand/20 ml-1 text-brand" />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Vídeo Explicativo Em Breve</h3>
              <p className="text-sm font-light text-white/50 max-w-md mx-auto">
                Estamos finalizando os últimos detalhes da produção do vídeo para apresentar todas as vantagens do nosso clube de benefícios.
              </p>
            </div>
          </div>
        </div>

        {/* Seção de Download do App (Disponível imediatamente) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center bg-zinc-950 border-2 border-white/10 p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-black px-4 py-1 font-mono text-xs uppercase tracking-wider font-bold">
            Baixe o App
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 mt-2">
            ENTRE PARA O CLUBE HOJE MESMO
          </h2>
          <p className="text-sm md:text-base font-light text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
            Com o aplicativo **Clube da Own**, você acompanha seu saldo de pontos e seu nível na campanha de fidelidade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Apple App Store Button */}
            <motion.a
              href="https://apps.apple.com/br/app/clube-da-own/id6768436801"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => trackEvent?.("download_app_ios")}
              className="flex items-center gap-4 bg-black border-2 border-white/20 hover:border-brand px-6 py-3 w-64 rounded-xl text-left transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(225,6,0,0.15)]"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.52-.64.74-1.2 1.88-1.05 3 .11.02.22.03.33.03.9 0 2.05-.59 2.67-1.49z"/>
              </svg>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-white/50 leading-none">Disponível na</p>
                <p className="text-lg font-bold font-sans tracking-tight leading-normal">App Store</p>
              </div>
            </motion.a>

            {/* Google Play Store Button */}
            <motion.a
              href="https://play.google.com/store/apps/details?id=ownbarber.fidelidade&hl=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => trackEvent?.("download_app_android")}
              className="flex items-center gap-4 bg-black border-2 border-white/20 hover:border-brand px-6 py-3 w-64 rounded-xl text-left transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(225,6,0,0.15)]"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.814L13.782 12l-10.173 10.186c-.347-.327-.557-.795-.557-1.341V3.155c0-.546.21-.137.557-.137zm15.14 8.788l-3.329-1.921L12.062 12l3.358 3.319 3.329-1.921c.974-.562.974-1.48 0-2.042zM4.686 1.155l12.133 7.006L13.782 12 4.686 1.155zM13.782 12l3.037 3.839-12.133 7.006L13.782 12z"/>
              </svg>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-white/50 leading-none">Disponível no</p>
                <p className="text-lg font-bold font-sans tracking-tight leading-normal">Google Play</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
