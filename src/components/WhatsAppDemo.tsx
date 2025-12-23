import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ShoppingCart, CreditCard, Truck, CheckCircle } from "lucide-react";

const WhatsAppDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const chatSteps = [
    {
      number: "01",
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Customer Inquiry",
      description: "Customer initiates conversation with your business",
      image: "/whatsapp1.png"
    },
    {
      number: "02",
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Product Catalog",
      description: "Business responds with interactive product catalog",
      image: "/whatsapp2.png"
    },
    {
      number: "03",
      icon: <CreditCard className="h-5 w-5" />,
      title: "Payment",
      description: "Secure payment processing within WhatsApp",
      image: "/whatsapp3.png"
    },
    {
      number: "04",
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Receipt",
      description: "Instant receipt generation and confirmation",
      image: "/whatsapp4.png"
    },
    {
      number: "05",
      icon: <Truck className="h-5 w-5" />,
      title: "Delivery",
      description: "Delivery tracking link shared automatically",
      image: "/whatsapp5.png"
    }
  ];

  return (
    <section className="py-18 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Complete Sales Journey on{" "}
            <span className="text-white bg-[#4FCA6A] px-2">WhatsApp</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-4">
            From inquiry to delivery, everything happens seamlessly within WhatsApp. 
            No app downloads, no complicated processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Step Controls - Left Side */}
          <div className="space-y-4 order-1 lg:order-1">
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
          </div>

          {/* iPhone Mockup - Right Side */}
          <div className="order-2 lg:order-2 lg:sticky lg:top-24">
            <div className="relative max-w-md mx-auto">
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
              <div className="bg-[#E6F6FF] border border-[#06A4FF] rounded-3xl p-6 pt-12 sm:p-8 sm:pt-14 lg:p-10 lg:pt-16 shadow-2xl flex items-end justify-center">
                {/* Phone Image - Full size, responsive */}
                <div className="w-full max-w-[250px] sm:max-w-[290px] lg:max-w-[320px]">
                  <img 
                    src={chatSteps[currentStep].image} 
                    alt={chatSteps[currentStep].title}
                    className="w-full h-auto object-contain transition-opacity duration-500"
                    key={currentStep}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;