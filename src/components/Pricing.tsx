import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricingPlans = () => {
  const [selectedTab, setSelectedTab] = useState("monthly");

  const pricingData = {
    monthly: {
      starter: {
        price: "Free",
        billing: "No billing cycle. (₦0.00) for first month",
        features: [
          "Professional features for 1 month",
          "WhatsApp Integration",
          "Product Catalog",
          "Order Management",
          "Basic Analytics"
        ]
      },
      professional: {
        price: "₦5,000",
        billing: "Billed monthly. (₦15,000) per quarter",
        features: [
          "Custom storefront for SMEs",
          "Advanced Analytics",
          "Payment Integration",
          "Unlimited Product Listings",
          "24/7 Priority Support"
        ]
      }
    },
    quarterly: {
      starter: {
        price: "Free",
        billing: "No billing cycle. (₦0.00) for first month",
        features: [
          "Professional features for 1 month",
          "WhatsApp Integration",
          "Product Catalog",
          "Order Management",
          "Basic Analytics"
        ]
      },
      professional: {
        price: "₦13,500",
        billing: "Billed quarterly. Save ₦1,500 (10% off)",
        savings: "10",
        features: [
          "Custom storefront for SMEs",
          "Advanced Analytics",
          "Payment Integration",
          "Unlimited Product Listings",
          "24/7 Priority Support",
          "Quarterly Business Review"
        ]
      }
    },
    biannually: {
      starter: {
        price: "Free",
        billing: "No billing cycle. (₦0.00) for first month",
        features: [
          "Professional features for 1 month",
          "WhatsApp Integration",
          "Product Catalog",
          "Order Management",
          "Basic Analytics"
        ]
      },
      professional: {
        price: "₦25,500",
        billing: "Billed biannually. Save ₦4,500 (15% off)",
        savings: "15",
        features: [
          "Custom storefront for SMEs",
          "Advanced Analytics",
          "Payment Integration",
          "Unlimited Product Listings",
          "24/7 Priority Support",
          "Biannual Business Review",
        ]
      }
    },
    yearly: {
      starter: {
        price: "Free",
        billing: "No billing cycle. (₦0.00) for first month",
        features: [
          "Professional features for 1 month",
          "WhatsApp Integration",
          "Product Catalog",
          "Order Management",
          "Basic Analytics"
        ]
      },
      professional: {
        price: "₦48,000",
        billing: "Billed yearly. Save ₦12,000 (20% off)",
        savings: "20",
        features: [
          "Custom storefront for SMEs",
          "Advanced Analytics",
          "Payment Integration",
          "Unlimited Product Listings",
          "24/7 Priority Support",
          "Quarterly Business Reviews",
        ]
      }
    }
  };

  const currentPlans = pricingData[selectedTab];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Save Up To <span className="bg-[#4FCA6A] text-white px-2">20%</span> On A Yearly Plan
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Pay less for more subscription coverage when you purchase now
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="monthly" className="w-full" onValueChange={setSelectedTab}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto p-1 bg-gray-100 rounded-xl">
            <TabsTrigger 
              value="monthly" 
              className="rounded-lg data-[state=active]:bg-[#4FCA6A] data-[state=active]:text-white py-3"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger 
              value="quarterly" 
              className="rounded-lg data-[state=active]:bg-[#4FCA6A] data-[state=active]:text-white py-3"
            >
              Quarterly
            </TabsTrigger>
            <TabsTrigger 
              value="biannually" 
              className="rounded-lg data-[state=active]:bg-[#4FCA6A] data-[state=active]:text-white py-3"
            >
              Biannually
            </TabsTrigger>
            <TabsTrigger 
              value="yearly" 
              className="rounded-lg data-[state=active]:bg-[#4FCA6A] data-[state=active]:text-white py-3"
            >
              Yearly
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <Card className="border-2 border-gray-200 rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold mb-2">Starter</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    For business still figuring things out. <span className="font-semibold text-gray-900">YES, IT'S FREE FOR 1 MONTH</span>, with the starter plan, you can get started selling anything on Swiftree for Free.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-2xl font-bold mb-2">{currentPlans.starter.price}</div>
                    <div className="text-sm text-gray-500">{currentPlans.starter.billing}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {currentPlans.starter.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#4FCA6A] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-[#4FCA6A] hover:bg-[#3BA855] text-white py-6 rounded-xl text-base font-semibold">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="border-2 border-[#4FCA6A] rounded-2xl overflow-hidden relative">
                {/* Recommended Badge */}
                <div className="absolute top-0 left-0 right-0 bg-[#4FCA6A] text-white text-center py-3 font-semibold text-sm flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  RECOMMENDED PLAN
                </div>
                
                <CardHeader className="pb-4 pt-16">
                  <CardTitle className="text-xl font-bold mb-2">Professional Plan</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    For business with staff and growing needs. Set up your own sales system and storefront with features designed to help you grow your business and manage your customer base.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-">
                    <div className="text-2xl font-bold mb-2">{currentPlans.professional.price}</div>
                    <div className="text-sm text-gray-500">{currentPlans.professional.billing}</div>
                    {currentPlans.professional.savings && (
                      <div className="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Save {currentPlans.professional.savings}%
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {currentPlans.professional.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#4FCA6A] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-[#4FCA6A] hover:bg-[#3BA855] text-white py-6 rounded-xl text-base font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingPlans;