import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = e => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);

    // if(!formData.name || !formData.email || !formData.subject || !formData.message){
    //   return;
    // }
    // Handle form submission

    // setSubmitted(false);
    // setFormData({
    //   name:'',
    //   email:'',
    //   subject:'',
    //   message:''
    // })
;
  }

  return (
    <section id='contact' className="bg-gradient-to-tr to-blue-400 from-green-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-white">Contact</h2>
        <p className="text-2xl font-bold mb-8 text-center text-white">Reach out to me for any query or opportunities !!!</p>
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg">
          <h2 className='text-xl font-bold text-white mb-4'>Email Me</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full border-2 p-3 focus:border-dashed outline-none rounded-lg placeholder-gray-600 focus:placeholder-gray-400 ${(submitted && !formData.name) ? 'border-red-800': 'border-teal-800' }`}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {
                submitted && !formData.name && (
                <p class="mt-2 ps-2 text-sm text-red-500 ">Please enter your name!</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full border-2 p-3 focus:border-dashed outline-none rounded-lg placeholder-gray-600 focus:placeholder-gray-400 ${(submitted && !formData.email) ? 'border-red-800': 'border-teal-800' }`}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {
                submitted && !formData.email && (
                <p class="mt-2 ps-2 text-sm text-red-500 ">Please enter your email!</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                className={`w-full border-2 p-3 focus:border-dashed outline-none rounded-lg placeholder-gray-600 focus:placeholder-gray-400 ${(submitted && !formData.subject) ? 'border-red-800': 'border-teal-800' }`}
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              {
                submitted && !formData.subject && (
                <p class="mt-2 ps-2 text-sm text-red-500 ">Please enter the subject!</p>
              )}
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                name="message"
                rows="5"
                className={`w-full border-2 p-3 focus:border-dashed outline-none rounded-lg placeholder-gray-600 focus:placeholder-gray-400 ${(submitted && !formData.message) ? 'border-red-800': 'border-teal-800' }`}
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              {
                submitted && !formData.message && (
                <p class="mt-2 ps-2 text-sm text-red-500 ">Please drop your message</p>
              )}
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
