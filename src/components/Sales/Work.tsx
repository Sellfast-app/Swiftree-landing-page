import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Work = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const chatSteps = [
    {
      number: "01",
      title: "Product & Inventory Management",
      description: "It's hard for me to keep track of orders coming in across different chats and platforms",
      image: "/product_swiftree.png",
      bgColor: "bg-[#E8F9EC]",
      borderColor: "border-[#2AB858]",
      iconBg: "bg-[#2AB858]",
      progressColor: "#2AB858",
      imagePosition: "left",
      benefits: [
        "Centralized product listing",
        "Real-time stock updates",
        "Easy bulk uploads"
      ]
    },
    {
      number: "02",
      title: "Order & Payment Tracking",
      description: "I find it hard to keep track of payment for orders coming in especially in days that are quite busy",
      image: "/order_swiftree.png",
      bgColor: "bg-[#E6F6FF]",
      borderColor: "border-[#5BA3F8]",
      iconBg: "bg-[#5BA3F8]",
      progressColor: "#5BA3F8",
      imagePosition: "right",
      benefits: [
        "Track orders in real-time",
        "Automatic payment records",
        "Digital receipts"
      ]
    },
    {
      number: "03",
      title: "Storefront Link for Customers",
      description: "As orders come in, I struggle to respond to customers on time because I juggle confirming payment, engaging enquiries all at the same time",
      image: "/storefront_swiftree.png",
      bgColor: "bg-[#FFF4E6]",
      borderColor: "border-[#EB9214]",
      iconBg: "bg-[#EB9214]",
      progressColor: "#EB9214",
      imagePosition: "left",
      benefits: [
        "Share mobile-friendly storefront",
        "One-click checkout experience",
        "Faster abandoned carts"
      ]
    },
    {
      number: "04",
      title: "Sales Insights & Analytics",
      description: "While struggling to manage orders, payments, delivery and everything in-between; I still don't get clear analytics on my business performance",
      image: "/sales_swiftree.png",
      bgColor: "bg-[#F3E8FF]",
      borderColor: "border-[#9359F1]",
      iconBg: "bg-[#9359F1]",
      progressColor: "#9359F1",
      imagePosition: "right",
      benefits: [
        "View real-time sales data",
        "Best-selling products",
        "Revenue business decisions"
      ]
    },
  ];
  const progressPercentage = ((currentStep + 1) / chatSteps.length) * 100;
  return (
    <section className="py-18 px-4 sm:px-6 lg:px-8 bg-white mt-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 px-2">
            <span className="text-white bg-[#9359F1] px-2 ">How We Make</span>
            {' '}Work Feel Less <br/> Like Work
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-4">
            Running an online business shouldn&apos;t feel overwhelming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Step Controls - Left Side */}
          <div className="space-y-4 order-1 lg:order-1">
            {chatSteps.map((step, index) => (
              <Card 
                key={index}
                className={`cursor-pointer bg-white transition-all duration-300 rounded-2xl ${
                  index === currentStep 
                    ? `${step.borderColor}   shadow-lg border` 
                    : 'border-gray-200  hover:border-gray-300'
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-3">
                    {/* Number Circle */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 ${
                      index === currentStep
                        ? `${step.iconBg} text-white`
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                        index === currentStep ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </h3>
                     
                    </div>
                  </div>

                  {/* Benefits - Only show when active */}
                  {index === currentStep && (
                    <div className="  border-gray-200">
                         <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        index === currentStep ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                      <p className="text-sm font-semibold text-gray-700 mb-3">Benefits:</p>
                      <ul className="space-y-2">
                        {step.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            
            <Button className="bg-[#4FCA6A] rounded-xl">Sign in Now <ArrowRight/></Button>
          </div>

          {/* iPhone Mockup - Right Side */}
          <div className="order-2 lg:order-2 lg:sticky lg:top-24">
            <div className="relative max-w-lg mx-auto">
              {/* Circular Progress Indicator */}
              <div className="absolute top-3 right-2 z-10">
                <div className="relative w-13 h-13 flex items-center gap-1">
                  {/* Background circle */}
                  <svg className="w-6 h-6 md:w-10 md:h-10 transform -rotate-90" viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="6"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke={chatSteps[currentStep].progressColor}
                      strokeWidth="6"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      strokeDashoffset={`${2 * Math.PI * 28 * (1 - progressPercentage / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-500 ease-out"
                    />
                  </svg>
                  {/* Text in center */}
                  <div className="inset-0 flex items-center justify-center">
                    <span className="font-bold text-gray-900 text-sm">{currentStep + 1}/4</span>
                  </div>
                </div>
              </div>
              
              {/* Colored Background Card */}
              <div className={`${chatSteps[currentStep].bgColor} ${chatSteps[currentStep].borderColor} border rounded-3xl p-8 transition-colors duration-500 relative overflow-hidden min-h-[500px]`}>
                {/* Phone and Desktop Images - Positioned left-0 or right-0 and vertically centered */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${
                  chatSteps[currentStep].imagePosition === 'left' ? 'left-0' : 'right-0'
                } w-full max-w-[400px]`}>
                  <img 
                    src={chatSteps[currentStep].image} 
                    alt={chatSteps[currentStep].title}
                    className="w-full h-auto object-contain transition-all duration-500"
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

export default Work;