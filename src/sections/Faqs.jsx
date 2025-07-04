import React from 'react'
import FaqsCard from '../components/FaqsCard'

const faqsData = [
  {
    question: 'What is the location of the project?',
    answer: 'The project is located near Mumbai Airport, just 3.5km away.'
  },
  {
    question: 'Are there parking facilities available?',
    answer: 'Yes, there is ample parking space for residents and visitors.'
  },
  {
    question: 'Is the project RERA approved?',
    answer: 'Yes, the project is RERA certified and follows all regulations.'
  },
  {
    question: 'What amenities are included?',
    answer: 'Swimming pool, gym, landscaped garden, and more.'
  }
]

const Faqs = () => {
  return (
    <section id='faqs' className='scroll-mt-25 max-w-lg mx-auto py-12 px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-[#9c6d41]'>
            FAQs
        </h2>

        {faqsData.map((faq, index) => {
            return <FaqsCard key={index} {...faq} />
        })}
    </section>
  )
}

export default Faqs