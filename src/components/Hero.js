import React, { useState, useEffect } from 'react';
import AOS from 'aos';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a short delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-24 pb-16 bg-rendezvous-orange overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div 
            className={`w-full max-w-4xl mx-auto mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img 
              src="/barbershop-storefront.jpg" 
              alt="Rendezvous Barbers Storefront" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <h1 className="text-black text-center max-w-6xl">
            <span 
              className="block text-5xl md:text-7xl font-serif mb-2 transition-all duration-700"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Toronto's Premier
            </span>
            <span 
              className="block text-4xl md:text-6xl font-serif mb-2 transition-all duration-700"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              barbershop
            </span>
            <span 
              className="block text-5xl md:text-7xl italic font-serif mb-2 transition-all duration-700"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              specializing
            </span>
            <span 
              className="block text-4xl md:text-6xl font-serif mb-2 transition-all duration-700"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              in the art of
            </span>
            <span 
              className="block text-5xl md:text-7xl font-serif transition-all duration-700"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              modern short
            </span>
            <span 
              className="block text-6xl md:text-8xl italic font-serif transition-all duration-700"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              hairstyles
            </span>
          </h1>
          
          <p 
            className="mt-8 text-black text-center max-w-2xl text-lg transition-all duration-700"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            It's not just about getting a haircut. it's about the luxury of taking time for yourself in a busy schedule.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
