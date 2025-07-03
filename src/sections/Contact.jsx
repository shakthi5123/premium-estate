import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='scroll-mt-25 max-w-lg mx-auto py-12 px-6'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-[#9c6d41]'>
        Contact Us
      </h2>

      <form className="space-y-6 bg-white shadow-lg rounded-lg p-8">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9c6d41]"
            placeholder="shakthi"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9c6d41]"
            placeholder="shakthi@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9c6d41]"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#9c6d41] text-white py-2 px-4 rounded-lg hover:bg-[#845b32] transition"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact