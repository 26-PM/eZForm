"use client"

import { BackgroundBeams } from "@/components/ui/background-beams"

function page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-48">
      <h1 className="font-black text-9xl">Contact us</h1>
      <p>We are here to help you!</p>
      <input className="p-4 mt-4" type="text"placeholder="Your Email" />
      <input className="p-4 mt-4" type="textbox" placeholder="Your Message"/>

      </div>
    <BackgroundBeams/>
    </div>
    
  )
}

export default page