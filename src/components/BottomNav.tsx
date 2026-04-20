import { Home, QrCode, ShoppingBag, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const items = [
    { id: 'home' as Screen, icon: Home, label: 'Inicio' },
    { id: 'scanner' as Screen, icon: QrCode, label: 'Escanear' },
    { id: 'store' as Screen, icon: ShoppingBag, label: 'Tienda' },
    { id: 'profile' as Screen, icon: User, label: 'Perfil' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
      <div className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-2 flex justify-between items-center soft-shadow border border-white/50">
        {items.map(({ id, icon: Icon, label }) => {
          const isActive = currentScreen === id;
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`relative flex-1 flex flex-col items-center justify-center py-4 rounded-[2rem] transition-all duration-300 ${
                isActive ? 'text-white' : 'text-brand-ink/40 hover:text-brand-ink'
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brand-primary rounded-[2rem] -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] font-bold mt-1 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
