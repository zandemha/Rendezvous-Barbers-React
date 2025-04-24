import React from 'react';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Footer = () => {
  return (
    <footer className="py-20 bg-black relative overflow-hidden" data-aos="fade-up">
      {/* Background images */}
      <div className="absolute left-0 top-0 w-1/3 h-full opacity-40 transition-all duration-700 hover:opacity-60">
        <img 
          src="/barber-shop-interior-left.jpg" 
          alt="Barber shop interior" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-40 transition-all duration-700 hover:opacity-60">
        <img 
          src="/barber-shop-interior-right.jpg" 
          alt="Barber shop interior" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-16" data-aos="zoom-in">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Logo />
            </div>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-serif text-white text-center mb-16 max-w-4xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="block">Meet your</span>
            <span className="block italic">barbers</span>
            <span className="block">at Rendezvous</span>
          </h2>
          
          <div 
            className="flex space-x-8 mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="#instagram" className="text-white hover:text-rendezvous-orange transition-colors transform hover:scale-105 duration-300">
              INSTAGRAM
            </a>
            <a href="#facebook" className="text-white hover:text-rendezvous-orange transition-colors transform hover:scale-105 duration-300">
              FACEBOOK
            </a>
            <a href="#join" className="text-white hover:text-rendezvous-orange transition-colors transform hover:scale-105 duration-300">
              JOIN
            </a>
            <a href="#write" className="text-white hover:text-rendezvous-orange transition-colors transform hover:scale-105 duration-300">
              WRITE
            </a>
          </div>
          
          <div 
            className="text-gray-500 text-sm"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            By Roga
          </div>
        </div>
      </div>
    </footer>
  );
};

const Logo = () => {
  return (
    <svg width="90" height="50" viewBox="0 0 90 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-8">
      <path d="M25.5 10C25.5 15.5 20.5 20 14.5 20C8.5 20 3.5 15.5 3.5 10C3.5 4.5 8.5 0 14.5 0C20.5 0 25.5 4.5 25.5 10Z" fill="black"/>
      <path d="M14.5 2C19.2 2 23 5.8 23 10.5C23 15.2 19.2 19 14.5 19C9.8 19 6 15.2 6 10.5C6 5.8 9.8 2 14.5 2Z" fill="#FF5F33"/>
      <path d="M3 25L14.5 40L26 25" stroke="black" strokeWidth="2"/>
      <path d="M30 5H40L50 20H60L70 5H80" stroke="black" strokeWidth="2"/>
      <path d="M30 15H40L50 30H60L70 15H80" stroke="black" strokeWidth="2"/>
      <path d="M55 35L65 45" stroke="black" strokeWidth="2"/>
      <path d="M55 45L65 35" stroke="black" strokeWidth="2"/>
    </svg>
  );
};

export default Footer;
