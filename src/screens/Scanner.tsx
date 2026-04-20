import { ArrowLeft, Zap, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Screen } from '../types';

interface ScannerProps {
  onNavigate: (screen: Screen) => void;
}

export default function Scanner({ onNavigate }: ScannerProps) {
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScanned(true);
    }, 3000); // Simulate scanning
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-brand-ink overflow-hidden flex flex-col items-center justify-center">
      {/* Success Modal */}
      <AnimatePresence>
        {scanned && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-brand-ink/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-[3rem] w-full max-w-sm p-10 relative overflow-hidden soft-shadow"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-soft rounded-bl-[4rem] -z-10" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-brand-primary text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-brand-primary/20">
                  <CheckCircle2 size={48} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary mb-4">Beneficio Desbloqueado</div>
                <h2 className="text-5xl font-bold tracking-tighter text-brand-ink mb-2 uppercase leading-[0.85] font-brand">
                  15%<br />DCTO
                </h2>
                <p className="text-zinc-400 mt-6 text-[10px] font-bold uppercase tracking-widest">Validado con éxito • SmarterOS</p>
                
                <div className="w-full space-y-4 mt-12">
                  <button 
                    onClick={() => onNavigate('store')}
                    className="w-full bg-brand-primary text-white py-5 rounded-3xl font-bold text-sm hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-brand-primary/20"
                  >
                    CANJEAR AHORA
                  </button>
                  <button 
                    onClick={() => onNavigate('home')}
                    className="w-full bg-brand-secondary text-brand-ink py-5 rounded-3xl font-bold text-sm hover:bg-zinc-200 transition-all active:scale-95"
                  >
                    VOLVER AL INICIO
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <header className="absolute top-0 left-0 w-full z-10 px-8 h-24 flex justify-between items-center text-white bg-gradient-to-b from-brand-ink/80 to-transparent">
        <button 
          onClick={() => onNavigate('home')}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-center">
          <div className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-60 mb-1">Entrada Óptica</div>
          <h1 className="text-base font-bold tracking-widest uppercase leading-none font-brand">ESCÁNER / V4</h1>
        </div>
        <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
          <Zap size={20} />
        </button>
      </header>

      {/* Main Viewfinder */}
      <div className="relative w-80 h-80 mb-12">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-brand-primary rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-brand-primary rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-brand-primary rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-brand-primary rounded-br-3xl" />

        <div className="absolute inset-6 border border-white/10 rounded-3xl overflow-hidden bg-white/[0.03]">
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1 bg-brand-primary shadow-[0_0_20px_rgba(16,185,129,0.8)]"
          />
        </div>
        
        {/* Cam background simulation */}
        <div 
          className="absolute inset-0 -z-10 opacity-30 brightness-75 rounded-[3rem] overflow-hidden"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-eHObtIGwAXv-ch_eAtKqFulsfWZ1frXnEohDm83nygS4tu8dR8B4v27KpniHoS_h5up4NmZ4pNs7MtI0uO96cSY3W3zFKj2JP4TSLlnZmP4oR-reKNLHBwtGMWsgwtt0kbFBsvSyL0LStbw9y84FHmMiWNyByGvG40Y7ZJytOTcW3Fyyl1FCoN0GKB7rPR1LgCYLUlx1Qnw_pzxRyhXlCHYXluRTAg3S4-ezhV_WrTV2AVBjfntr09Lj8IhR5eRU25QIRn3--BMB')`, backgroundSize: 'cover' }}
        />
      </div>

      <div className="text-center max-w-xs space-y-6">
        <div className="bg-white/5 backdrop-blur-md px-8 py-5 rounded-3xl border border-white/10">
           <p className="text-xs font-bold uppercase tracking-widest text-white leading-relaxed">Alinea el código dentro del marco para escanear</p>
        </div>
        <p className="text-[8px] uppercase tracking-[0.4em] text-white/40 font-bold">Estado: Reconocimiento Activo</p>
      </div>
    </div>
  );
}
