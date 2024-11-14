import React from 'react';

interface ContactCTAProps {
  onContact: () => void;
}

export default function ContactCTA({ onContact }: ContactCTAProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Record Store?</h2>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Discover how MINY can transform your customer experience and build lasting fan relationships.
      </p>
      <button 
        onClick={onContact}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
      >
        Bring MINY to My Store
      </button>
    </div>
  );
}