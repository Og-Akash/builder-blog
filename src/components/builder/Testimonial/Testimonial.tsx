import TestimonialCard from "@/components/ui/TestimonialCard";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  writer: string;
  company: string;
  quote: string;
}

type TestimonialProps = {
  testimonials: Testimonial[];
};
const Testimonial: React.FC<TestimonialProps> = ({ testimonials }) => {
  if (!testimonials?.length) return null;

  const count = testimonials?.length || 0;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      {count > 3 ? (
        <Carousel className="w-full h-full">
          <CarouselContent>
            {testimonials.map((testimonial, idx) => (
              <CarouselItem key={idx} className="px-4 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-1.5rem] cursor-pointer" />
          <CarouselNext className="right-[-1.5rem] cursor-pointer" />
        </Carousel>
      ) : (
        <div
          className={`grid gap-6 ${
            count === 1
              ? "grid-cols-1"
              : count === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonial;
