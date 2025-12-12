import React from 'react';
import Layout from '../components/Layout';
import { Moon, Cloud, Stars } from 'lucide-react';

const Passion: React.FC = () => {
  return (
    <Layout 
      title="My Passion: Sleep" 
      subtitle="Embracing the art of rest and the rejuvenating power of dreams."
    >
      <div className="space-y-16">
        
        {/* Concept Section */}
        <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-xl text-white py-16 px-8 text-center">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
           <div className="absolute top-10 left-10 text-indigo-300 animate-pulse">
             <Stars className="w-8 h-8" />
           </div>
           <div className="absolute bottom-10 right-10 text-purple-300 animate-pulse delay-700">
             <Moon className="w-12 h-12" />
           </div>

           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-3xl font-serif font-bold mb-6 text-indigo-100">Why Sleep?</h2>
             <p className="text-lg text-slate-300 leading-relaxed italic">
               "Sleep is the golden chain that ties health and our bodies together." <br/>— Thomas Dekker
             </p>
             <div className="mt-8 flex justify-center gap-4">
               <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-200">Restoration</span>
               <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-purple-200">Dreams</span>
               <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-blue-200">Peace</span>
             </div>
           </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-600">
                    <Cloud className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Sanctuary</h3>
                <p className="text-slate-600 leading-relaxed">
                   For me, sleep is not just a biological necessity; it's a sanctuary. It's the time when the noise of the world fades away, and I can truly recharge my mind and body.
                </p>
            </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600">
                    <Moon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Dreaming</h3>
                <p className="text-slate-600 leading-relaxed">
                   I am passionate about the world of dreams. It is a canvas where creativity knows no bounds, and the impossible becomes reality for a few precious hours.
                </p>
            </div>
        </div>
        
        {/* Visual Element */}
        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
             <img 
                src="https://picsum.photos/seed/sleep/1200/600" 
                alt="Peaceful Sleeping Environment" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                 <p className="text-white font-serif text-2xl">Recharging for a better tomorrow.</p>
             </div>
        </div>

      </div>
    </Layout>
  );
};

export default Passion;