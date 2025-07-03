import PropertyCard from '../components/TempCard'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpeg'
import img8 from '../assets/img8.jpeg'




const property = [
  {
    image: img1,
    flat: "2 BHK Flat",
    price: "1.65 Cr | 612 sqft",
    address: "Borivali East, Mumbai"
  },
  {
    image: img2,
    flat: "1 BHK Flat",
    price: "1 Cr | 400 sqft",
    address: "Santacruz East, Mumbai"
  },
  {
    image: img3,
    flat: "1 BHK Flat",
    price: "1.22 Cr | 620 sqft",
    address: "Bandra West, Mumbai"
  },
  {
    image: img4,
    flat: "2 BHK Flat",
    price: "2.50 Cr | 900 sqft",
    address: "Vashi, Navi Mumbai"
  },
  {
    image: img5,
    flat: "3 BHK Flat",
    price: "5.50 Cr | 900 sqft",
    address: "Andheri East, Mumbai"
  },
  {
    image: img6,
    flat: "2 BHK Flat",
    price: "2.50 Cr | 600 sqft",
    address: "Churchgate, Mumbai"
  },
  {
    image: img7,
    flat: "1 BHK Flat",
    price: "3.50 Cr | 900 sqft",
    address: "Bandstand, Mumbai"
  },
  {
    image: img8,
    flat: "2 BHK Flat",
    price: "8.50 Cr | 900 sqft",
    address: "Marinelines, Mumbai"
  }
]



const Properties = () => {

  return (
    <section id='properties' className='scroll-mt-25 py-12 px-4 md:px-16 bg-white max-w-8xl mx-auto'>
      <div>
        <h2 className='text-3xl font-bold text-[#9c6d41] md:text-4xl mb-10 text-center'>Properties</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {property.map((item, index) => (
            <PropertyCard 
            key={index}
            image={item.image}
            flat={item.flat}
            price={item.price}
            address={item.address}
            />
          ))}
      </div>
    </section>

  )
}

export default Properties