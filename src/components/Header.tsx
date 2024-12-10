import React from 'react';
import { Scissors } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center space-y-4">
      <div className="inline-block p-4 bg-amber-200 rounded-full">
        <Scissors className="w-12 h-12 text-amber-800" />
      </div>
      <h1 className="text-4xl font-bold text-amber-900">
        Nei Barbershop
      </h1>
      <p className="text-lg text-amber-700">
        Entre na lista de espera e saiba qual a sua vez
      </p>
    </div>
  );
}