"use client"

import { BackgroundBeams } from "@/components/ui/background-beams"

function page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-48">
      <h1 className="font-black text:4xl md:text-6xl lg:text-9xl">Login</h1>
      <input className="p-4 mt-8" type="text"placeholder="Your Email" />
      <input className="p-4 mt-4" type="password" placeholder="Your Password"/>

      </div>
    <BackgroundBeams/>
    </div>
    
  )
}

export default page