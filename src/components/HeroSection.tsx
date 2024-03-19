import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
  function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0 "
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
         <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">eZ Form</h1>
         <h3 className="mt-20 md:mt-0 text-1xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">By formFusion</h3>
         <p>Lorem ipsum do lor, sit amet consectetur adipisicing elit. Inventore tempora esse ipsa deleniti optio eos, accusamus vel error ullam et velit in debitis dolores accusantium expedita a libero sed atque distinctio fugit magnam excepturi aliquid. Minima ducimus assumenda id voluptate, incidunt ea. Excepturi, odit. Minus doloribus, sequi deleniti iure doloremque incidunt tempora? Unde nam aut reiciendis, maiores numquam quis dolore aspernatur consequatur at velit dignissimos nisi illo rem explicabo quae cumque voluptatem soluta obcaecati. Obcaecati dolor laudantium possimus doloribus asperiores quisquam, ratione suscipit esse et consequuntur odio! Consequatur sapiente atque maiores, itaque nobis, sint ut magnam, quaerat dicta ab soluta?</p>
      </div>
      <div className="mt-4 ">
        <Link href={"/courses"}>
          Explore
        </Link>
      </div>
    </div>
  )
}

export default HeroSection