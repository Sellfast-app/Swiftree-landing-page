import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ShoppingCart, BarChart3, Smartphone, Zap, Shield } from "lucide-react";
import nigerianBusinessOwner1 from "@/assets/nigerian-business-owner-1.jpg";
import nigerianBusinessOwner2 from "@/assets/nigerian-business-owner-2.jpg";
import nigerianMarketplace from "@/assets/nigerian-marketplace.jpg";
import Whatsapp from "./svgIcons/Whatsapp";
import Product from "./svgIcons/Product";
import Business from "./svgIcons/Business";
import Smes from "./svgIcons/Smes";
import Enterpreneurs from "./svgIcons/Enterpreneurs";
import Growing from "./svgIcons/Growing";

const Features1 = () => {
    const platforms = [
        { name: "Local Sales", icon: "🏪" },
        { name: "Global Sales", icon: "🌍" },
        { name: "Online Sales", icon: "💻" },
        { name: "Offline Sales", icon: "🏬" },
        { name: "Direct Sales", icon: "👥" },
        { name: "Wholesale", icon: "📦" }
    ];

    const features = [
        {
            icon: <Product />,
            title: "Smart Product Catalog",
            description: "Create beautiful product catalogs that work perfectly on mobile devices for your Nigerian customers.",
            image: "/public/Frame 1000001967.png",
            bg: "bg-[#FFF4E6]",
            border: "border-[#F8E0BE]",
            text: "text-[#FF8F2E]",
            descriptionText: "text-[#D9BCA3]",
            justify: "justify-end",
            justify1: "justify-start"
        },
        {
            icon: <Business />,
            title: "Business Analytics",
            description: "Track your sales, understand your customers, and grow your business with powerful insights.",
            image: "/public/Group 2631.png",
            bg: "bg-[#EBF8FF]",
            border: "border-[#BCE6FF]",
            text: "text-[#06A4FF]",
            descriptionText: "text-[#A2C0D2] text-right",
            justify: "justify-start",
            justify1: "justify-end"
        }
    ];

    const targetAudience = [
        {
            icon: <Smes />,
            title: "For SMEs",
            description: "Manage inventory, payments, and orders effortlessly with Swiftree's all-in-one platform designed for Small and Medium Enterprises.",
            features: ["Inventory Management", "Payment Processing", "Order Tracking", "Customer Support"]
        },
        {
            icon: <Enterpreneurs/>,
            title: "For Entrepreneurs",
            description: "Launch your online business quickly with our ready-to-use templates and WhatsApp integration.",
            features: ["Quick Setup", "Mobile-First Design", "WhatsApp Ready", "Nigerian Market Focus"]
        },
        {
            icon: <Growing/>,
            title: "For Growing Businesses",
            description: "Scale your operations with advanced features and seamless integrations tailored for the Nigerian market.",
            features: ["Advanced Analytics", "Custom Storefront", "API Access", "Priority Support"]
        }
    ];

    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="container mx-auto">

                {/* Main Features1 */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-start  text-foreground mb-3">
                        Why Nigerian Businesses
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-start  text-foreground mb-12">
                        <span className="bg-[#5BA3F8] text-white px-1">Choose Swiftree</span>
                    </h2>
                    <div className="grid grid-cols-1">
                        <div className="bg-[#EDFFF1] border-[#AFFFC9] w-full rounded-lg flex flex-col md:flex-row items-center p-6">
                            <div className="w-full md:w-[50%]">
                                <div className="flex gap-3 mb-4 items-center">
                                    <Whatsapp />
                                    <h3 className="text-2xl font-medium text-[#2AB858] mt-4">WhatsApp Integration</h3></div>
                                <span className="text-[#95C2A3] text-sm">Seamlessly connect with customers through WhatsApp Business, Nigeria's most popular messaging platform.</span>
                            </div>
                            <div className="w-full md:w-[50%]">
                                <img src="/public/Group3.png" alt="" className="" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={` items-center p-6 rounded-lg ${feature.bg} border ${feature.border} transition-all duration-300 hover:shadow-md`}
                                >
                                    <div className={`flex gap-3 mb-4 items-center ${feature.justify1}`}>{feature.icon}
                                        <h3 className={`text-2xl font-medium ${feature.text}`}>{feature.title}</h3></div>
                                    <div>

                                        <p className={`text-sm text-muted-foreground mt-1 line ${feature.descriptionText} `} >{feature.description}</p>
                                    </div>
                                    <div className={`mt-4 flex ${feature.justify}`}>
                                        <img
                                            src={`${feature.image}`}
                                            className="max-w-full sm:max-w-xs  h-auto rounded-lg"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Target Audience */}
                <div>
                    <div className="text-center mb-12">
                      
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Built for <span className="bg-[#FFB347] text-white px-1">Nigerian</span> SMEs
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {targetAudience.map((audience, index) => (
                            <Card key={index} className="border-green-light/30 hover:shadow-elegant transition-all duration-300 bg-card">
                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4">
                                        {audience.icon}
                                    </div>
                                    <CardTitle className="text-xl text-foreground">{audience.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground">{audience.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {audience.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                                <div className="w-2 h-2 bg-green-primary rounded-full mr-3"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features1;