"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import sir_zia from "../../../public/images/sir-zia.jpg";
import sir_qasim from "../../../public/images/sir-qasim.jpg";
import sir_najam from "../../../public/images/sir-najam.jpg";
import sir_hamzah from "../../../public/images/sir-hamzah.jpg";
import sir_ameen from "../../../public/images/sir-ameen.jpg";
import sir_okasha from "../../../public/images/sir-okasha.webp"
import sulaiman from "../../../public/images/sulaiman.jpeg";

// Testimonial data
const testimonials = [
  {
    text: "Jazil transformed our vision into a sleek, fast, and user-friendly website. The attention to detail and creativity truly set the project apart. Highly recommended!",
    author: "Zia Ullah Khan",
    image: sir_zia,
  },
    {
      text: "Working with Jazil was an absolute pleasure. Their problem-solving skills, responsiveness, and technical knowledge ensured our project was delivered perfectly and on time.",
      author: "Sulaiman Shakeel",
      image: sulaiman,
    },
  {
    text: "Jazil exceeded our expectations with their mastery of Next.js and Tailwind. The project was delivered ahead of schedule with outstanding quality and performance",
    author: "Hamzah Syed",
    image: sir_hamzah,
  },
  {
    text: "Jazil took our ideas and turned them into a polished, high-performing website. Their commitment to delivering exceptional results was evident every step of the way.",
    author: "Muhammad Qasim",
    image: sir_qasim,
  },
  {
    text: "His work from design to deployment was flawless. Communication was clear, and the final product surpassed our expectations. We would not hesitate to work with them again",
    author: "Najam Saeed",
    image: sir_najam,
  },
  {
    text: "Outstanding experience — Jazil turned our vision into reality seamlessly.",
    author: "Ameen Alam",
    image: sir_ameen,
  },
  {
    text: "Fast, reliable, and talented — Jazil is a true professional and a skilled developer.",
    author: "Okasha Aijaz",
    image: sir_okasha,
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <Card className="border border-white/10 bg-primary hover:bg-primary/90">
    <CardContent className="space-y-6 p-8">
      {/* Star Rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-7 w-7 fill-[#A78BFA] text-primary"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-lg text-white/90">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>


      {/* Author Info */}
      <div className="flex items-center gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src={testimonial.image.src}
            alt={`${testimonial.author}'s profile picture`}
          />
          <AvatarFallback>
            {testimonial.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="font-semibold text-white">{testimonial.author}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function TestimonialCarousel() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section id="testimonials">
      <div className="dark min-h-screen py-12 mt-10">
        <h1 className="text-white font-bold text-5xl text-center mb-10">
          What My Clients Say
        </h1>
        <div className="container mx-auto px-4">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-7xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
