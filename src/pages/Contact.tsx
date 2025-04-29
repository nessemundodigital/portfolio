import React, { useEffect } from 'react';
import ContactSection from '../components/home/ContactSection';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact - Alex Design';
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Have a project in mind? Let's talk about how we can work together.
            </p>
          </div>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941887458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1627309371665!5m2!1sen!2sca" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Office location map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}