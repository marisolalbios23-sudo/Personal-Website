import React from 'react';
import Layout from '../components/Layout';
import { Rocket, Sparkles } from 'lucide-react';

const Future: React.FC = () => {
  return (
    <Layout 
      title="Future Plans" 
      subtitle="Dreaming of tomorrow, living for today."
    >
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-8 bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-16">
        <div className="relative">
            <div className="absolute inset-0 bg-violet-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-violet-50 w-24 h-24 rounded-full flex items-center justify-center text-violet-600">
                <Rocket size={48} strokeWidth={1.5} />
            </div>
        </div>
        
        <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Under Construction</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
                The future is a vast mystery. While there are no concrete plans listed here at this moment, the possibilities are infinite. I am keeping my options open and my eyes on the horizon.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-600 font-medium">
                <Sparkles size={16} />
                <span>Status: Dreaming Big</span>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Future;