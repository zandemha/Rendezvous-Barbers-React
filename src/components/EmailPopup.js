import React, { useEffect, useState } from 'react';

const EmailPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the email submission
    console.log('Email submitted:', email);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-6">
          <div className="w-full mb-4">
            <img 
              src="/barbershop-storefront.jpg" 
              alt="Rendezvous Barbers Storefront" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <h2 className="text-center text-xl font-medium mb-4">
            Rendezvous Mutual st. just opened! Sign up with your email to unlock a 25% discount on your first visit, valid until April 30th.
          </h2>
          
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-rendezvous-orange focus:border-rendezvous-orange"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-rendezvous-orange text-black py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors font-medium"
            >
              Claim Your Spot
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            30 Mutual St
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;
