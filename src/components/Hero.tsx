import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContact: () => void;
}

export default function Hero({ onContact }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1629753453388-5f3ae10370ef?auto=format&fit=crop&w=2560&q=80"
          alt="Record store vinyl collection"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-indigo-900/20 to-gray-900/90" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
            Boost In-Store Sales and<br />Fan Engagement with MINY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Become your city's favorite vinyl destination with exclusive experiences and AI-powered engagement
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onContact}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition flex items-center group"
            >
              Transform My Store with MINY
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onContact}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-semibold transition backdrop-blur-sm"
            >
              Schedule a Demo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition">
              <div className="text-3xl font-bold text-indigo-400 mb-2">25%</div>
              <div className="text-sm text-gray-300">Average Sales Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition">
              <div className="text-3xl font-bold text-indigo-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Higher Return Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition">
              <div className="text-3xl font-bold text-indigo-400 mb-2">2x</div>
              <div className="text-sm text-gray-300">Customer Engagement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}