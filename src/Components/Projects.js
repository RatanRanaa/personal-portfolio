import React from "react";
import calculater from "../images/calculater.png";
import PIZZA from "../images/PiZZA.png";
import textutils from "../images/textutils.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: calculater,
      href:"https://calculator-calculator-project.netlify.app/"
    },
    {
      id: 2,
      src: textutils,
      href:"https://text-utils-two-psi.vercel.app/"
    },
    {
      id: 3,
      src: PIZZA,
      href:"https://react-responsive-website.vercel.app"
    },
  ];

  return (
    <>
    <div
    id="projects"
      name="portfolio"
      className="bg-gradient-to-b w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-14 md:p-24 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 flex items-center justify-center flex-col">
          <p className="text-5xl tracking-wider font-bold uppercase inline border-b-4 text-red-500">
            Projects
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-44 w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                // href={href}
                
                >
                  <a href={href} target="_blank" rel="noreferrer">Demo</a>
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div><br /><br /><br /><br /><br /><br />
    </>
  );
};

export default Projects;
