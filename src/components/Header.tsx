import * as React from 'react';
import { Link } from '@tanstack/react-router';
import { Waves } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-blue-100/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center shadow-md">
              <Waves className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              TranquilWave
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}