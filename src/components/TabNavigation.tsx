import React from 'react';

interface TabNavigationProps {
  activeTab: 'queue' | 'admin';
  onTabChange: (tab: 'queue' | 'admin') => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex justify-center gap-4 border-b border-amber-200">
      <button
        className={`px-4 py-2 ${
          activeTab === 'queue'
            ? 'border-b-2 border-amber-600 text-amber-900'
            : 'text-amber-600'
        }`}
        onClick={() => onTabChange('queue')}
      >
        Fila
      </button>
      <button
        className={`px-4 py-2 ${
          activeTab === 'admin'
            ? 'border-b-2 border-amber-600 text-amber-900'
            : 'text-amber-600'
        }`}
        onClick={() => onTabChange('admin')}
      >
        Admin
      </button>
    </div>
  );
}