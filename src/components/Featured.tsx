'use client';
import React from 'react';
import Link from 'next/link';
// import { Button } from "./ui/moving-border";
import { BackgroundGradient } from './ui/background-gradient';

function Featured() {
  return (
    <BackgroundGradient className='bg-white dark:bg-zinc-950'><div className='p-8'>
      <div>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">Features</h2>
          <p></p>
        </div>
      </div>
      <div className='m-10 flex text-center justify-center gap-x-96 gap-y-14 flex-wrap bg-black p-10 rounded-3xl'>
        <BackgroundGradient><div className="flex justify-center p-8">Easy</div></BackgroundGradient>
        <BackgroundGradient><div className="flex justify-center p-8">User-friendly</div></BackgroundGradient>
        <BackgroundGradient><div className="flex justify-center p-8">Simple</div></BackgroundGradient>
        <BackgroundGradient><div className="flex justify-center p-8">Seamless</div></BackgroundGradient>
        <BackgroundGradient><div className="flex justify-center p-8">Hassle-free</div></BackgroundGradient>
        <BackgroundGradient><div className="flex justify-center p-8">Streamlined</div></BackgroundGradient>
        {/* <BackgroundGradient><div className="flex justify-center p-8">Convenient</div></BackgroundGradient>
        <BackgroundGradient><div className="flex justify-center p-8">Smooth</div></BackgroundGradient> */}
      </div>
      {/* <div className='mt-20 text-center'>
        <Link href={"/"}>
          <Button
            borderRadius="1.75rem"
            className="font-bold bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View All
          </Button>
        </Link>
      </div> */}
    </div></BackgroundGradient>
  )
}

export default Featured