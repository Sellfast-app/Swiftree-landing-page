import { MessageCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Naija from "./svgIcons/Naija";
import Uk from "./svgIcons/Uk";
import Usa from "./svgIcons/Usa";

const Footer = () => {
  return (
    <footer className="bg-[url(/bg.png)] bg-cover bg-center text-white">
      {/* Top CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="order-1 ">
            {/* Available in Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFFFFF1A] backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-white/90">Available in:</span>
              <div className="flex items-center gap-2 bg-[#FFFFFF24] rounded-full px-2 py-1">
                <Naija />
                <Uk />
                <Usa />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight">
              Get started<br />in 5 minutes
            </h2>

            {/* Description */}
            <p className="text-white/80 text-sm mb-4 max-w-md">
              Set up an online store, accept payments, and manage operations all from your phone.
            </p>

            {/* CTA Button */}
            <Button className="bg-white text-green-800 hover:bg-white/90 rounded-xl text-sm font-semibold ">
              <a href="https://vendor.swiftree.app" target="_blank"
                rel="noopener noreferrer" className="flex items-center gap-2">
                Use the web
                <ArrowRight className="w-5 h-5" />
              </a></Button>

          </div>

          {/* Right Phone Image */}
          <div className="order-2  flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <img
                src="/public/footer-phone.png"
                alt="Swiftree Mobile App"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
            {/* Logo and Description */}
            <div className="space-y-4 lg:max-w-xs">
              <img
                src="/lovable-uploads/logo1.png"
                alt="Swiftree"
                className="h-8 w-auto "
              />
              <p className="text-white/70 text-sm leading-relaxed">
                Empowering Nigerian SMEs with WhatsApp-powered e-commerce solutions. Sell faster, grow smarter.
              </p>
              <div className="flex space-x-3">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
              {/* Product */}
              <div>
                <h3 className="font-semibold text-base mb-4 text-white">Product</h3>
                <ul className="space-y-3 text-sm text-white/60">
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Custom Storefront</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold text-base mb-4 text-white">Company</h3>
                <ul className="space-y-3 text-sm text-white/60">
                  <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-semibold text-base mb-4 text-white">Support</h3>
                <ul className="space-y-3 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold text-base mb-4 text-white">Contact</h3>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="hover:text-white transition-colors">Lagos, Nigeria</li>
                  <li><a href="tel:+2342013309477" className="hover:text-white transition-colors">+234 201 330 9477</a></li>
                  <li><a href="mailto:support@swiftree.app" className="hover:text-white transition-colors">support@swiftree.app</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm text-center md:text-left">
              © 2025 Swiftree. All rights reserved. Made with ❤️ in Nigeria.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;