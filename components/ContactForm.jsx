import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col items-center w-full">
      <h2 className="text-5xl font-bold mb-5 text-green-400">Contact Me</h2>
      <div className="mb-3 w-full">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3 w-full">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3 w-full">
        <input
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button className="px-6 py-3 text-sm font-bold text-white uppercase border-none rounded-2xl transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
