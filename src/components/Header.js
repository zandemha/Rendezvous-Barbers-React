import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-rendezvous-orange">
      <div className="flex items-center">
        <Logo />
      </div>
      <a href="#download" className="text-black font-medium flex items-center hover:opacity-80 transition-opacity">
        DOWNLOAD APP <span className="ml-1">↗</span>
      </a>
    </header>
  );
};

export default Header;
