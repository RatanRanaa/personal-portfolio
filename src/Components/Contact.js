import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 flex items-center justify-center flex-col">
          <p className="text-5xl uppercase font-bold inline border-b-4 tracking-wider text-red-500">
            Contact
          </p>
          <p className="py-2 text-[20px]"> &rarr; Submit the form below to get in touch with me &larr;</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/234c6011-ace8-4a56-b00e-805c9c40a73f"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;