import React from 'react';
import { Users } from 'lucide-react';
import { WaitlistItem } from '../types/waitlist';

export function WaitlistQueue({ queue }: { queue: WaitlistItem[] }) {
  if (queue.length === 0) {
    return (
      <div className="card p-8 text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <Users className="w-12 h-12 text-amber-300" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">
          Lista de espera vazia
        </h3>
        <p className="text-gray-500 mt-2">
          Seja o primeiro a entrar na fila!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-amber-900">
          Lista de espera atual
        </h2>
        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
          {queue.length} {queue.length === 1 ? 'pessoa' : 'pessoas'}
        </span>
      </div>

      <div className="space-y-3">
        {queue.map((item, index) => (
          <div
            key={item.id}
            className="card p-4 md:p-6 transform transition-all duration-200 hover:scale-[1.02] cursor-default"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold text-amber-700">
                  #{index + 1}
                </span>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-gray-900 truncate">
                  {item.name}
                </h3>
                <p className="text-sm text-amber-600">
                  Tempo estimado: ~{Math.round(item.estimatedTime / 60)} min
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
