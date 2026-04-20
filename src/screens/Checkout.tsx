import { ArrowLeft, MapPin, Phone, Info, Lock, CheckCircle2, Ticket } from 'lucide-react';
import { motion } from 'motion/react';
import { Screen, Product } from '../types';

interface CheckoutProps {
  onNavigate: (screen: Screen) => void;
  cart: { product: Product, quantity: number }[];
  subtotal: number;
  discount: number;
  total: number;
}

export default function Checkout({ onNavigate, cart, subtotal, discount, total }: CheckoutProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="pt-28 px-6 max-w-5xl mx-auto pb-44"
    >
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md flex justify-between items-center px-6 h-20 border-b border-brand-secondary">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('store')}
            className="w-10 h-10 bg-brand-secondary text-brand-ink flex items-center justify-center rounded-2xl hover:bg-brand-soft transition-all active:scale-90"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-brand-ink tracking-tight font-brand uppercase">Caja</h1>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-soft rounded-full border border-brand-primary/10">
          <Lock size={14} className="text-brand-primary" />
          <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Seguro</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Delivery & Items */}
        <div className="lg:col-span-7 space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-brand-ink px-2 font-brand">Datos de Despacho</h2>
            <div className="bg-white rounded-[2.5rem] p-8 soft-shadow border border-zinc-100 relative">
              <button className="absolute top-8 right-8 text-brand-primary font-bold text-sm hover:underline">Editar</button>
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-brand-secondary rounded-3xl flex items-center justify-center text-brand-ink shadow-inner">
                  <MapPin size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1 opacity-50">Localización</p>
                  <p className="text-brand-ink font-bold text-xl tracking-tight">Av. Vitacura 2670, Depto 402</p>
                  <p className="text-zinc-500 font-medium text-sm">Las Condes, Región Metropolitana, Chile</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-zinc-100">
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase mb-1">RUT</p>
                  <p className="text-brand-ink font-bold">18.442.339-K</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase mb-1">Teléfono</p>
                  <p className="text-brand-ink font-bold">+56 9 8234 1120</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-brand-ink px-2 font-brand">Tu Carrito</h2>
            <div className="space-y-4">
              {cart.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-[2rem] flex items-center gap-6 transition-all border border-zinc-100 soft-shadow group">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden bg-brand-secondary border border-zinc-50">
                    <img 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                      src={item.product.image} 
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 pr-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-brand-ink tracking-tight text-lg">{item.product.name}</h3>
                      <span className="font-bold text-brand-ink">${(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-zinc-400 font-medium mb-4">{item.product.unit || 'Cosecha Local'}</p>
                    <div className="inline-flex items-center gap-2 bg-brand-soft text-brand-primary font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-brand-primary/10">
                      Cant: {item.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Summary & Payment */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-8">
            <div className="bg-brand-ink text-white rounded-[2.5rem] p-8 soft-shadow relative overflow-hidden group">
               <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Ticket size={24} className="text-brand-primary" />
                  <h2 className="font-bold text-xl tracking-tight font-brand">Eco-Cupón</h2>
                </div>
                <div className="flex gap-3">
                  <input 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 placeholder-zinc-500 text-white outline-none focus:ring-2 focus:ring-brand-primary transition-all font-bold" 
                    placeholder="BIO2024" 
                    type="text"
                    disabled
                  />
                  <button className="bg-brand-primary text-white px-6 py-4 rounded-2xl font-bold active:scale-95 transition-transform shadow-lg shadow-brand-primary/20">
                    Aplicar
                  </button>
                </div>
                <div className="mt-6 flex items-center gap-2 bg-white/10 self-start px-4 py-2 rounded-full border border-white/10">
                   <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">ECOGREEN20 ACTIVADO</span>
                </div>
               </div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 space-y-8 soft-shadow border border-zinc-100">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-zinc-400">
                  <span className="text-sm font-bold uppercase tracking-widest">Subtotal</span>
                  <span className="font-bold tracking-tight text-xl text-brand-ink">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-brand-primary">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold uppercase tracking-widest">Bio Ahorro</span>
                    <span className="text-[10px] bg-brand-soft text-brand-primary px-2 py-0.5 rounded-lg font-bold uppercase tracking-widest">15%</span>
                  </div>
                  <span className="font-bold text-xl tracking-tight">-${discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span className="text-sm font-bold uppercase tracking-widest">Despacho</span>
                  <span className="font-bold text-xs uppercase tracking-widest text-brand-primary italic">Gratis</span>
                </div>
                
                <div className="pt-8 border-t border-zinc-100 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold text-zinc-300 tracking-[0.2em] uppercase mb-1">Total Final</p>
                    <p className="text-5xl font-bold text-brand-ink tracking-tighter leading-none">${total.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-brand-primary tracking-tight">🌱 -2.4kg CO₂</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-brand-ink text-white py-6 rounded-3xl font-bold text-xl tracking-tight shadow-2xl active:scale-[0.98] transition-all hover:bg-zinc-800">
                  Pagar Ahora
                </button>
                <div className="flex flex-col items-center gap-4 opacity-10 pt-4">
                  <p className="text-[9px] font-bold text-brand-ink uppercase tracking-[0.3em]">SmarterOS Secure Gate</p>
                  <div className="flex items-center gap-8 grayscale">
                    <div className="h-4 w-12 bg-brand-ink rounded-full" />
                    <div className="h-4 w-12 bg-brand-ink rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
