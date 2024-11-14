import React from 'react';

interface FeatureSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureSection({ icon, title, description }: FeatureSectionProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition">
      <div className="text-indigo-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}