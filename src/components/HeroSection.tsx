 import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

  function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0 "
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center mt-20">
         <h1 className="mt-20 md:mt-0 text-9xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">eZ Form</h1>
         <h3 className="mt-20 md:mt-0 text-1xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">By formFusion</h3>
         <p className="mt-20 font-medium">Worrying about filling form?</p>
         <p className="font-semibold">Not again!</p>
         <p className="font-bold">We are here to help you!</p>
         <p className="font-extrabold">We'll take care of the forms for you</p>
      </div>
      <div className="mt-20 font-black ">
        <Link href={"/courses"}>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore More
      </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection