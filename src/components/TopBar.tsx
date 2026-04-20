import { Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md flex justify-between items-center px-6 h-20 border-b border-brand-secondary">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-inner bg-brand-secondary">
          <img 
            alt="Perfil de usuario" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiwizDhhdXhLS5_yqhbw3SxyjT0uoD_WW9QiatUEuoI359ev-6g0mZXb73DteACHB7gCWIQIuY3GQ6plo0jQEg1uLWEzFXF547ga4x76vhG-HZtTYZu-d_YUz4n6Mf9QyrTFRFY-f44XykNyzLVFWnabGjFM7il7znFQkCMOmG-WLVQ8EIp_DEjcs3DCGmmuSDj-hpNyug-u6DXgA73W-le3taTzOq_wLCKObOSECL3N4CfYmHgTWxezC47m-EBN9THNYENRVmidNb"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <span className="font-brand font-bold text-brand-ink tracking-tight text-xl">SmarterOS</span>
        </div>
      </div>
      <button className="w-11 h-11 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-ink hover:bg-brand-soft transition-all active:scale-95">
        <Bell size={20} />
      </button>
    </header>
  );
}
