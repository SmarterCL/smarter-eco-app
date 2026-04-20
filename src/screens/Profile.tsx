import { motion } from 'motion/react';
import { Settings, User, CreditCard, History, Shield, LogOut, ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

export default function Profile() {
  const menuItems = [
    { icon: User, label: 'Información Personal' },
    { icon: History, label: 'Historial de Canjes' },
    { icon: CreditCard, label: 'Medios de Pago' },
    { icon: Shield, label: 'Privacidad y Seguridad' },
    { icon: Settings, label: 'Configuración' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-28 px-6 max-w-2xl mx-auto pb-44"
    >
      <div className="bg-white rounded-[3rem] p-10 soft-shadow border border-zinc-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-soft rounded-bl-[5rem] -z-10 group-hover:scale-110 transition-transform" />
        
        <div className="flex flex-col items-center mb-12">
          <div className="relative mb-8">
            <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden p-1.5 bg-brand-secondary border border-zinc-100">
               <img 
                className="w-full h-full object-cover rounded-[2.2rem]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiwizDhhdXhLS5_yqhbw3SxyjT0uoD_WW9QiatUEuoI359ev-6g0mZXb73DteACHB7gCWIQIuY3GQ6plo0jQEg1uLWEzFXF547ga4x76vhG-HZtTYZu-d_YUz4n6Mf9QyrTFRFY-f44XykNyzLVFWnabGjFM7il7znFQkCMOmG-WLVQ8EIp_DEjcs3DCGmmuSDj-hpNyug-u6DXgA73W-le3taTzOq_wLCKObOSECL3N4CfYmHgTWxezC47m-EBN9THNYENRVmidNb" 
                alt="Perfil"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-brand-primary text-white rounded-2xl flex items-center justify-center border-4 border-white shadow-xl hover:scale-110 cursor-pointer transition-transform">
               <Settings size={20} />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-ink tracking-tight mb-2 font-brand">Carlos Rodriguez</h2>
            <div className="inline-flex items-center gap-2 bg-brand-soft text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-primary/10">
               Master Node <span className="text-brand-primary">🌱</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest px-4 mb-4">Ajustes de Cuenta</div>
          {menuItems.map((item, idx) => (
            <button 
              key={idx}
              className="w-full flex items-center justify-between p-5 rounded-3xl bg-zinc-50/50 hover:bg-brand-soft transition-all group border border-transparent hover:border-brand-primary/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-brand-primary soft-shadow transition-colors">
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-brand-ink text-sm">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-zinc-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-transform" />
            </button>
          ))}

          <div className="pt-6">
            <button className="w-full flex items-center justify-center gap-3 p-5 rounded-3xl text-brand-accent bg-brand-accent/5 font-bold hover:bg-brand-accent/10 transition-all active:scale-95 group">
              <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
         <p className="text-zinc-400 text-[9px] font-bold uppercase tracking-[0.4em]">SmarterOS Profile Module • Chile V2.4</p>
      </div>
    </motion.div>
  );
}
