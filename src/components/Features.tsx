import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ShoppingCart, BarChart3, Smartphone, Zap, Shield } from "lucide-react";
import nigerianBusinessOwner1 from "@/assets/nigerian-business-owner-1.jpg";
import nigerianBusinessOwner2 from "@/assets/nigerian-business-owner-2.jpg";
import nigerianMarketplace from "@/assets/nigerian-marketplace.jpg";
import LocalSales from "./svgIcons/Localsales";
import GlobalSales from "./svgIcons/GlobalSales";
import OnlineSales from "./svgIcons/OnlineSales";
import OfflineSales from "./svgIcons/OfflineSales";
import DirectSales from "./svgIcons/DirectSales";
import Wholesale from "./svgIcons/Wholesale";
import OrderManagement from "./svgIcons/OrderManagement";
import { QrCode, Link, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Paystack from "./svgIcons/Paystack";
import Sendbox from "./svgIcons/Sendbox";
import Google from "./svgIcons/Google";
import Rccg from "./svgIcons/Rccg";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Features = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      number: "01",
      title: "Store Setup",
      description: "Start onboarding in a few simple steps, provide your account, business info, WhatsApp setup and customization preferences",
      image: "/iPhone1.png"
    },
    {
      number: "02",
      title: "Add Products",
      description: "Populate your storefront and start selling by adding products to your store",
      image: "/iPhone2.png"
    },
    {
      number: "03",
      title: "Live Preview",
      description: "Your storefront is now ready to go live, capable of accepting orders, payments, payouts etc. All in one place.",
      image: "/iPhone3.png"
    },
    {
      number: "04",
      title: "QR code & Links",
      description: "Now your storefront is all set up, you'll have access to a customized QR code and shareable links to your store that you can share with anyone.",
      image: "/iPhone4.png"
    }
  ];

  const platforms = [
    { name: "Local Sales", icon: <LocalSales /> },
    { name: "Global Sales", icon: <GlobalSales /> },
    { name: "Online Sales", icon: <OnlineSales /> },
    { name: "Offline Sales", icon: <OfflineSales /> },
    { name: "Direct Sales", icon: <DirectSales /> },
    { name: "Wholesale", icon: <Wholesale /> },
  ];

  const partners = [
    { name: "PAYSTACK", logo: <Paystack />, description: "Official payment gateway" },
    { name: "SENDBOX", logo: <Sendbox />, description: "Trusted partner for delivery" },
    { name: "GOOGLE", logo: <Google />, description: "Backed by google for operations" },
    { name: "RCCG", logo: <Rccg />, description: "Top vendor on Swiftree" },
    // Add more partners for better sliding effect
    { name: "PAYSTACK", logo: <Paystack />, description: "Official payment gateway" },
    { name: "SENDBOX", logo: <Sendbox />, description: "Trusted partner for delivery" },
    { name: "GOOGLE", logo: <Google />, description: "Backed by google for operations" },
    { name: "RCCG", logo: <Rccg />, description: "Top vendor on Swiftree" },
  ]

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-primary" />,
      title: "WhatsApp Integration",
      description: "Seamlessly connect with customers through WhatsApp Business, Nigeria's most popular messaging platform.",
      image: nigerianBusinessOwner1
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-primary" />,
      title: "Smart Product Catalog",
      description: "Create beautiful product catalogs that work perfectly on mobile devices for your Nigerian customers.",
      image: nigerianBusinessOwner2
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-primary" />,
      title: "Business Analytics",
      description: "Track your sales, understand your customers, and grow your business with powerful insights.",
      image: nigerianMarketplace
    }
  ];

  const targetAudience = [
    {
      icon: <Smartphone className="h-12 w-12 text-green-primary" />,
      title: "For SMEs",
      description: "Manage inventory, payments, and orders effortlessly with Swiftree's all-in-one platform designed for Small and Medium Enterprises.",
      features: ["Inventory Management", "Payment Processing", "Order Tracking", "Customer Support"]
    },
    {
      icon: <Zap className="h-12 w-12 text-green-primary" />,
      title: "For Entrepreneurs",
      description: "Launch your online business quickly with our ready-to-use templates and WhatsApp integration.",
      features: ["Quick Setup", "Mobile-First Design", "WhatsApp Ready", "Nigerian Market Focus"]
    },
    {
      icon: <Shield className="h-12 w-12 text-green-primary" />,
      title: "For Growing Businesses",
      description: "Scale your operations with advanced features and seamless integrations tailored for the Nigerian market.",
      features: ["Advanced Analytics", "Custom Storefront", "API Access", "Priority Support"]
    }
  ];

  const progressPercentage = ((activePhase + 1) / phases.length) * 100;

  return (
    <section id="partners"  className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Platform Coverage */}
        <div className="text-center ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-center gap-1 py-1 px-2 w-fit bg-card rounded-lg border border-green-light/30 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="">{platform.icon}</div>
                <div className="text-sm font-medium text-foreground">{platform.name}</div>
              </div>
            ))}
          </div>

          {/* Partners Section with Swiper */}
          <div className="mt-8 max-w-4xl mx-auto px-4">
            <Swiper
              slidesPerView="auto" // Changed to auto for fixed width
              spaceBetween={16}
              className="partnersSwiper"
              modules={[Autoplay]}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              speed={800}
              centeredSlides={false}
              loop={true}
            >
              {partners.map((partner, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[280px] sm:!w-[280px] md:!w-[280px]" // Fixed width for all screens
                >
                  <div className="flex items-center gap-3 py-3 px-4 bg-card rounded-lg border border-green-light/30 hover:shadow-elegant transition-all duration-300 hover:scale-105 h-full w-full">
                    <div className="flex-shrink-0">{partner.logo}</div>
                    <div className="flex flex-col font-medium text-foreground min-w-0 flex-1">
                      <h3 className="text-sm text-start font-medium truncate">{partner.name}</h3>
                      <span className="text-xs text-start text-gray-500 truncate">{partner.description}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-4">
            <img src="/Group.png" alt="Partners Shadow" className="mt-2 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;