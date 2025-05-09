"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    role: "Owner, Chai Point Boston",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "FranchiseConnect made establishing my Chai Point franchise in Boston seamless. Their supply chain support saved me months of work and their market insights were invaluable.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Franchisee, Creamstone Chicago",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Starting from zero would have been impossible. FranchiseConnect handled everything from sourcing authentic ingredients to training my staff on the authentic Creamstone experience.",
  },
  {
    id: 3,
    name: "Vikram Mehta",
    role: "Owner, MBA Chai Wala NYC",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The 'Don't Start From Zero' approach is real. They provided a proven business model, complete branding, and ongoing support that made my franchise successful from day one.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <Card className="p-8 md:p-12 border-purple-100 shadow-xl bg-gradient-to-br from-white to-purple-50">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-purple-100">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Quote className="h-10 w-10 text-purple-200 mb-4" />
                    <p className="text-lg md:text-xl italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-purple-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-purple-600" : "bg-purple-200"
            }`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-purple-100 hover:bg-purple-50 hidden md:flex"
        onClick={() => {
          prev()
          setAutoplay(false)
        }}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-purple-100 hover:bg-purple-50 hidden md:flex"
        onClick={() => {
          next()
          setAutoplay(false)
        }}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
