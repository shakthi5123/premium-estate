import ServicesCard from "../components/ServicesCard"
import BuyImg from "../assets/buy.webp"
import sellImg from "../assets/sell.webp"
import rentImg from "../assets/rent.webp"


const options = [
    {
        img: BuyImg, 
        title: "Buy a Property",
        content: "Find your place with an immersive photo experience and the most listings, including things you wont find anywhere else.",
        btn: "Search Property"
        
    },
    {
        img: sellImg, 
        title: "Sell a Property",
        content: "No matter what path you take to sell your home, we can help you navigate a successful sale, will able sell it for good price.",
        btn: "See options"

    },
    {
        img: rentImg, 
        title: "Rent a Property",
        content: "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
        btn: "Find rentals"

    }
    
]

const Services = () => {
  return (
    <section id="home" className="scroll-mt-24 py-12 px-4 md:px-16 bg-white max-w-8xl mx-auto">
        <div className="">
            <h2 className="text-3xl md:text-4xl font-bold text-[#9c6d41] text-center mb-10">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {options.map((option, index) => (
            <ServicesCard 
            key={index}
            img={option.img}
            title={option.title}
            content={option.content}
            btn={option.btn}
            />
        ))}
    </div>
    </section>
  )
}

export default Services