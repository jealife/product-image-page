import React from 'react'
import Pricing from '../components/ui/Pricing'

export default function page() {
  return (
   <main className="relative w-full pt-0 md:pt-12 bg-[#082E37] overflow-hidden">
  
  <div className="pointer-events-none absolute md:z-0 top-0 left-0 -translate-x-1/2 w-[200px] h-300px]  md:w-[1200px] md:h-[600px]
    md:bg-[radial-gradient(ellipse_at_top,_#01C38D,_transparent_50%)] bg-[radial-gradient(ellipse_at_top,_#01C38D,_transparent_50%)]
    blur-3xl opacity-90">
  </div>
  {/* Glow effect top */}

  <Pricing />

  <div className="pointer-events-none absolute md:z-0 -z-1 top-0 right-0 translate-x-1/2 w-[1200px] h-[600px]
    bg-[radial-gradient(ellipse_at_top,_#01C38D,_transparent_50%)]
    blur-3xl opacity-90">
  </div>
</main>

  )
}
