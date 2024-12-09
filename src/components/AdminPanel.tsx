import React, { useState } from 'react';
import { Trash2, Lock, Phone, MessageCircle } from 'lucide-react';
import { WaitlistItem } from '../types/waitlist';
import { createWhatsAppLink } from '../utils/whatsapp';

interface AdminPanelProps {
  queue: WaitlistItem[];
  onRemoveFromQueue: (id: number) => void;
}

export function AdminPanel({ queue, onRemoveFromQueue }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setPassword('');
    }
  };

  const handleWhatsAppClick = (phone: string, name: string) => {
    const message = `Olá ${name}, sua vez está chegando no Nei Barbershop!`;
    const whatsappLink = createWhatsAppLink(phone, message);
    window.open(whatsappLink, '_blank');
  };

  if (!isAuthenticated) {
    return (
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl font-semibold text-amber-900">Admin Access</h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha de acesso"
            className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-amber-900">Admin Panel</h2>
        <button
          onClick={() => setIsAuthenticated(false)}
          className="text-sm text-amber-600 hover:text-amber-700"
        >
          Logout
        </button>
      </div>
      <div className="space-y-3">
        {queue.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="space-y-1">
              <p className="font-medium text-gray-900">{item.name}</p>
              <div className="flex items-center gap-1 text-gray-600">
                <Phone className="w-4 h-4" />
                <p className="text-sm">{item.phone}</p>
              </div>
              <p className="text-sm text-gray-500">
                Waiting time: ~{Math.round(item.estimatedTime / 60)} min
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleWhatsAppClick(item.phone, item.name)}
                className="p-2 text-green-500 hover:bg-green-50 rounded-full transition-colors"
                title="Send WhatsApp message"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button
                onClick={() => onRemoveFromQueue(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                title="Remove from queue"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
