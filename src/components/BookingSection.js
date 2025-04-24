import React from 'react';

const BookingSection = () => {
  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-serif text-rendezvous-orange text-center mb-16 border-b border-gray-800 pb-8">
          Book now
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-white text-lg mb-12 text-center">
            The most straightforward is through our website. Simply click the link in the bottom right corner, and follow the prompts to select Location, Barber OR Service, and then confirm whether you would like the payment to be processed online or paid in store.
          </p>
          
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800 p-6 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="text-white text-lg">Select a barber</div>
              <div className="text-gray-400 text-sm">Today</div>
            </div>
            
            <div className="space-y-6">
              {['Jay F.', 'Daniel J.'].map((barber, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <div className="text-white">{barber}</div>
                  <div className="text-green-500 text-sm">
                    Available Today
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="w-48 h-1 bg-gray-700 rounded-full relative">
                <div className="absolute left-0 top-0 h-full w-1/2 bg-rendezvous-orange rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
