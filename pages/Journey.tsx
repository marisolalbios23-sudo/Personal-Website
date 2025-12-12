import React from 'react';
import Layout from '../components/Layout';
import { Map, Compass } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <Layout 
      title="My Journey" 
      subtitle="Every great story has a beginning, and some chapters are yet to be written."
    >
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-8 bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-16">
        <div className="relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-emerald-50 w-24 h-24 rounded-full flex items-center justify-center text-emerald-600">
                <Compass size={48} strokeWidth={1.5} />
            </div>
        </div>
        
        <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">The Unwritten Path</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
                Currently, there are no specific journeys recorded here. This section represents the open road ahead—a blank canvas waiting for new adventures, travels, and life-changing experiences to be painted upon it.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-600 font-medium">
                <Map size={16} />
                <span>Status: Loading Adventures...</span>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Journey;