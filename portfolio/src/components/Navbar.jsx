import React from 'react'

const Navbar = () => {
  return (
    <>
        <header>
            <nav className='container filter backdrop-blur-sm p-3 fixed w-full flex flex-row justify-between drop-shadow-glow'>
                {/* Logo Section */}
                <div>
                <h1 className='text-xl text-white font-poppins'>EB Mhlanga</h1>
                </div>

                {/* Navlinks */}
                <ul className='flex flex-row gap-5 px-10 self-center justify-center'>
                    <li className='text-accent2 font-thin hover:text-yellow-300 text-shadow-lg'>About Me</li>
                    <li className='text-accent2 font-thin hover:text-yellow-300 text-shadow-lg'>Projects</li>
                    <li className='text-accent2 font-thin hover:text-yellow-300 text-shadow-lg'>Education</li>
                    <li className='text-accent2 font-thin hover:text-yellow-300 text-shadow-lg'>Contact Me</li>
                </ul>
               
            </nav>
        </header>
    </>
  )
}

export default Navbar