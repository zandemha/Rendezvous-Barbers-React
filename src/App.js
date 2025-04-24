import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import AppFeatures from './components/AppFeatures';
import FAQ from './components/FAQ';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import BookNowButton from './components/BookNowButton';
import EmailPopup from './components/EmailPopup';

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
    });
    
    // Add smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <Hero />
      <Testimonials />
      <Locations />
      <AppFeatures />
      <FAQ />
      <BookingSection />
      <Footer />
      <BookNowButton />
      <EmailPopup />
    </div>
  );
}

export default App;
