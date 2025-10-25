'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import About from '@/components/About';
import Counter from '@/components/Counter';
import Footer from '@/components/Footer';
import ProcessFlow from '@/components/ProcessFlow';
import Testimonial from '@/components/Testimonial';
import Brands from '@/components/Brands';
import InquiryModal from '@/components/InquiryModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollTriggers, setScrollTriggers] = useState({
    triggered40: false,
    triggered90: false
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      // Trigger modal at 40% scroll
      if (scrollPercentage >= 40 && !scrollTriggers.triggered40) {
        setScrollTriggers(prev => ({ ...prev, triggered40: true }));
        setIsModalOpen(true);
      }

      // Trigger modal at 90% scroll
      if (scrollPercentage >= 90 && !scrollTriggers.triggered90) {
        setScrollTriggers(prev => ({ ...prev, triggered90: true }));
        setIsModalOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTriggers, mounted]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <Banner />
      <About />
      <Services />
      <ProcessFlow />
      {/* <Counter /> */}
      <Testimonial />
      <Brands />
      <Footer />
      
      {mounted && <InquiryModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </>
  );
}

