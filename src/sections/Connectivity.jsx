import React from 'react'
import ConnectCard from '../components/ConnectCard'
import img1 from '../assets/con1.webp'
import img2 from '../assets/con2.webp'
import img3 from '../assets/con3.webp'
import img4 from '../assets/con4.webp'
import img5 from '../assets/con5.webp'
import img6 from '../assets/con6.webp'
import img7 from '../assets/con7.webp'
import img8 from '../assets/con8.webp'


const info = [
  {
    image: img1,
    text: 'Mumbai International Airport 3.5 kms.'
  },
  {
    image: img2,
    text: 'Mumbai Railway Station 1.5 kms.'
  },
  {
    image: img3,
    text: 'Mumbai Bus Depot 1.2 kms.'
  },
  {
    image: img4,
    text: 'Mumbai-Goa Highway 0.3 kms.'
  },
  {
    image: img5,
    text: 'Medical facilities within 5-7 minutes'
  },
  {
    image: img6,
    text: 'Situated in the heart of town and main Panvel market.'
  },
  {
    image: img7,
    text: 'Restaurants, cafes and fine dinings near by.'
  },
  {
    image: img8,
    text: 'Reputed schools and colleges within 5-7 minutes.'
  }
]

const Connectivity = () => {
  return (
    <section id='connectivity' className='scroll-mt-25 max-w-2xl mx-auto py-12 px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-[#9c6d41]'>
            Connectivity 
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 px-6 py-12">
          {info.map((item, index) => {
            return <ConnectCard key={index} {...item} />
          })}
        </div>
    </section>
  )
}

export default Connectivity