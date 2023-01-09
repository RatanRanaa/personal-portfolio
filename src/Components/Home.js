import React from 'react'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'
import SocialLinks from './SocialLinks'

const Home = () => {
  return (
    <>
    <div className=' w-full h-screen bg-black text-white'>
        <div className=' flex items-center justify-between'>
            <div className=' mx-auto h-screen w-full flex items-center justify-center flex-col px-5'>
                <h2 className=' text-2xl'> <span className=' text-orange-400'>H</span>i I'm </h2>
                <h1 className=' pb-10 text-3xl'> <span className=' text-orange-400'>R</span>atan <span className=' text-orange-400'>R</span>ana</h1>
                <p className=' mb-44 text-center w-96'>
                    I'm a professional front-end developer from India with 2+ years of
                    experience. I've worked on more than 20+ projects including
                    frontend and backend. I would love to contribute to your
                    company and improve user experience using the latest web
                    technologies.
                </p>
            </div>
            <div className=' h-screen w-full hidden md:block'>
                <img className=' h-screen w-full  rounded-full rounded-t-3xl' src="/Images/onway.jpg" height={100} alt="" />
            </div>
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