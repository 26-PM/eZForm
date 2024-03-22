import React from 'react'
import Link from 'next/link'
import { Button } from "./ui/moving-border";

function Featured() {
  return (
    <div className='py-12 bg-gray-900'>
         <div> 
            <div className="text-center">
            <h2 className="text-xl font-extrabold text-white sm:text-5xl">Featured</h2>
            <p></p>
            </div>
         </div>
         <div className='mt-10 '>
            2
        </div>
         <div className='mt-20 text-center'>
         <Link href={"/"}>
        <Button
        borderRadius="1.75rem"
        className="font-bold bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        View All
      </Button>
        </Link>
         </div>
    </div>
  )
}

export default Featured