import React from 'react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // ...
  }

  return (
    <section id='contact' className="bg-[#1e1826] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-white">Contact</h2>
        <p className="text-2xl font-bold mb-8 text-center text-white">Reach out to me for any query or opportunities !!!</p>
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg">
          <h2 className='text-xl font-bold text-white mb-4'>Email Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-2 border-teal-800 p-3 focus:border-dashed outline-none rounded-lg placeholder-gray-600 focus:placeholder-gray-400" 
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-2 border-teal-800 p-3 focus:border-dashed outline-none rounded-lg placeholder-gray-600 focus:placeholder-gray-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full border-2 border-teal-800 p-3 focus:border-dashed outline-none rounded-lg placeholder-gray-600 focus:placeholder-gray-400" 
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border-2 border-teal-800 p-3 focus:border-dashed outline-none rounded-lg placeholder-gray-600 focus:placeholder-gray-400" 
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
