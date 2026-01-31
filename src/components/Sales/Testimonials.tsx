"use client"
import React from 'react'
import { Card } from '@/components/ui/card'
import './Testimonials.css'

function Testimonials() {
  const leftColumnTestimonials = [
    {
      name: "Sonya's Hut",
      handle: "@lushut",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonya",
      text: "This is the best experience ever, I never have to worry about a POS machine when I have one right on my mobile device. For those you still having doubt abeg do download Swiftree, and save yourself stress and money.",
      rating: 5
    },
    {
      name: "Ankata Grooms",
      handle: "@sarahkitchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ankata",
      text: "One thing I love about Swiftree is it's affordability and ease of use, like there was literally little to no learning curve, it was as if I've used it before. I definitely recommend.",
      rating: 4.5
    },
    {
      name: "Grayson's Mastery",
      handle: "@sarahkitchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grayson",
      text: "MY GOD!!! Ever since I started using this platform, my business has literally been on auto pilot, I now ave time to focus on what's important (growing my business) while I leave the rest to Swiftree.",
      rating: 4.5
    }
  ]

  const centerColumnTestimonials = [
    {
      name: "GAVRE",
      handle: "@lushut",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gavre",
      text: "This is the best experience ever, I never have to worry about a POS machine when I have one right on my mobile device. For those you still having doubt abeg do download Swiftree, and save yourself stress and money.",
      rating: 4.5
    },
    {
      name: "Sarah's Kitchen",
      handle: "@sarahkitchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      text: "One thing I love about Swiftree is it's affordability and ease of use, like there was literally little to no learning curve, it was as if I've used it before. I definitely recommend.",
      rating: 4.5
    },
    {
      name: "D'Light Cuisine",
      handle: "@sarahkitchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DLight",
      text: "MY GOD!!! Ever since I started using this platform, my business has literally been on auto pilot, I now ave time to focus on what's important (growing my business) while I leave the rest to Swiftree.",
      rating: 4.5
    },
    {
      name: "Luxe Suits",
      handle: "@sarahkitchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luxe",
      text: "MY GOD!!! Ever since I started using this platform, my business has literally been on auto pilot, I now ave time to focus on what's important (growing my business) while I leave the rest to Swiftree.",
      rating: 4.5
    }
  ]

  const rightColumnTestimonials = [
    {
      name: "KJ Fits",
      handle: "@lushut",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=KJ",
      text: "This is the best experience ever, I never have to worry about a POS machine when I have one right on my mobile device. For those you still having doubt abeg do download Swiftree, and save yourself stress and money.",
      rating: 4.5
    },
    {
      name: "Bake n Cook's",
      handle: "@sarahkitchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bake",
      text: "One thing I love about Swiftree is it's affordability and ease of use, like there was literally little to no learning curve, it was as if I've used it before. I definitely recommend.",
      rating: 4.5
    },
    {
      name: "Dee Dee's Wears",
      handle: "@sarahkitchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DeeDee",
      text: "MY GOD!!! Ever since I started using this platform, my business has literally been on auto pilot, I now ave time to focus on what's important (growing my business) while I leave the rest to Swiftree.",
      rating: 4.5
    }
  ]

  interface Testimonial {
    name: string;
    handle: string;
    avatar: string;
    text: string;
    rating: number;
  }

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-400">
            {index < fullStars ? '★' : index === fullStars && hasHalfStar ? '⯨' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <Card className="p-6 rounded-2xl shadow-sm bg-white border border-gray-100 mb-4">
      <div className="flex items-start gap-4 mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{testimonial.text}</p>
    </Card>
  )

  return (
    <section className='mx-auto px-4 sm:px-8 py-16 overflow-hidden bg-white'>
      <div className='max-w-7xl mx-auto '>
        <h3 className='text-4xl font-bold text-foreground text-center'>
          Trusted By <span className='bg-[#876AFE] text-white px-2'>Growing Businesses</span>
        </h3>
        <h3 className='text-2xl md:text-4xl font-bold text-center mt-2'>
          Across Africa
        </h3>
        <p className='text-sm text-center text-gray-500 mt-4 mb-12'>
          Join thousands of successful business owners who are already growing with Swiftree
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Left Column - Scrolling Up */}
          <div className="relative h-[600px] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-gray-50 via-transparent to-gray-50"></div>
            <div className="animate-scroll-up space-y-4">
              {[...leftColumnTestimonials, ...leftColumnTestimonials].map((testimonial, index) => (
                <TestimonialCard key={`left-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Center Column - Scrolling Down */}
          <div className="relative h-[600px] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-gray-50 via-transparent to-gray-50"></div>
            <div className="animate-scroll-down space-y-4">
              {[...centerColumnTestimonials, ...centerColumnTestimonials].map((testimonial, index) => (
                <TestimonialCard key={`center-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Right Column - Scrolling Up */}
          <div className="relative h-[600px] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-gray-50 via-transparent to-gray-50"></div>
            <div className="animate-scroll-up-delayed space-y-4">
              {[...rightColumnTestimonials, ...rightColumnTestimonials].map((testimonial, index) => (
                <TestimonialCard key={`right-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 pt-8 mt-9'>
        <div className='flex gap-1 items-center'>
            <span className='text-xs md:text-sm'>Powering </span>
            <h3 className='text-4xl font-bold text-white bg-[#4FCA6A] px-2'>10,000+</h3>
            <span className='text-xs md:text-sm'>Sellers</span>
        </div>
        <div className='flex gap-1 items-center'>
            <span className='text-xs md:text-sm'>Processed</span>
            <h3 className='text-4xl font-bold text-white bg-[#5BA3F8] px-2'>₦2.4B+</h3>
            <span className='text-xs md:text-sm'>In Transactions</span>
        </div>
        <div className='flex gap-1 items-center'>
            <span className='text-xs md:text-sm'>Powering </span>
            <h3 className='text-4xl font-bold text-white bg-[#FFB347] px-2'>1M+</h3>
            <span className='text-xs md:text-sm'>Orders</span>
        </div>
      </div>
    </section>
  )
}

export default Testimonials