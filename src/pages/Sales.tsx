import Footer from "@/components/Footer"
import FAQ from "@/components/Sales/Faq"
import Header from "@/components/Sales/Header"
import Hero from "@/components/Sales/Hero"
import Problems from "@/components/Sales/Problems"
import Testimonials from "@/components/Sales/Testimonials"


const SalesPage = () => {
  return (
    <div className="min-h-screen bg-background">
        <Header/>
        <Hero/>
        <Testimonials/>
        <Problems/>
        <FAQ/>
        <Footer/>
        </div>
  )
}

export default SalesPage