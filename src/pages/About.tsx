import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/AboutComponent"; 

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About/>
      <Footer />
    </div>
  );
};

export default AboutPage;
