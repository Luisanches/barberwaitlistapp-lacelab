import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';

interface WaitlistFormProps {
  onJoinWaitlist: (name: string, phone: string) => void;
}

export function WaitlistForm({ onJoinWaitlist }: WaitlistFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      onJoinWaitlist(name, phone);
      setName('');
      setPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-100 rounded-lg">
          <UserPlus className="w-6 h-6 text-amber-700" />
        </div>
        <h2 className="text-xl font-semibold text-amber-900">
          Entrar na Lista
        </h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome completo
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            className="input"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
            className="input"
            required
            pattern="[\+]?[\d\s-]+"
            title="Por favor, digite um número de telefone válido"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary w-full">
        Entrar na lista
      </button>
    </form>
  );
}