import React from 'react';
import { Scissors } from 'lucide-react';

export function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 opacity-50 transform -skew-y-6 -translate-y-12 z-0" />
      <div className="relative z-10 text-center space-y-6 py-8 md:py-12">
        <div className="inline-flex items-center justify-center p-4 bg-amber-200 rounded-full transform transition-transform hover:scale-105 duration-300">
          <Scissors className="w-12 h-12 text-amber-800" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 tracking-tight">
          Nei Barbershop
        </h1>
        <p className="text-lg md:text-xl text-amber-700 max-w-2xl mx-auto px-4">
          Entre na lista de espera e saiba qual a sua vez
        </p>
      </div>
    </header>
  );
}
