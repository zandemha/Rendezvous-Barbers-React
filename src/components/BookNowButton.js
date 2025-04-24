import React from 'react';

const BookNowButton = () => {
  return (
    <a 
      href="#book" 
      className="fixed bottom-6 right-6 z-50 bg-rendezvous-brown text-white px-6 py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-all duration-300 font-medium transform hover:scale-105 animate-pulse"
      style={{
        animation: 'pulse 2s infinite'
      }}
    >
      BOOK NOW
    </a>
  );
};

export default BookNowButton;
