import React from 'react';

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

export default Logo;
