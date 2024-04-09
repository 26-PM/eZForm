import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    {
      id: 2,
      name: "PM",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

function Founders() {
  return (
    <div className='relative h-[10rem]'>
        <WavyBackground>
        <h2 className='text-2xl md:text-4xl lg:text-7xl'>Meet Our Devs</h2>
        <p>Unlock the minds behind the code.</p>
        <div className='flex items-center justify-center'>
            <AnimatedTooltip items={people}/>
        </div>
        </WavyBackground></div>
  )
}

export default Founders