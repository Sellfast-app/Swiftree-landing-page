import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on the about page
  const isAboutPage = location.pathname === "/about";
  
  // Text color classes based on page
  const textColorClass = isAboutPage 
    ? "text-gray-900"  // Dark text for about page
    : "text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]";  // White text with shadow for other pages
  
  const hoverColorClass = isAboutPage 
    ? "hover:text-green-600"  // Green hover for about page
    : "hover:text-green-primary";  // Default green hover
  
  const buttonTextColor = isAboutPage 
    ? "text-gray-900 hover:bg-gray-100"  // Dark text, light hover for about page
    : "text-white hover:bg-green-light/50";  // White text for other pages
  
  const mobileTextColorClass = isAboutPage 
    ? "text-gray-900 hover:text-green-600"  // Dark text for mobile on about page
    : "text-foreground hover:text-green-primary";  // Default for other pages

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free for 1 month",
      description: "Professional features for 1 month",
      features: ["WhatsApp Integration", "Product Catalog", "Order Management", "Basic Analytics"]
    },
    {
      name: "Professional",
      price: "₦5,000/month",
      description: "Custom storefront for SMEs",
      features: ["Custom Storefront", "Advanced Analytics", "Payment Integration", "Unlimited Products", "24/7 Support"]
    }
  ];

  return (
    <header className={`fixed top-0 w-full bg-transparent backdrop-blur-md z-50 ${isAboutPage ? '' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="/"> <img 
              src={isAboutPage ? "/lovable-uploads/logo1.png" : "/lovable-uploads/logo.png"} 
              alt="Swiftree" 
              className={`h-8 w-auto ${isAboutPage ? '' : 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'}`}
            />  </a>
           
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
            <a 
                href="#pricing" 
                className={`${textColorClass} ${hoverColorClass} transition-colors`}
              >
                Pricing
              </a>
              
              {/* <a 
                href="#features" 
                className={`${textColorClass} ${hoverColorClass} transition-colors`}
              >
                Features
              </a> */}
              <a 
                href="/about" 
                className={`${textColorClass} ${hoverColorClass} transition-colors ${isAboutPage ? 'font-semibold text-green-600' : ''}`}
              >
                About
              </a>
              <a 
                href="/privacy" 
                className={`${textColorClass} ${hoverColorClass} transition-colors`}
              >
                Privacy
              </a>
            </nav>
          </div>
    
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className={`${buttonTextColor} transition-colors ${isAboutPage ? 'shadow-none' : ''}`}
              asChild
            >
              <a href="https://vendor.swiftree.app/login" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
            <Button 
              className={`bg-[#206730] hover:opacity-90 transition-opacity ${isAboutPage ? 'shadow-none' : 'shadow-lg'}`}
              asChild
            >
              <a href="https://vendor.swiftree.app/signup" target="_blank" rel="noopener noreferrer">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </a> 
            </Button>
          </div>
             {/* Mobile menu button */}
             <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={isAboutPage ? "hover:bg-gray-100 shadow-none" : "hover:bg-green-light/50"}
              >
                {isMenuOpen ? (
                  <X className={`h-6 w-6 ${isAboutPage ? 'text-gray-900' : 'text-gray-900'}`} />
                ) : (
                  <Menu className={`h-6 w-6 ${isAboutPage ? 'text-gray-900' : 'text-gray-900'}`} />
                )}
              </Button>
            </div>
        </div>
         {/* Mobile Navigation */}
         {isMenuOpen && (
            <div className="md:hidden">
              <div className={`px-2 pt-2 pb-3 space-y-1 ${isAboutPage ? 'bg-white' : 'bg-background'} border-t ${isAboutPage ? 'border-gray-200' : 'border-green-light/20'}`}>
                {/* <a
                  href="#features"
                  className={`block px-3 py-2 text-base font-medium ${mobileTextColorClass} transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a> */}
                <a
                  href="/about"
                  className={`block px-3 py-2 text-base font-medium ${mobileTextColorClass} transition-colors ${isAboutPage ? 'font-semibold text-green-600' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/privacy"
                  className={`block px-3 py-2 text-base font-medium ${mobileTextColorClass} transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy
                </a>
                <div className="px-3 py-2">
                  <div className={`text-base font-medium ${isAboutPage ? 'text-gray-900' : 'text-foreground'} mb-2`}>Pricing</div>
                  {pricingPlans.map((plan) => (
                    <div key={plan.name} className={`ml-4 mb-3 p-3 ${isAboutPage ? 'bg-gray-50' : 'bg-green-light/20'} rounded-lg ${isAboutPage ? 'shadow-none' : ''}`}>
                      <div className={`font-medium ${isAboutPage ? 'text-gray-900' : ''}`}>{plan.name}</div>
                      <div className="text-sm font-bold text-green-primary">{plan.price}</div>
                      <div className={`text-sm ${isAboutPage ? 'text-gray-700' : 'text-muted-foreground'}`}>{plan.description}</div>
                    </div>
                  ))}
                </div>
                <div className="px-3 py-2 space-y-2">
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start ${isAboutPage ? 'text-gray-900 hover:bg-gray-100 shadow-none' : 'hover:bg-green-light/50'}`} 
                    asChild
                  >
                    <a 
                      href="https://vendor.swiftree.app/login" 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </a>
                  </Button>
                  <Button 
                    className={`w-full bg-[#206730] hover:opacity-90 transition-opacity ${isAboutPage ? 'shadow-none' : ''}`} 
                    asChild
                  >
                    <a 
                      href="https://vendor.swiftree.app/signup" 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Start Free Trial
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;