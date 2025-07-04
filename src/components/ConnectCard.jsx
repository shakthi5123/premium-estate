import React from 'react'

const ConnectCard = ({image, text}) => {
  return (
    <div className="text-center">
        <div className="w-full gap-2 mb-5 flex justify-center">
            <img src={image} alt="Connectivity" className="w-16 h-16 object-contain" />
        </div>
        <div className="">{text}</div>
    </div>
  )
}

export default ConnectCard