
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    content: 'Woldreamz transformed our operations with their innovative software solutions. Their team understood our unique challenges and delivered a system that exceeded our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Director, EduTech Alliance',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    content: 'The educational platform developed by Woldreamz has revolutionized how we deliver content to our students. Their attention to detail and understanding of educational needs is unparalleled.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amelia Rodriguez',
    role: 'Product Manager, InnoSoft',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    content: 'Working with Woldreamz was a seamless experience from start to finish. Their team provided valuable insights and delivered a high-quality product that has significantly improved our workflow.',
    rating: 4,
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-slate-600">Hear from our valued clients about their experiences working with Woldreamz Inc.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute w-full transition-all duration-500 glass-card p-8",
                  index === activeIndex
                    ? "opacity-100 translate-x-0 z-20"
                    : index === (activeIndex + 1) % testimonials.length
                    ? "opacity-0 translate-x-full z-10"
                    : "opacity-0 -translate-x-full z-10"
                )}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-woldreamz-blue"
                  />
                  
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 italic mb-4">{testimonial.content}</p>
                    <div>
                      <h4 className="font-bold text-woldreamz-blue">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-woldreamz-blue transition-colors z-30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-woldreamz-blue transition-colors z-30"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-woldreamz-blue w-4"
                    : "bg-slate-300 hover:bg-slate-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
