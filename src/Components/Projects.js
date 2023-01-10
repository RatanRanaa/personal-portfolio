import { motion } from "framer-motion";
import React from "react";
import arrayDestruct from "../images/arrayDestruct.jpg";
// import installNode from "../images/installNode.jpg";
import navbar from "../images/navbar.jpg";
import reactParallax from "../images/reactParallax.jpg";
// import reactSmooth from "../images/reactSmooth.jpg";
// import reactWeather from "../images/reactWeather.jpg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b bg-black w-full text-white md:h-screen" //from-black to-gray-800
    >
      <div className="max-w-screen-lg p-12 md:p-24 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 flex items-center justify-center flex-col">
          <p className="text-5xl tracking-wider font-bold uppercase inline border-b-4 text-red-500">
            Projects
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>

        <motion.div animate={{y:0}} initial={{y:400}} transition={{ ease: "easeInOut", duration: 2 }} className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-24 w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
