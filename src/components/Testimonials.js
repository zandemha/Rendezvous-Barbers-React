import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: 'Zoheb',
      quote: 'I have visited Rendezvous in Wellington three times now and each and every time the service has been exceptional. Hamo is an amazing barber, his technique is first class and customer service is world class.'
    },
    {
      name: 'Evan',
      quote: 'Amazing experience, Stas is truly the best in the city! Super nice interior with beverages and friendly staff. Could not recommend enough!'
    },
    {
      name: 'Andres',
      quote: 'Hands down the BEST barbershop I\'ve been to, cut was amazing, experience was amazing, Cesar was amazing thank you so much would recommend anytime 20/10'
    },
    {
      name: 'Paul',
      quote: 'Rendezvous is a great spot, good atmosphere and skilled barbers. Jay has taken care of me for a few years. Always good laughs and good conversation, and a perfect skin fade every time.'
    },
    {
      name: 'Kris',
      quote: 'Thrilled with my experience at the new location of this established barbershop! Endis did an excellent job – skilled, friendly, and attentive. A solid 5-star experience!'
    },
    {
      name: 'Edson',
      quote: 'Issa is the man! The best barber, very professional, pays attention to detail and efficient. I\'ve been to the Yonge & Wellington shop and will definitely keep coming back if they maintain the lineup.'
    }
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-rendezvous-orange" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16" data-aos="fade-up">
          <span className="block text-5xl md:text-7xl font-serif">When</span>
          <span className="block text-5xl md:text-7xl italic font-serif">you look good</span>
          <span className="block text-5xl md:text-7xl font-serif text-white">you feel good</span>
        </h2>

        <div className="max-w-4xl mx-auto relative" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-110 duration-300"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-110 duration-300"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 transition-all duration-500 transform">
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="text-rendezvous-orange text-2xl font-medium mb-4">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-black text-lg md:text-xl">
                "{testimonials[currentIndex].quote}"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
