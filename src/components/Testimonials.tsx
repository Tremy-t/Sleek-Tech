
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CTO",
    company: "Innovate Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote: "TechVista has transformed how we operate. The platform's intuitive design and powerful features have increased our productivity by 40% in just three months."
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Director of Product",
    company: "FutureWave",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote: "We've tried numerous solutions, but nothing comes close to the level of sophistication and ease-of-use that TechVista provides. It's been a game-changer for our team."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CEO",
    company: "GlobalTech",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote: "The ROI we've seen with TechVista has been outstanding. Our deployment times have decreased by 65%, and our customer satisfaction scores have never been higher."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] right-[30%] w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[20%] w-80 h-80 bg-purple-700/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-white/70 text-lg">Don't just take our word for it. Hear from the businesses that have transformed their operations with TechVista.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-primary/30">
            <Quote size={80} />
          </div>
          
          <Card className="card-gradient border-white/5 shadow-xl animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <Avatar className="w-24 h-24 border-2 border-primary/30">
                    <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                    <AvatarFallback>{testimonials[activeIndex].name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <p className="text-lg md:text-xl font-medium mb-6">"{testimonials[activeIndex].quote}"</p>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-white/70">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-primary' : 'bg-primary/30'}`}
              ></button>
            ))}
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
