import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';



const FaqsCard = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='border-b border-[#9c6d41] py-4 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        <div className='flex justify-between items-center'>
            <h3 className='font-medium text-lg'>{question}</h3>
            {isOpen ? <FaChevronUp className='text-[#9c6d41]' /> : <FaChevronDown className='text-[#9c6d41]' />}
        </div>
        {isOpen && <p className='mt-2 text-gray-600'>{answer}</p>}

    </div>
  )
}

export default FaqsCard