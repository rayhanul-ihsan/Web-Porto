import React from "react";

const ContactForm = () => {
  return (
    <form>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-200 bg-black border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Your email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-200 bg-black border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          className="w-full mb-5 px-3 py-2 text-sm text-gray-200 placeholder-gray-200 bg-black border-0 rounded shadow"
        />
      </div>
      <button className="px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded-md ">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
