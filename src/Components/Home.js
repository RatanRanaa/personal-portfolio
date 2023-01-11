import { motion } from 'framer-motion'
import React from 'react'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'
import SocialLinks from './SocialLinks'

const Home = () => {
  return (
    <>
    <div className=' w-full h-screen'>
        <div className=' flex items-center justify-between'>
            <div className=' mx-auto h-screen w-full flex items-center justify-center flex-col px-5'>
                <motion.h2 animate={{x:0}} initial={{x:-600}} transition={{ ease: "easeInOut", duration: 2 }} className=' text-4xl'> <span className=' text-red-500'>H</span>i I'm </motion.h2>
                <motion.h1 animate={{x:0}} initial={{x:-600}} transition={{ ease: "easeInOut", duration: 2 }} className=' pb-10 text-3xl'> <span className=' text-red-500'>R</span>atan <span className=' text-red-500'>R</span>ana</motion.h1>
                <motion.p animate={{x:0}} initial={{x:-600}} transition={{ ease: "easeInOut", duration: 2 }} className=' mb-44 text-center w-96'>
                    I'm a professional front-end developer from India with 2+ years of
                    experience. I've worked on more than 20+ projects including
                    frontend and backend. I would love to contribute to your
                    company and improve user experience using the latest web
                    technologies.
                </motion.p>
            </div>
            <motion.div animate={{x:0}} initial={{x:900}} transition={{ ease: "easeInOut", duration: 2 }} className=' h-screen w-full hidden md:block'>
                <img className=' h-screen w-full  rounded-full rounded-t-22xl rounded-b-22xl' src="/Images/onway.jpg" height={100} alt="" />
            </motion.div>
        </div>
    </div>
    <div>
        <SocialLinks/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
    </>
  )
}

export default Home