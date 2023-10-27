import React from 'react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // ...
  }

  return (
    <section id='contact' className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-lg mx-auto bg-blue-900 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-800 font-semibold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border border-gray-300 p-2 rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
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
