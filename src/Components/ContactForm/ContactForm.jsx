
import React, { useState } from 'react';

function ContactForm() {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handelchange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formdata,
      [name]: value,
    });

  
    setErrors({
      ...errors,
      [name]: '',
    });

    setSuccess('');
  };

  const handelsubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Name validation
    if (!formdata.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } 
     
    

    // Email validation
    if (!formdata.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email.trim())
    ) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Message validation
    if (!formdata.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formdata.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Valid data
    console.log('Form Data:', formdata);

   
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setErrors({});
    setSuccess('Your form has been submitted successfully!');
  };

  return (
    <section className="w-full bg-[#F4F6FB] py-16 px-4 md:px-8">
      <div className="max-w-[500px] mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-6 leading-snug">
            Contact Us Now to Get Free Quote
            <br className="hidden md:block" /> from Our Experts!
          </h2>

          <form onSubmit={handelsubmit} noValidate className="flex flex-col gap-3">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handelchange}
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-[#F4F6FB] text-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-[#4F46E5] placeholder-gray-500 text-sm"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handelchange}
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-[#F4F6FB] text-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-[#4F46E5] placeholder-gray-500 text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formdata.message}
                onChange={handelchange}
                placeholder="Your Message"
                rows="3"
                className="w-full px-4 py-4 bg-[#F4F6FB] text-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-[#4F46E5] placeholder-gray-500 resize-none text-sm"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Success Message */}
            {success && (
              <p className="text-green-600 text-sm">{success}</p>
            )}

            <button
              type="submit"
              className="w-full py-2.5 mt-1 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold rounded-lg transition-colors shadow-md text-sm"
            >
              Get a Free Quote!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
