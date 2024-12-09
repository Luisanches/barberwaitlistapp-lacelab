import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';
import { Timer } from './components/Timer';
import { WaitlistForm } from './components/WaitlistForm';
import { WaitlistQueue } from './components/WaitlistQueue';
import { AdminPanel } from './components/AdminPanel';
import { WaitlistItem } from './types/waitlist';

function App() {
  const [queue, setQueue] = useState<WaitlistItem[]>([
    {
      id: 1,
      name: 'John Smith',
      phone: '+55 11 98765-4321',
      estimatedTime: 20,
    },
    {
      id: 2,
      name: 'Mike Johnson',
      phone: '+55 11 91234-5678',
      estimatedTime: 1200,
    },
  ]);

  const [activeTab, setActiveTab] = useState<'queue' | 'admin'>('queue');

  // Update estimated times whenever queue changes
  useEffect(() => {
    if (queue.length > 0) {
      const updatedQueue = queue.map((item, index) => ({
        ...item,
        estimatedTime: (index + 1) * 900, // 15 minutes per person
      }));
      setQueue(updatedQueue);
    }
  }, [queue.length]);

  const handleJoinWaitlist = (name: string, phone: string) => {
    const newItem: WaitlistItem = {
      id: Date.now(),
      name,
      phone,
      estimatedTime: (queue.length + 1) * 900, // 15 minutes per person
    };
    setQueue([...queue, newItem]);
  };

  const handleRemoveFromQueue = (id: number) => {
    setQueue((prevQueue) => {
      const newQueue = prevQueue.filter((item) => item.id !== id);
      return newQueue;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
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

          {/* Current Wait Time */}
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold text-amber-900">
              Tempo de espera estimado
            </h2>
            <Timer estimatedTime={queue[0]?.estimatedTime || 0} />
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 border-b border-amber-200">
            <button
              className={`px-4 py-2 ${
                activeTab === 'queue'
                  ? 'border-b-2 border-amber-600 text-amber-900'
                  : 'text-amber-600'
              }`}
              onClick={() => setActiveTab('queue')}
            >
              Fila
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'admin'
                  ? 'border-b-2 border-amber-600 text-amber-900'
                  : 'text-amber-600'
              }`}
              onClick={() => setActiveTab('admin')}
            >
              Admin
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex justify-center">
            {activeTab === 'queue' ? (
              <div className="space-y-8 w-full">
                <WaitlistForm onJoinWaitlist={handleJoinWaitlist} />
                <WaitlistQueue queue={queue} />
              </div>
            ) : (
              <AdminPanel
                queue={queue}
                onRemoveFromQueue={handleRemoveFromQueue}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
