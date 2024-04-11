import React from 'react';

interface Card {
  id: number; 
  name: string;
  email: string;
}

const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="bg-blue-500 rounded-lg p-2 mb-2 hover:bg-blue-700">
      <div className="text-sm text-gray-100">ID: {card.id}</div>
      <div className="text-lg font-semibold text-white">{card.name}</div>
      <div className="text-md text-gray-100">{card.email}</div>
    </div>
  );
};

export default CardComponent;