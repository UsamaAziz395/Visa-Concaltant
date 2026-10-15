import React from 'react';
import ContactForm from '../Components/ContactForm/ContactForm';
import Contactbg from '../assets/images/Contactbg.jpg';
import ContactCard from '../Components/ContactCard/ContactCard';

function GetTouch() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      {/* Main Container  */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-start">
        
        {/* LEFT SIDE: Text and Image */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col gap-5">
          
          {/* Sub Heading */}
          <h1 className="text-amber-500 font-bold text-sm tracking-widest uppercase">
            GET IN TOUCH
          </h1>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Love to Hear From You, Get In Touch
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed">
            At nullam leo consectetur euismod enim. Orci donec sapien et semper fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
          </p>

          {/* Image */}
          <img 
            src={Contactbg} 
            alt="Contact Background" 
            className="w-full h-auto rounded-xl object-cover mt-4"
          />
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="flex-1 w-full md:w-1/2">
          <ContactForm />
        </div>

      </div>
      <ContactCard />
    </section>
  );
}

export default GetTouch;