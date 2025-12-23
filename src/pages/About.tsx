import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/AboutComponent"; 
import AboutHero from "@/components/AboutHero";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHero/>
      <About/>
      <Footer />
    </div>
  );
};

export default AboutPage;
