import React from "react";


import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import reactImage from "../images/react.png";
import nextjs from "../images/nextjs.png";
import tailwind from "../images/tailwind.png";
import graphql from "../images/graphql.png";
import node from "../images/node.png";
import { motion } from "framer-motion";
// import Image from "next/image";

const Skills = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 7,
      title: "GraphQL",
      src: graphql,
    },
    {
      id: 8,
      title: "Node JS",
      src: node,
    },
  ];

  return (
    <div id="experience" className="w-full text-white md:h-full h-full pb-20">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center">
        <motion.h2 animate={{x:0}} initial={{x:900}} transition={{ ease: "easeInOut", duration: 2 }} className="text-5xl md:text-7xl border-b-4 inline tracking-wider uppercase text-red-500 font-bold">
          skills
        </motion.h2>
        <motion.p animate={{x:0}} initial={{x:900}} transition={{ ease: "easeInOut", duration: 2 }} className="py-4 w-80 flex items-center justify-center flex-col mx-auto mt-4">
          I have given too much time to learn this all thing just Now I have compleated One Years And Now a day's I am working on Next.js
          
        </motion.p>

        <motion.div animate={{x:0}} initial={{x:-1300}} transition={{ ease: "easeInOut", duration: 2 }} className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <img src={src} width="64px" height="64px" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;