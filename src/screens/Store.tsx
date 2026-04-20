import { Search, ArrowRight, Plus, Leaf, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Screen, PRODUCTS, Product } from '../types';

interface StoreProps {
  onNavigate: (screen: Screen) => void;
  onAddToCart: (product: Product) => void;
  cartCount: number;
  total: number;
}

export default function Store({ onNavigate, onAddToCart, cartCount, total }: StoreProps) {
  const [activeCategory, setActiveCategory] = useState('Todo');
  const categories = ['Todo', 'Vegetales', 'Frutas', 'Lácteos y Huevos', 'Pan Artesanal'];

  const filteredProducts = activeCategory === 'Todo' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-28 px-6 max-w-7xl mx-auto pb-44"
    >
      {/* Hero Section */}
      <section className="bg-brand-ink rounded-[3rem] p-10 mb-12 relative overflow-hidden text-white">
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
               <Leaf size={18} />
             </div>
             <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">Cosecha Local • 2024</span>
          </div>
          <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-[1.1] font-brand">Fresco, Real,<br /><span className="text-brand-primary italic font-medium">Sustentable.</span></h2>
          
          <div className="relative group max-w-sm">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 focus-within:text-brand-primary transition-colors" size={20} />
            <input 
              className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 outline-none focus:bg-white/20 focus:ring-4 focus:ring-brand-primary/10 transition-all font-medium text-white placeholder:text-zinc-500"
              placeholder="¿Qué buscas hoy?" 
              type="text"
            />
          </div>
        </div>
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl opacity-50" />
      </section>

      {/* Category Filters */}
      <section className="mb-10 overflow-x-auto no-scrollbar flex items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 shrink-0">Categorías /</span>
        <div className="flex gap-3 pb-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20' 
                  : 'bg-white text-zinc-400 hover:text-brand-primary hover:bg-brand-soft border border-zinc-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAdd={() => onAddToCart(product)} 
          />
        ))}

        {/* Club Card */}
        <div className="bg-brand-primary p-10 rounded-[2.5rem] text-white soft-shadow relative overflow-hidden flex flex-col justify-between group">
          <div className="relative z-10">
            <h4 className="text-3xl font-bold tracking-tight mb-4 leading-tight font-brand">Únete al<br />Gremio Bio</h4>
            <p className="text-white/80 font-medium text-sm">Ahorra 15% en pedidos semanales y apoya al campo Chileno.</p>
          </div>
          <button className="relative z-10 mt-8 w-full py-4 bg-white text-brand-primary rounded-2xl font-bold text-sm hover:bg-brand-soft transition-colors active:scale-95 shadow-xl">
            Saber más
          </button>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:scale-110 transition-transform" />
        </div>
      </section>

      {/* Cart Summary */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-28 left-6 right-6 z-40 max-w-lg mx-auto"
          >
            <div 
              onClick={() => onNavigate('checkout')}
              className="bg-brand-ink text-white p-4 rounded-[2.5rem] shadow-2xl flex items-center justify-between group cursor-pointer border border-white/5 pr-2"
            >
              <div className="flex items-center gap-4 pl-4 font-sans">
                <div className="relative">
                  <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-lg shadow-brand-primary/20">
                    <ShoppingCart size={24} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent text-white flex items-center justify-center text-[10px] font-bold rounded-full border-2 border-brand-ink">
                    {cartCount}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Tu Carrito</p>
                  <p className="font-bold text-2xl tracking-tighter">${total.toLocaleString()}</p>
                </div>
              </div>
              <div className="bg-brand-primary hover:bg-emerald-400 text-white p-5 rounded-[1.8rem] transition-colors">
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const ProductCard = ({ product, onAdd }: { product: Product; onAdd: () => void; key?: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-[2.5rem] p-4 soft-shadow relative flex flex-col border border-zinc-100"
    >
      {product.isOrganic && (
        <div className="absolute top-8 right-8 bg-brand-primary text-white text-[9px] px-3 py-1 font-bold uppercase tracking-widest rounded-full z-10 shadow-lg shadow-brand-primary/20">
          Orgánico
        </div>
      )}
      <div className="h-64 rounded-[2rem] overflow-hidden mb-5 bg-zinc-50 flex items-center justify-center">
        <img 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={product.image}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 flex flex-col px-2">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-bold text-xl text-brand-ink tracking-tight leading-tight">{product.name}</h4>
        </div>
        <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-4">{product.unit || 'Origen Local'}</p>
        <p className="text-zinc-400 text-xs font-medium leading-relaxed mb-6 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-50">
          <span className="font-bold text-2xl tracking-tight text-brand-ink">${product.price.toLocaleString()}</span>
          <button 
            onClick={onAdd}
            className="w-12 h-12 bg-brand-soft text-brand-primary rounded-2xl flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all active:scale-90"
          >
            <Plus size={24} strokeWidth={3} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
