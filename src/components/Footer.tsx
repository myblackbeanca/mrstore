import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">MINY</h3>
            <p className="text-gray-400">Revolutionizing record store experiences</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://twitter.com/minyvinyl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com/minyvinyl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://facebook.com/minyvinyl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MINY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}