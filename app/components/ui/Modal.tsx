import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, className = '' }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] bg-black/40 flex md:items-center md:justify-center">
      <div
        className={`bg-white w-full h-full md:h-auto md:max-w-md md:rounded-2xl p-4 md:p-6 overflow-y-auto ${className}`}
      >
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} aria-label="Fermer le modal">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}
