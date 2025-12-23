import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "./ui/card";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [items, setItems] = useState([]);

  const testimonials = [
    {
      name: "Shop Tadi",
      business: "Shop Tadi",
      location: "Lagos State, Nigeria",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      website: "www.shoptadi.swiftree.store",
      quote: "Swiftree app is honestly a must have for any business owner!! From book keeping to analytics, to website and now the latest marketplace and Swiftree's payment suite; Managing my business has become easier and more structured. I'm happy to be a swiftpreneur",
      rating: 4.5
    },
    {
      name: "Ibrahim Musa",
      business: "TechHub",
      location: "Abuja, Nigeria",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      website: "www.techhub.swiftree.store",
      quote: "The QR code feature is incredible! I put it on my business cards and flyers. Customers scan it and immediately start shopping. Sales increased by 400% in just 3 months.",
      rating: 5
    },
    {
      name: "Chioma Okafor",
      business: "Chi's Kitchen",
      location: "PH, Nigeria",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      website: "www.mamachi.swiftree.store",
      quote: "My food business was purely offline before Swiftree. Now I get orders from all over Port Harcourt through WhatsApp. The payment links make everything so smooth!",
      rating: 5
    }
  ];

  const stats = [
    { number: "5,000+", label: "Nigerian Vendors" },
    { number: "$2M+", label: "Orders Processed" },
    { number: "$32.5M+", label: "Revenue Generated" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  // Prepare items for infinite scrolling
  useEffect(() => {
    if (testimonials.length > 0) {
      // Create array with clones at both ends for seamless infinite scroll
      // Structure: [last, first, ...original..., last, first]
      const clonedArray = [
        ...testimonials.slice(-1), // Last item (for previous)
        ...testimonials.slice(0, 1), // First item (for previous)
        ...testimonials,
        ...testimonials.slice(-1), // Last item (for next)
        ...testimonials.slice(0, 1) // First item (for next)
      ];
      setItems(clonedArray);
      // Start at index 2 to account for prepended clones
      setCurrentIndex(2);
    }
  }, []);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      
      // If we're at the start of original items (index 2), jump to cloned items
      if (newIndex < 2) {
        // Wait for transition to complete, then reset
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(2 + testimonials.length - 1);
        }, 300);
        return newIndex;
      }
      
      return newIndex;
    });
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      
      // If we're at the end of original items, jump to cloned items
      if (newIndex >= 2 + testimonials.length) {
        // Wait for transition to complete, then reset
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(2);
        }, 300);
        return newIndex;
      }
      
      return newIndex;
    });
  };

  // Get visible card index for stacking
  const getVisibleCardIndex = (index) => {
    const totalItems = testimonials.length;
    if (totalItems === 0) return -1;
    
    // Convert infinite index to original index
    let originalIndex = index - 2;
    if (originalIndex < 0) originalIndex = totalItems + originalIndex;
    if (originalIndex >= totalItems) originalIndex = originalIndex - totalItems;
    
    return originalIndex;
  };

  // Get stack position for card animation
  const getStackPosition = (cardIndex) => {
    // Calculate offset from current index
    const offset = (cardIndex - currentIndex + items.length) % items.length;
    
    // Only show 3 cards in the stack
    if (offset >= 0 && offset < 3) {
      return offset; // 0 = front, 1 = behind, 2 = further back
    }
    return null; // Card is not visible
  };

  // AUTO-SLIDE FUNCTIONALITY - Moves every 3 seconds
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds
    
    return () => clearInterval(autoSlideInterval);
  }, [currentIndex, isTransitioning]); // Add dependencies

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-orange-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
          </div>
        </div>
      );
    }

    return stars;
  };

  if (items.length === 0) return null;

  return (
    <div id="testimonials" className="py-15 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-1">
            Trusted by Nigerian <span className="bg-[#876AFE] text-white px-2">Entrepreneurs</span> All Over
          </h2>
          <span className="text-4xl font-bold text-foreground mb-4">The World</span>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto mt-4">
            Join thousands of successful business owners who are already growing with Swiftree
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="max-w-xl mx-auto mb-16 px-4">
          <div
            className="relative h-[360px] sm:h-[400px] md:h-[350px]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Stacked Cards with infinite scrolling */}
            {items.map((testimonial, index) => {
              const stackPosition = getStackPosition(index);
              
              if (stackPosition === null) return null;
              
              const originalIndex = getVisibleCardIndex(index);
              
              return (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="absolute inset-0 transition-all duration-300 ease-out cursor-pointer"
                  style={{
                    transform: `translateY(${-stackPosition * 20}px) scale(${1 - stackPosition * 0.03})`,
                    zIndex: items.length - stackPosition,
                    opacity: stackPosition === 0 ? 1 : 0.6,
                    bottom: `${stackPosition * 20}px`,
                    transition: isTransitioning ? 'all 300ms ease-out' : 'none'
                  }}
                  onClick={() => stackPosition === 0 && handleNext()}
                >
                  <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200 h-full">
                    {/* Profile Header */}
                    <div className="flex flex-col justify-between md:flex-row items-start mb-4 sm:mb-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-base sm:text-lg text-foreground flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <span>{testimonial.business}</span>
                            <div className="flex items-center">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                          <div className="text-xs sm:text-sm text-green-600 flex items-center gap-1 mt-1">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="truncate">{testimonial.website}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right text-xs sm:text-sm text-gray-500 flex-shrink-0 ml-2">
                        <div>{testimonial.location.split(',')[0]}</div>
                        <div className="font-medium">{testimonial.location.split(',')[1]}</div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                      {testimonial.quote}
                    </div>

                    {/* Navigation Arrows - Only visible on current card */}
                    {stackPosition === 0 && (
                      <div className="flex justify-end gap-2">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevious();
                          }}
                          variant="outline"
                          size="icon"
                          className="rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-[#F5F5F5] border-0 "
                        >
                          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                          }}
                          variant="outline"
                          size="icon"
                          className="rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-[#F5F5F5] border-0 "
                        >
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Testimonials;