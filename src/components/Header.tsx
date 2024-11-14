import React from 'react';
import { Disc3 } from 'lucide-react';

interface HeaderProps {
  onContact: () => void;
}

export default function Header({ onContact }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Disc3 className="w-8 h-8 text-indigo-400" />
            <span className="text-xl font-bold">MINY</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
          </nav>
          <button 
            onClick={onContact}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
          >
            Bring MINY to My Store
          </button>
        </div>
      </div>
    </header>
  );
}