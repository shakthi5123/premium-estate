import Hero from "../components/Hero"
import Properties from "./Properties"
import About from "./About"
import Contact from "./Contact"
import Navigation from "../components/Navigation"
import Services from "./Services"
import Footer from "../components/Footer"






const Home = () => {
  return (
    <main className='scroll-smooth bg-[#ffffff]'>
      <Navigation />
      <section id="home" className="mb-5"><Hero /></section>
      <Services />
      <section><Properties /></section>
      <section><About /></section>
      <section><Contact /></section>
      <Footer />

    </main>
  )
}

export default Home