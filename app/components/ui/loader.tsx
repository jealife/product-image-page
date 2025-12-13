'use client'

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-12 h-12">
        {/* Spinner animation */}
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-black rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
