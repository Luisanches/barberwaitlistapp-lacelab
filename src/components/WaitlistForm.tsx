import React, { useState } from 'react';
import { Scissors } from 'lucide-react';

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
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Seu telefone"
          className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
          pattern="[\+]?[\d\s-]+"
          title="Please enter a valid phone number"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
      >
        Entre na lista
      </button>
    </form>
  );
}