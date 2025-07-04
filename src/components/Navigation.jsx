import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='bg-[#ffffff] border-b border-[#9c6d41] sticky top-0 z-50 mb-5 '>
      <div className='flex max-w-8xl mx-auto md:px-12 items-center justify-between'>
        <div>
            <img src={logo} alt="logo" className='h-18 ml-5' />
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-6 p-10 text-lg">
        <li><a href="#home" className='text-[#9c6d41] hover:text-[#c99b70]'>HOME</a></li>
        <li><a href="#properties" className='text-[#9c6d41] hover:text-[#c99b70]'>PROPERTIES</a></li>
        <li><a href="#amenities" className='text-[#9c6d41] hover:text-[#c99b70]'>AMENITIES</a></li>
        <li><a href="#connectivity" className='text-[#9c6d41] hover:text-[#c99b70]'>CONNECTIVITY</a></li>
        <li><a href="#faqs" className='text-[#9c6d41] hover:text-[#c99b70]'>FAQS</a></li>
        <li><a href="#about" className='text-[#9c6d41] hover:text-[#c99b70]'>ABOUT</a></li>
        <li><a href="#contact" className='text-[#9c6d41] hover:text-[#c99b70]'>CONTACT</a></li>
      </ul>

      {/* Hamburger Icons  */}
      <button className='md:hidden text-[#9c6d41] mr-10'
      onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center gap-6 py-6 bg-white md:hidden border-t border-[#9c6d41]">
          <li><a href="#home" onClick={() => setIsOpen(false)} className='text-[#9c6d41] hover:text-[#c99b70]'>HOME</a></li>
          <li><a href="#properties" onClick={() => setIsOpen(false)} className='text-[#9c6d41] hover:text-[#c99b70]'>PROPERTIES</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className='text-[#9c6d41] hover:text-[#c99b70]'>ABOUT</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className='text-[#9c6d41] hover:text-[#c99b70]'>CONTACT</a></li>
        </ul>
      )}
     
    </nav>
  )
}

export default Navigation