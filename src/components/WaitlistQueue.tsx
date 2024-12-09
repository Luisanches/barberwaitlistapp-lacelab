import React from 'react';
import { User } from 'lucide-react';
import { WaitlistItem } from '../types/waitlist';

export function WaitlistQueue({ queue }: { queue: WaitlistItem[] }) {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-amber-900">Lista de espera Atual:</h2>
      <div className="space-y-3">
        {queue.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="bg-amber-100 p-2 rounded-full">
              <User className="w-5 h-5 text-amber-700" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">Posição: #{index + 1}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-amber-600 font-medium">
                ~{Math.round(item.estimatedTime / 60)} Min de espera
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}