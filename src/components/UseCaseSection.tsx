import React from 'react';

interface UseCaseSectionProps {
  title: string;
  description: string;
  howItWorks: string;
  impact: string;
  imageUrl: string;
  isReversed?: boolean;
}

export default function UseCaseSection({ 
  title, 
  description, 
  howItWorks, 
  impact, 
  imageUrl, 
  isReversed = false 
}: UseCaseSectionProps) {
  return (
    <div className="py-16 border-b border-white/10">
      <div className={`container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:grid-flow-dense' : ''}`}>
        <div className={isReversed ? 'md:col-start-2' : ''}>
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How It Works</h3>
              <p className="text-gray-300">{howItWorks}</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Impact</h3>
              <p className="text-gray-300">{impact}</p>
            </div>
          </div>
        </div>
        <div className={`relative ${isReversed ? 'md:col-start-1' : ''}`}>
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
          />
          <div className="absolute inset-0 bg-indigo-600/20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}