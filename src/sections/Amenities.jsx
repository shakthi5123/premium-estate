import React from 'react'
import AmeniCard from '../components/AmeniCard'
import img from '../assets/ami1.webp'
import img2 from '../assets/ami2.jpeg'
import img3 from '../assets/ami3.jpeg'

const amenitiesData = [
  {
    number: '01',
    title: 'Swimming Pool',
    text: 'Enjoy a refreshing swim in our luxurious pool, perfect for relaxation and exercise.',
    image: img,
    reverse: false
  },
  {
    number: '02',
    title: 'Gymnasium',
    text: 'Stay fit and healthy with our state-of-the-art gym facilities available 24/7.',
    image: img2,
    reverse: true
  },
  {
    number: '03',
    title: 'Garden Area',
    text: 'Relax in our beautifully landscaped garden, ideal for morning walks or evening strolls.',
    image: img3,
    reverse: false
  }
]

const Amenities = () => {
  return (
    <section id='amenities' className='scroll-mt-25 max-w-3xl mx-auto py-12 px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-center  text-[#9c6d41]'>
            Amenities
        </h2>

        <div className="max-w-6xl mx-auto px-6 py-5">
            {amenitiesData.map((data, i) => (
            <AmeniCard key={i} {...data} />
        ))}
        </div>
    </section> 
  )
}

export default Amenities