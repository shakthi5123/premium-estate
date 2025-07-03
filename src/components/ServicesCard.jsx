

const ServicesCard = ({img, title, content, btn}) => {
  return (
    <div className="rounded-lg p-4 border border-gray-200 flex flex-col justify-center shadow hover:shadow-xl transition">
        <div className="flex justify-center mb-4">
        <img src={img} alt="logo" className="w-40 bg-white" />
        </div>
        <h3 className="text-lg text-black font-bold text-center">{title}</h3>
        <p className="text-center text-gray-600 mt-2">{content}</p>
        <button className="bg-white text-[#9c6d41] px-2 py-2 mt-3 rounded-lg border ">{btn}</button>
    </div>
  )
}

export default ServicesCard