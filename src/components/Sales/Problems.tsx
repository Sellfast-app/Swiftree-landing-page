import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ShoppingCart, CreditCard, Truck, CheckCircle, ArrowRight } from "lucide-react";

const Problems = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const chatSteps = [
    {
      number: "01",
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Managing orders across chats and platforms",
      description: "It’s hard for me to keep track of orders coming in across different chats and platforms",
      image: "/whatsapp1.png"
    },
    {
      number: "02",
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Tracking payments manually",
      description: "I find it hard to keep track of payment for orders coming in especially in days that are quire busy",
      image: "/whatsapp2.png"
    },
    {
      number: "03",
      icon: <CreditCard className="h-5 w-5" />,
      title: "Losing customers due to slow responses",
      description: "As orders come in, I struggle to respond to customers on time because I juggle confirming payment, engaging enquiries all at the same time",
      image: "/whatsapp3.png"
    },
    {
      number: "04",
      icon: <CheckCircle className="h-5 w-5" />,
      title: "No clear insight into sales performance",
      description: "While struggling to manage orders, payments, delivery and everything in-between; I still don’t get clear analytics on my business performance",
      image: "/whatsapp4.png"
    },
  ];

  return (
    <section className="py-18 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 px-2">
          How We{""}
            <span className="text-white bg-[#4FCA6A] px-2">Solve</span>
            Your Problems
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-4">
          Running an online business shouldn&apos;t feel overwhelming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Step Controls - Left Side */}
          <div className="space-y-4 order-1 lg:order-1">
            <p className="text-center text-xs md:text-sm">Pain Point</p>
            {chatSteps.map((step, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 rounded-xl ${
                  index <= currentStep 
                    ? 'border-[#4FCA6A] bg-[#4FCA6A]/10 shadow-md' 
                    : 'border-gray-200 bg-white hover:border-[#4FCA6A]/30'
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <CardContent className="p-4 space-y-5">
                  <div className="flex items-center gap-4">
                    {/* Number Circle */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      index <= currentStep
                        ? 'bg-[#4FCA6A] text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-base font-bold transition-colors duration-300 ${
                        index <= currentStep ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className={`text-sm transition-colors duration-300 ${
                    index <= currentStep ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            <Button className="bg-[#4FCA6A] rounded-xl">Sign in Now <ArrowRight/></Button>
          </div>

          {/* iPhone Mockup - Right Side */}
          <div className="order-2 lg:order-2 lg:sticky lg:top-24">
          <p className="text-center text-xs md:text-sm mb-2">Solution</p>
            <div className="relative max-w-lg mx-auto">
              {/* Restart Button */}
              <div className="absolute top-2 right-4 z-10">
                <Button 
                  onClick={() => setCurrentStep(0)}
                  size="sm"
                  className="bg-[#00A5FF] hover:bg-[#0095E8] text-white rounded-lg text-xs font-medium shadow-lg"
                >
                  Restart Demo
                </Button>
              </div>
              
              {/* Blue Background Card */}
              <div className="bg-[#E6F6FF] border border-[#06A4FF] rounded-3xl p-6 pt-12 sm:p-8 sm:pt-14 lg:p-10 lg:pt-16 flex items-end justify-center">
                {/* Phone Image - Full size, responsive */}
                <div className="w-full max-w-[210px] sm:max-w-[250px] lg:max-w-[280px]">
                  <img 
                    src={chatSteps[currentStep].image} 
                    alt={chatSteps[currentStep].title}
                    className="w-full h-auto object-contain transition-opacity duration-500"
                    key={currentStep}
                  />
                </div>
              </div>
            </div>
            <small className=" text-center text-[#A0A0A0] mt-2">Swiftree brings everything together — so you can focus on selling, not chasing details.</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;