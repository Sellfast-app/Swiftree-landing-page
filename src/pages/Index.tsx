import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import PhaseInterface from "@/components/PhaseInterface";
import StorefrontGenerator from "@/components/StorefrontGenerator";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Features1 from "@/components/Features1";
import PricingPlans from "@/components/Pricing";
import Stats from "@/components/Stats";
import StoreTutorial from "@/components/StoreTutorial";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <StoreTutorial/>
      <Features1/>
      <WhatsAppDemo />
      <StorefrontGenerator />
      <Testimonials />
      <Stats/>
      <PricingPlans/>
      <Footer />
    </div>
  );
};

export default Index;
