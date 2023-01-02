import React, {useState} from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <>
        <div className=' w-full h-12 bg-black shadow-2xl'>
            <div className=' flex items-center justify-between px-20'>
                <div>
                    <img className=' cursor-pointer bg-cover bg-center rounded-3xl' src="/Images/Fire.jpg" width={80} alt="logo" />
                </div>
                <div className=' text-white cursor-pointer'>
                    <div className=' hidden md:block'>
                        <div className=' flex items-center justify-center'>
                            <div className=' px-6 hover:text-2xl hover:text-orange-500 underline underline-offset-8 '>
                                <h1>Home</h1>
                            </div>
                            <div className=' px-6 hover:text-2xl hover:text-orange-500 underline underline-offset-8 '>
                                <h1>About</h1>
                            </div>
                            <div className=' px-6 hover:text-2xl hover:text-orange-500 underline underline-offset-8 '>
                                <h1>Skills</h1>
                            </div>
                            <div className=' px-6 hover:text-2xl hover:text-orange-500 underline underline-offset-8 '>
                                <h1>Projects</h1>
                            </div>
                            <div className=' px-6 hover:text-2xl hover:text-orange-500 underline underline-offset-8 '>
                                <h1>Contact</h1>
                            </div>
                            <div className=' px-6 hover:text-2xl hover:text-orange-500 underline underline-offset-8 '>
                                Switch
                            </div>
                        </div>
                    </div>
                    <h1 onClick={()=>setToggle(!toggle)}>{toggle ? <i class="fa-solid fa-xmark md:hidden"></i> : <i class="fa-solid fa-bars md:hidden"></i>}</h1>
                </div>
            </div>
            <div className={toggle ?' w-full bg-black top-0 h-74 text-white text-center p-10 md:hidden': "hidden md:hidden"}>
                <div className=' pb-6 hover:text-2xl hover:text-orange-500 cursor-pointer underline underline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>Home</h1>
                </div>
                <div className=' pb-6 hover:text-2xl hover:text-orange-500 cursor-pointer underline underline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>About</h1>
                </div>
                <div className=' pb-6 hover:text-2xl hover:text-orange-500 cursor-pointer underline underline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>Skills</h1>
                </div>
                <div className=' pb-6 hover:text-2xl hover:text-orange-500 cursor-pointer underline underline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>Projects</h1>
                </div>
                <div className=' pb-6 hover:text-2xl hover:text-orange-500 cursor-pointer underline underline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>Contact</h1>
                </div>
                <div className=' pb-6 hover:text-2xl hover:text-orange-500 cursor-pointer underline underline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>Switch</h1>
                </div>
            </div>
        </div>
        <hr />
    </>
  )
}

export default Navbar