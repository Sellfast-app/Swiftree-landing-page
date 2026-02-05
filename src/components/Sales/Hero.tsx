import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Circle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-0 px-4 sm:px-6 lg:px-8 bg-[url(/bg.png)] bg-cover bg-center">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-6 px-3 py-2 bg-white text-black border-green-medium/30 hover:bg-green-light/70 transition-colors inline-block sm:inline-flex items-center"
          >
            <a href="#partners" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <span className="rounded-full bg-[#4FCA6A] text-white px-2 py-1 flex items-center gap-1 mb-1 sm:mb-0">
                <span className="rounded-full bg-[#628055] p-0.5">
                  <Circle className="h-1.5 w-1.5 bg-white rounded-full" />
                </span>
                <span className="text-xs sm:text-sm">Limited-Time Offer</span>
              </span>
              <span className="text-xs sm:text-sm">
                Get <span className="text-[#4FCA6A] font-bold">20% off</span> when you sign up 
                <span className="hidden xs:inline"> today</span>
              </span>
              <ArrowRight className="ml-1 h-4 w-4 flex-shrink-0 hidden sm:block" />
            </a>
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            <span className="block text-[#628055]">Sell faster. Manage smarter.</span>
            <span className="block bg-gradient-to-r from-green-primary to-green-dark bg-clip-text text-[#4FCA6A]">
              Grow without stress.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 animate-slide-up">
            Swiftree gives online sellers everything they need to manage products, orders, payments, and customers 
            all from one powerful dashboard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button
              size="lg"
              className="bg-white hover:opacity-90 transition-opacity shadow-elegant text-lg text-[#123D00] px-8 py-6"
              asChild
            >
              <a href="https://vendor-plum.vercel.app/signup" target="_blank" rel="noopener noreferrer">
                Start Selling Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-0 text-green-primary bg-[#206730] hover:bg-green-light/50 text-lg text-white px-8 py-6"
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative rounded-2xl">
            <img
              src="/dashboard1.png"
              alt="Swiftree Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;