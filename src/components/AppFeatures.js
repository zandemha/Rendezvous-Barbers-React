import React from 'react';

const AppFeatures = () => {
  return (
    <section className="py-20 bg-rendezvous-orange">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-16">
          Our app lets you:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col">
            <div className="text-8xl font-serif text-black mb-6">1</div>
            <p className="text-xl text-black">
              Reschedule or cancel without picking up the phone
            </p>
          </div>
          
          <div className="flex flex-col">
            <div className="text-8xl font-serif text-black mb-6">2</div>
            <p className="text-xl text-black">
              Save time and leave the stress to someone else. With Rendezvous app, setting up your next haircut appointment is free and easy
            </p>
          </div>
          
          <div className="flex flex-col">
            <div className="text-8xl font-serif text-black mb-6">3</div>
            <p className="text-xl text-black">
              Receive reminders. You'll never forget or miss out on another appointment
            </p>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center space-x-6">
          <a href="#google-play" className="hover:opacity-90 transition-opacity">
            <img 
              src="/google-play-badge.png" 
              alt="Get it on Google Play" 
              className="h-12"
            />
          </a>
          <a href="#app-store" className="hover:opacity-90 transition-opacity">
            <img 
              src="/app-store-badge.png" 
              alt="Download on the App Store" 
              className="h-12"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
