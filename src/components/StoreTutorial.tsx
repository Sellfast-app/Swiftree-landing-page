import React, { useState } from 'react'

function StoreTutorial() {
      const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
          number: "01",
          title: "Store Setup",
          description: "Start onboarding in a few simple steps, provide your account, business info, WhatsApp setup and customization preferences",
          image: "/public/iPhone1.png"
        },
        {
          number: "02",
          title: "Add Products",
          description: "Populate your storefront and start selling by adding products to your store",
          image: "/public/iPhone2.png"
        },
        {
          number: "03",
          title: "Live Preview",
          description: "Your storefront is now ready to go live, capable of accepting orders, payments, payouts etc. All in one place.",
          image: "/public/iPhone3.png"
        },
        {
          number: "04",
          title: "QR code & Links",
          description: "Now your storefront is all set up, you'll have access to a customized QR code and shareable links to your store that you can share with anyone.",
          image: "/public/iPhone4.png"
        }
      ];

      const progressPercentage = ((activePhase + 1) / phases.length) * 100;
  return (
    <section className='bg-[url(/bg2.png)] bg-cover py-20 px-4 sm:px-6 lg:px-8'>
        <div className='conatiner mx-auto'>
             <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get Your <span className="text-white bg-[#4FCA6A] px-2">Storefront</span> In 4 Steps
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              See how your custom storefront comes to life with live preview, QR code generation, and WhatsApp integration - all in one platform.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Phase Navigation - Left Side with Vertical Progress Bar */}
              <div className="space-y-0 relative order-1 lg:order-1">
                <div className="flex gap-6">
                  {/* Vertical Progress Bar */}
                  <div className="relative flex-shrink-0 w-2">
                    {/* Background track */}
                    <div className="absolute inset-0 bg-white rounded-full"></div>

                    {/* Filled progress - fills from top based on active step */}
                    <div
                      className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#4FCA6A] to-[#3BA855] rounded-full transition-all duration-500 ease-out"
                      style={{ height: `${progressPercentage}%` }}
                    ></div>
                  </div>

                  {/* Steps List */}
                  <div className="flex-1 space-y-8">
                    {phases.map((phase, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer transition-all duration-300 ${activePhase === index ? 'opacity-100' : 'opacity-50'
                          }`}
                        onClick={() => setActivePhase(index)}
                      >
                        <div className=" space-y-3">
                          {/* Number Circle */}
                          <div className="flex items-center gap-2 md:gap-5"> <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${activePhase === index
                              ? 'bg-[#4FCA6A] text-white'
                              : index < activePhase
                                ? 'bg-[#4FCA6A]/50 text-white'
                                : 'bg-gray-300 text-gray-600'
                            }`}>
                            {phase.number}
                          </div>
                            <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${activePhase === index ? 'text-gray-900' : 'text-gray-500'
                              }`}>
                              {phase.title}
                            </h3></div>

                          {/* Content */}
                          <div className="flex-1 pt-1">

                            <p className={`text-sm leading-relaxed transition-colors duration-300 ${activePhase === index ? 'text-gray-600' : 'text-gray-400'
                              }`}>
                              {phase.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone Mockup - Right Side with Circular Progress */}
              <div className="order-2 lg:order-2 lg:sticky lg:top-24">
                <div className="relative max-w-md mx-auto">
                  {/* Circular Progress Indicator */}
                  <div className="absolute top-3 right-2 z-10">
                    <div className="relative w-13 h-13 flex items-center gap-1">
                      {/* Background circle */}
                      <svg className="w-6 h-6 md:w-10 md:h-10 transform -rotate-90 " viewBox="0 0 64 64">
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
                          stroke="#4FCA6A"
                          strokeWidth="6"
                          strokeDasharray={`${2 * Math.PI * 28}`}
                          strokeDashoffset={`${2 * Math.PI * 28 * (1 - progressPercentage / 100)}`}
                          strokeLinecap="round"
                          className="transition-all duration-500 ease-out"
                        />
                      </svg>
                      {/* Text in center */}
                      <div className=" inset-0 flex items-center justify-center">
                        <span className="font-bold text-gray-900 text-sm">{activePhase + 1}/4</span>
                      </div>
                    </div>
                  </div>

                  {/* Green Background Card */}
                  <div className="bg-[#D1FFDB] border border-[#4FCA6A] rounded-3xl px-6 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pt-12 shadow-2xl flex items-end justify-center">
                    {/* Phone Image - Full size, responsive */}
                    <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
                      <img
                        src={phases[activePhase].image}
                        alt={phases[activePhase].title}
                        className="w-full h-auto object-contain transition-opacity duration-500"
                        key={activePhase}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
       
    </section>
  )
}

export default StoreTutorial