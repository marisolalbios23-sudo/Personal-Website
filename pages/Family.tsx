import React from 'react';
import Layout from '../components/Layout';
import { FamilyMember } from '../types';

const Family: React.FC = () => {
  const familyMembers: FamilyMember[] = [
    {
      name: 'Tarciana',
      relation: 'Mother',
      description: 'The heart of our home. Her guidance and love have shaped us all.',
      imageUrl: 'https://picsum.photos/seed/mom/400/400'
    },
    {
      name: 'Micheal',
      relation: 'Father',
      description: 'Our pillar of strength. He taught us the value of hard work and integrity.',
      imageUrl: 'https://picsum.photos/seed/dad/400/400'
    },
    {
      name: 'Michelle',
      relation: 'Sister',
      description: 'My supportive sister who is always there with a listening ear.',
      imageUrl: 'https://picsum.photos/seed/sis1/400/400'
    },
    {
      name: 'Maricar',
      relation: 'Sister',
      description: 'Always bringing joy and laughter to our family gatherings.',
      imageUrl: 'https://picsum.photos/seed/sis2/400/400'
    },
    {
      name: 'Marco',
      relation: 'Brother',
      description: 'My brother and partner in crime growing up. A true friend.',
      imageUrl: 'https://picsum.photos/seed/bro/400/400'
    }
  ];

  return (
    <Layout 
      title="My Family" 
      subtitle="The people who know me best and love me most."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {familyMembers.map((member, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center"
          >
            <div className="w-full h-48 overflow-hidden bg-slate-100">
               <img 
                 src={member.imageUrl} 
                 alt={member.name} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-sm border border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">{member.relation}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-2 mb-3">{member.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Family;