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
          placeholder="Rechercher ..."
          className="flex-1 px-4 py-3 border bg-gray-100 border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 text-lg"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gray-900 text-gray-50 font-semibold rounded-r-lg  transition-colors text-lg"
        >
          <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m18,10c0-4.41-3.59-8-8-8S2,5.59,2,10s3.59,8,8,8c1.85,0,3.54-.63,4.9-1.69l5.1,5.1,1.41-1.41-5.1-5.1c1.05-1.36,1.69-3.05,1.69-4.9Zm-14,0c0-3.31,2.69-6,6-6s6,2.69,6,6-2.69,6-6,6-6-2.69-6-6Z"></path></svg>
        </button>
      </div>
    </form>
  );
}
