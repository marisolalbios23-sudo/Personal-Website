import React from 'react';
import { Link } from 'react-router-dom';
import { User, Heart, Users, Map, Rocket, ArrowRight } from 'lucide-react';
import AudioPlayer from '../components/AudioPlayer';

const Home: React.FC = () => {
  const navItems = [
    {
      title: 'About Myself',
      path: '/about',
      description: 'My milestones, memories, and personal growth.',
      icon: User,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'My Passion',
      path: '/passion',
      description: 'Discover what fuels my soul and brings me peace.',
      icon: Heart,
      color: 'bg-rose-500',
      gradient: 'from-rose-500 to-rose-600'
    },
    {
      title: 'My Family',
      path: '/family',
      description: 'The roots that ground me and the people I love.',
      icon: Users,
      color: 'bg-amber-500',
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      title: 'My Journey',
      path: '/journey',
      description: 'The paths I have taken and where I stand today.',
      icon: Map,
      color: 'bg-emerald-500',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Future Plans',
      path: '/future',
      description: 'Dreams, aspirations, and the road ahead.',
      icon: Rocket,
      color: 'bg-violet-500',
      gradient: 'from-violet-500 to-violet-600'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <AudioPlayer />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://picsum.photos/1920/1080?grayscale&blur=2" 
                alt="Background" 
                className="w-full h-full object-cover opacity-30"
            />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-6 tracking-tight animate-fade-in">
            Welcome to My World
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl text-slate-300 font-light italic leading-relaxed mb-8">
              "The only impossible journey is the one you never begin."
            </p>
            <div className="h-px w-24 bg-indigo-500 mx-auto opacity-70"></div>
            <p className="mt-8 text-slate-400">
               Explore the chapters of my life, from my roots to my dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.gradient}`}></div>
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center p-3 rounded-xl ${item.color} bg-opacity-10 text-${item.color.split('-')[1]}-600 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={28} className={`text-${item.color.replace('bg-', '')}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-indigo-600 group-hover:translate-x-2 transition-transform duration-300">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <footer className="py-8 text-center text-slate-400 text-sm">
         <p>Created with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Home;