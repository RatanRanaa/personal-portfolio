import { motion } from 'framer-motion'
import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
  return (
    <>
        <div className=' w-full h-14 bg-black shadow-2xl fixed z-10'>
            <div className=' flex items-center justify-between px-20'>
                <motion.div animate={{rotateZ: 0, x:0}} initial={{x:-160}} transition={{ ease: "easeOut", duration: 2 }}  className=' flex items-center justify-center p-2'>
                    <Link to="/"><img className=' cursor-pointer bg-cover bg-center rounded-3xl' src="/Images/Fire.jpg" width={80} alt="logo" /></Link>
                </motion.div>
                <div className=' text-white cursor-pointer'>
                    <motion.div animate={{x:0}} initial={{x:520}} transition={{ ease: "easeInOut", duration: 2 }} className=' hidden md:block'>
                        <div className=' flex items-center justify-center'>
                            <div className=' px-6 text-[18px] underline underline-offset-8 '>
                                <NavLink style={({isActive}) => ({ color: isActive ? "white" : "gray"})} to="/"><h1>Home</h1></NavLink>
                            </div>
                            {/* <div className=' px-6 text-[18px] hover:text-white text-gray-300 underline underline-offset-8 '>
                                <h1>About</h1>
                            </div> */}
                            <div className=' px-6 text-[18px] underline underline-offset-8 '>
                                <NavLink style={({isActive}) => ({ color: isActive ? "white" : "gray"})} to="/skills"><h1>Skills</h1></NavLink>
                            </div>
                            <div className=' px-6 text-[18px] underline underline-offset-8 '>
                                <NavLink style={({isActive}) => ({ color: isActive ? "white" : "gray"})} to="/projects"><h1>Projects</h1></NavLink>
                            </div>
                            <div className=' px-6 text-[18px] underline underline-offset-8 '>
                                <NavLink style={({isActive}) => ({ color: isActive ? "white" : "gray"})} to="/contact"><h1>Contact</h1></NavLink>
                            </div>
                            {/* <div className=' px-6 text-[18px] hover:text-white text-gray-300 underline underline-offset-8 '>
                                Switch
                            </div> */}
                        </div>
                    </motion.div>
                    <motion.h1 animate={{rotateZ: 0, x:0}} initial={{x:160}} transition={{ ease: "easeOut", duration: 2 }} onClick={()=>setToggle(!toggle)}>{toggle ? <i class="fa-solid fa-xmark md:hidden text-[20px]"></i> : <i class="fa-solid fa-bars md:hidden text-[20px]"></i>}</motion.h1>
                </div>
            </div>
            <div className={toggle ?' relative w-full bg-blac top-0 h-screen text-white text-center p-10 md:hidden': "hidden md:hidden"}>
                <div className=' py-6 text-lg text-gray-400 hover:text-white cursor-pointer underline underline-offset-8'>
                    <Link to="/"><h1 onClick={()=>setToggle(!toggle)}>Home</h1></Link>
                </div>
                {/* <div className=' py-6 text-lg text-gray-400 hover:text-white cursor-pointer underline underline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>About</h1>
                </div> */}
                <div className=' py-6 text-lg text-gray-400 hover:text-white cursor-pointer underline underline-offset-8'>
                    <Link to="/skills"><h1 onClick={()=>setToggle(!toggle)}>Skills</h1></Link>
                </div>
                <div className=' py-6 text-lg text-gray-400 hover:text-white cursor-pointer underline underline-offset-8'>
                    <Link to="/projects"><h1 onClick={()=>setToggle(!toggle)}>Projects</h1></Link>
                </div>
                <div className=' py-6 text-lg text-gray-400 hover:text-white cursor-pointer underline underline-offset-8'>
                    <Link to="/contact"><h1 onClick={()=>setToggle(!toggle)}>Contact</h1></Link>
                </div>
                {/* <div className=' py-6 text-lg text-gray-400 hover:text-white cursor-pointer underline underline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>Switch</h1>
                </div> */}
            </div>
        </div>
        <hr />
    </>
  )
}

export default Navbar