import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Play } from "lucide-react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
  }
}

interface SaibaComoProps {
  onBack: () => void;
  trackEvent?: (eventName: string, params?: Record<string, any>) => void;
}

export default function SaibaComo({ onBack, trackEvent }: SaibaComoProps) {
  const [linksReleased, setLinksReleased] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  React.useEffect(() => {
    if (trackEvent) trackEvent("view_saiba_como");
  }, [trackEvent]);

  useEffect(() => {
    // Carrega o script da API do YouTube se não existir
    let ytScript = document.getElementById("youtube-iframe-api");
    if (!ytScript) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const startTracking = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        const player = playerRef.current;
        if (player && typeof player.getCurrentTime === "function" && typeof player.getDuration === "function") {
          const currentTime = player.getCurrentTime();
          const duration = player.getDuration();
          if (duration > 0) {
            const percentage = (currentTime / duration) * 100;
            // Libera os links a partir de 50% de reprodução do vídeo (segredo técnico)
            if (percentage >= 50) {
              setLinksReleased(true);
              stopTracking();
            }
          }
        }
      }, 500);
    };

    const stopTracking = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const createPlayer = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        height: "100%",
        width: "100%",
        videoId: "ajEZUaLjm9g",
        playerVars: {
          autoplay: 1,
          controls: 0,         // Oculta a barra de reprodução e controles nativos (bloqueia a timeline)
          disablekb: 1,        // Desativa atalhos de teclado para avançar
          fs: 0,               // Desativa botão de tela cheia nativo
          modestbranding: 1,   // Minimiza logo do YouTube
          rel: 0,              // Não mostra vídeos recomendados
          showinfo: 0,
          iv_load_policy: 3
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            // YT.PlayerState: 1 = PLAYING, 2 = PAUSED, 0 = ENDED (Finalizado)
            if (event.data === 1) {
              setIsPlaying(true);
              startTracking();
            } else {
              setIsPlaying(false);
              stopTracking();
              if (event.data === 0) {
                setLinksReleased(true);
              }
            }
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    }

    return () => {
      stopTracking();
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

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
            Assista ao vídeo explicativo abaixo para entender detalhadamente o regulamento da nossa promoção. Os links para download já estão disponíveis logo abaixo.
          </p>
        </div>

        {/* Container do Vídeo */}
        <div 
          className="mb-6 border-4 border-white/10 bg-zinc-950 p-2 shadow-[20px_20px_0px_0px_rgba(255,255,255,0.03)] hover:border-brand/40 transition-colors relative group"
        >
          {/* Overlay transparente para bloquear cliques e atalhos na iframe, mas permitir play/pause customizado */}
          <div className="absolute inset-0 z-10 cursor-pointer" onClick={togglePlay} />

          {/* Botão Central de Play (quando pausado) */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="absolute inset-0 m-auto w-20 h-20 bg-brand text-black rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(225,6,0,0.6)] hover:scale-110 transition-transform z-20 cursor-pointer"
              >
                <Play size={36} className="fill-black ml-1" />
              </motion.button>
            )}
          </AnimatePresence>

          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <div id="yt-player" className="absolute inset-0 w-full h-full border-0"></div>
          </div>
        </div>

        {/* Aviso de que precisa assistir até o final */}
        <AnimatePresence>
          {!linksReleased && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center text-xs md:text-sm font-mono text-white/50 mb-12 flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Assista ao vídeo explicativo até o final para liberar os links de download.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Seção de Download do App (Aparece somente após atingir 50% de reprodução) */}
        <AnimatePresence>
          {linksReleased && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center bg-zinc-950 border-2 border-white/10 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-black px-4 py-1 font-mono text-xs uppercase tracking-wider font-bold animate-pulse">
                Links Liberados!
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
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
