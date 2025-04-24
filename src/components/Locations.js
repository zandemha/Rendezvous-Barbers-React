import React, { useState, useEffect } from 'react';

const Locations = () => {
  const locations = [
    {
      name: 'Queen St',
      image: '/location-queen.jpg'
    },
    {
      name: 'Yonge & Wellington',
      image: '/location-wellington.jpg'
    },
    {
      name: 'King St & Bathurst',
      image: '/location-king.jpg'
    },
    {
      name: 'Mutual St',
      image: '/location-mutual.jpg'
    }
  ];

  return (
    <section className="py-20 bg-black" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group" 
              data-aos="fade-up" 
              data-aos-delay={200 + (index * 100)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={`${location.name} location`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-8 left-8 flex items-center">
                <h3 className="text-3xl md:text-4xl font-serif text-white mr-4">{location.name}</h3>
                <button className="w-12 h-12 bg-rendezvous-orange rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center" data-aos="zoom-in" data-aos-delay="600">
          <a 
            href="#locations" 
            className="inline-flex items-center justify-center w-32 h-32 bg-rendezvous-orange rounded-full text-black font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-center">See all<br />locations</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
