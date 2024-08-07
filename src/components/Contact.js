import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleInputChange = e => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    setSubmitted(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    formData.append("access_key", "9ff9dcc0-a8db-47d0-b4f2-fd2a7c41547b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    console.log("Data: ", data);

    if(data.success){
      setResult("Email sent successfully");
      event.target.reset();
    }
    else{
      console.log("Error", data);
      setResult(data.message);
    }

    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    setTimeout(()=> {
      setResult("");
    },5000);
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
          { result && <div className='text-center my-3 text-lg font-bold text-white'>{result}</div>}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
