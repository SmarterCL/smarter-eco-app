import { QrCode, ShoppingBag, Leaf, History, Zap, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-28 px-6 max-w-5xl mx-auto pb-44"
    >
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3">
           <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
           <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest bg-brand-soft px-3 py-1 rounded-full">Panel / En Vivo</span>
        </div>
        <h2 className="text-4xl font-bold text-brand-ink tracking-tight mb-2">Hola, Carlos 👋</h2>
        <p className="text-zinc-500 font-medium">Tu aporte al planeta hoy es excepcional.</p>
      </header>

      {/* Main Stats Bento */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="col-span-2 bg-brand-ink p-8 rounded-[2.5rem] text-white soft-shadow relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Impacto Total</p>
            <h3 className="text-6xl font-bold tracking-tighter mb-4">-42.5<span className="text-2xl ml-1 font-medium italic opacity-70">kgCO₂</span></h3>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm self-start inline-flex px-3 py-1.5 rounded-full text-[10px] font-bold">
               <ArrowUpRight size={14} className="text-brand-primary" /> +2.4kg esta semana
            </div>
          </div>
          <Leaf className="absolute -bottom-8 -right-8 w-40 h-40 text-white/5 rotate-12" />
        </div>
        
        <div className="bg-brand-soft p-6 rounded-[2.5rem] flex flex-col justify-between soft-shadow border border-brand-primary/10">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-4">
            <Zap size={24} />
          </div>
          <div>
            <p className="text-brand-ink font-bold text-2xl tracking-tighter">1.240</p>
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Bio-Puntos</p>
          </div>
        </div>

        <div className="bg-brand-secondary p-6 rounded-[2.5rem] flex flex-col justify-between soft-shadow border border-zinc-200">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-ink mb-4">
            <ShoppingBag size={24} />
          </div>
          <div>
            <p className="text-brand-ink font-bold text-2xl tracking-tighter">18</p>
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Canjes</p>
          </div>
        </div>
      </div>

      {/* Action Centers */}
      <div className="space-y-4 mb-12">
        <div className="flex items-center justify-between px-2 mb-2">
           <h3 className="font-bold text-brand-ink text-xl">Acciones Rápidas</h3>
           <button className="text-brand-primary font-bold text-sm">Ver todas</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={() => onNavigate('scanner')}
            className="group relative bg-white p-8 rounded-[2.5rem] border border-zinc-100 soft-shadow flex items-center justify-between hover:border-brand-primary/20 transition-all text-left"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-brand-primary text-white rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <QrCode size={30} />
              </div>
              <div>
                <h4 className="font-bold text-brand-ink text-xl tracking-tight">Escanear Cupón</h4>
                <p className="text-zinc-400 text-sm font-medium">Suma puntos con tus compras</p>
              </div>
            </div>
            <ChevronRight className="text-zinc-300 group-hover:translate-x-2 transition-transform" />
          </button>

          <button 
            onClick={() => onNavigate('store')}
            className="group relative bg-white p-8 rounded-[2.5rem] border border-zinc-100 soft-shadow flex items-center justify-between hover:border-brand-primary/20 transition-all text-left"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-brand-ink text-white rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShoppingBag size={30} />
              </div>
              <div>
                <h4 className="font-bold text-brand-ink text-xl tracking-tight">Tienda Bio</h4>
                <p className="text-zinc-400 text-sm font-medium">Usa tus puntos en beneficios</p>
              </div>
            </div>
            <ChevronRight className="text-zinc-300 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Activity Logs */}
      <section className="bg-white rounded-[2.5rem] p-8 soft-shadow border border-zinc-100">
        <div className="flex items-center justify-between mb-8">
           <h3 className="font-bold text-brand-ink text-xl tracking-tight font-brand">Actividad Reciente</h3>
           <History size={20} className="text-zinc-300" />
        </div>
        <div className="space-y-6">
          {[
            { label: 'Canje de Cupón', desc: 'Líder Express • 15% Dcto', time: 'Hace 2 horas', val: '+150 pts', icon: QrCode, color: 'text-brand-primary', bg: 'bg-brand-soft' },
            { label: 'Compra Sustentable', desc: 'Tienda SmarterOS • 3 items', time: 'Ayer', val: '-850 pts', icon: ShoppingBag, color: 'text-brand-accent', bg: 'bg-amber-50' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between group cursor-pointer hover:bg-zinc-50 p-2 rounded-2xl transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-brand-ink leading-none mb-1">{item.label}</h5>
                  <p className="text-zinc-500 text-xs font-medium">{item.desc}</p>
                </div>
              </div>
              <div className="text-right">
                 <p className={`font-bold text-sm ${item.val.startsWith('+') ? 'text-brand-primary' : 'text-brand-ink'}`}>{item.val}</p>
                 <p className="text-[10px] text-zinc-400 font-bold uppercase">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
