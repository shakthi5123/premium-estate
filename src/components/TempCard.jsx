

const TempCard = ({image, flat, price, address}) => {
  return (
    <div className="rounded-lg shadow-lg p-4 border-gray-200 flex flex-col justify-center hover:shadow-xl transition">
      <div className="flex justify-center mb-4">
        <img src={image} alt="image" className="h-60 w-full" />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-400">{flat}</p>
        <p className="text-md font-bold ">₹ {price}</p>
        <p className="text-sm text-gray-600">{address}</p>
      </div>
    </div>
  )
}

export default TempCard