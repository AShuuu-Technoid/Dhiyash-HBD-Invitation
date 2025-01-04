import React from 'react';
import { Baby, Smile, Heart, Cake } from 'lucide-react';

const Timeline: React.FC = () => {
  const milestones = [
    {
      month: '1 month',
      title: 'First Smile',
      icon: Smile,
      description: 'Brightened our world with the sweetest smile',
    },
    {
      month: '4 months',
      title: 'First Laugh',
      icon: Heart,
      description: 'Filled our home with joyous giggles',
    },
    {
      month: '8 months',
      title: 'First Steps',
      icon: Baby,
      description: 'Started exploring the world on two feet',
    },
    {
      month: '12 months',
      title: 'First Birthday',
      icon: Cake,
      description: "It's time to celebrate!",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Dhiyash's Journey</h2>
      <div className="max-w-4xl mx-auto">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="flex items-center mb-8 group hover:transform hover:scale-105 transition-transform"
          >
            <div className="w-1/3 text-right pr-8">
              <h3 className="font-semibold text-xl">{milestone.month}</h3>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                <milestone.icon className="w-6 h-6 text-white" />
              </div>
              <div className="absolute h-full w-0.5 bg-pink-300 top-12 left-6 -z-10" />
            </div>
            <div className="w-2/3 pl-8">
              <h3 className="font-semibold text-xl">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;