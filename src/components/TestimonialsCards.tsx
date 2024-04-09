"use client"
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const testimonials = [
    {
        quote: "I've never experienced such efficiency in service before. This product truly exceeded my expectations.",
        name: "Emily Johnson",
        title: "Marketing Manager"
    },
    {
        quote: "Using this platform has been a game-changer for our team. It simplifies our workflow and saves us countless hours.",
        name: "John Smith",
        title: "CEO"
    },
    {
        quote: "The customer support team goes above and beyond to assist us whenever we have questions or concerns. Their dedication is unmatched.",
        name: "Sarah Lee",
        title: "Operations Manager"
    },
    {
        quote: "This product has helped us increase our productivity by 30%. I highly recommend it to anyone looking to streamline their processes.",
        name: "Michael Davis",
        title: "Project Manager"
    }
];



function TestimonialsCards() {
    return (
        <div className="h-[20rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
            <h2 className='text-3xl font-bold text-center mt-8 mb-8 z-10'>Voices of Success</h2>
            <div className='flex justify-center w-full'>
                <div className='w-full max-w-6xl'>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCards