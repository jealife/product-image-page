import React from 'react';

interface SearchBarProps {
  value: string;
  onInputChange: (v: string) => void;
  onValidate: () => void;
}

export default function SearchBar({ value, onInputChange, onValidate }: SearchBarProps) {
  return (
    <form
      className="w-full flex flex-col items-center mb-8"
      onSubmit={e => { e.preventDefault(); onValidate(); }}
    >
      <div className="w-full md:w-1/2 flex">
        <input
          type="text"
          value={value}
          onChange={e => onInputChange(e.target.value)}
          placeholder="Rechercher par titre ou tag..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}
