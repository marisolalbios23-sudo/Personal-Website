import React from 'react';
import Layout from '../components/Layout';
import { Milestone } from '../types';
import { Calendar, Star } from 'lucide-react';

const About: React.FC = () => {
  const milestones: Milestone[] = [
    {
      date: 'Early Years',
      title: 'First Steps',
      description: 'Taking my first steps was the beginning of my independence. It taught me that falling is just part of learning to walk.'
    },
    {
      date: 'Childhood',
      title: 'School Days',
      description: 'Learning to read opened up new worlds for me. My favorite memories involve storytime and discovering new adventures in books.'
    },
    {
      date: 'Adolescence',
      title: 'Finding My Voice',
      description: 'High school was a time of self-discovery. I learned the importance of friendship, resilience, and staying true to myself.'
    },
    {
      date: 'Present Day',
      title: 'Continuous Growth',
      description: 'Every day is a new milestone. I am constantly learning, evolving, and striving to be a better version of myself.'
    }
  ];

  return (
    <Layout 
      title="All About Myself" 
      subtitle="A collection of moments, memories, and milestones that have shaped who I am today."
    >
      <div className="space-y-12">
        {/* Intro Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
             <img 
                src="https://picsum.photos/400/400?random=1" 
                alt="Profile Placeholder" 
                className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-indigo-50"
             />
             <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Hello, I'm Me!</h2>
                <p className="text-slate-600 leading-relaxed">
                    I am a person who believes in the beauty of simplicity. My journey has been filled with unique experiences that have taught me valuable lessons. 
                    This page is dedicated to the milestones that mark my growth and the memories that I hold dear.
                </p>
             </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm z-10"></div>
                
                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                      <Calendar className="w-4 h-4" />
                      {milestone.date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                         {milestone.title}
                         <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty side for layout balance */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;