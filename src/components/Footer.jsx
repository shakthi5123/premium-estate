import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#9c6d41] text-black border-t border-gray-200 mt-12 flex items-center ">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center justify-between text-center md:text-left">
        <p className="text-md flex flex-col">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved to Premium Estate.
        </p>
        <p className="text-sm text-[#f5e9da] mt-2 md:mt-0">
          Designed & Developed by <span className="">Shakthi</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer