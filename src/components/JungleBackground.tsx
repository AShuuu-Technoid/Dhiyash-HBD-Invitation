import React from 'react';

const JungleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578167635648-df79e1565908?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-green-600/30" />
    </div>
  );
};

export default JungleBackground;