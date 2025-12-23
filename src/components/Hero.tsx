import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Circle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[url(/bg.png)] bg-cover bg-center">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 bg-white text-black border-green-medium/30 hover:bg-green-light/70 transition-colors  "
          >
            <a href="#partners" className="flex items-center">
                        <span className="rounded-full bg-[#4FCA6A] text-white p-2 flex items-center gap-1 mr-2"><span className="rounded-full bg-[#628055] "><Circle className="h-2 w-2 bg-white rounded-full text-center"/></span> New</span>
                Introducing Swiftree&apos;s Partners <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            <span className="block text-[#628055]">Sell Faster.</span>
            <span className="block bg-gradient-to-r from-green-primary to-green-dark bg-clip-text text-[#4FCA6A]">
              Grow Smarter.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 animate-slide-up">
            Simplifying Digital Commerce for Nigerian SMEs. Power your business with WhatsApp integration
            and build your dream e-commerce experience for your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button
              size="lg"
              className="bg-white hover:opacity-90 transition-opacity shadow-elegant text-lg text-[#123D00] px-8 py-6"
              asChild
            >
              <a href="https://vendor-plum.vercel.app/signup" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-0 text-green-primary bg-[#206730] hover:bg-green-light/50 text-lg text-white px-8 py-6"
            >
              Test Live Demo
            </Button>
          </div>
        </div>


        {/* Hero Image */}
        <div className="relative max-w-6xl mx-auto animate-float">
          <div className="relative   rounded-2xl p-8 ">
            <img
              src="/dashboard.png"
              alt="Swiftree Dashboard"
              className="w-full h-auto "
            />
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-float">
              {/* ✅ WhatsApp Ready */}
            </div>
            <div className="absolute -bottom-4 -left-4 text-foreground px-4 py-2 rounded-full text-sm font-medium  animate-float">
              {/* 🇳🇬 Made for Nigeria */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;