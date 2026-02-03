import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Cart from '../svgIcons/Cart';
import Chat from '../svgIcons/Chat';
import Chart from '../svgIcons/Chart';
import AlarmClock from '../svgIcons/AlarmClock';

function Business() {
  const businessCards = [
    {
      icon: Chat,
      title: 'Sell Faster',
      description: 'Simplified ordering and checkout means quicker conversions.',
      image: '/business1.png',
      imageAlt: 'Chat interface',
      bg: 'bg-gradient-to-br from-green-50 to-green-100',
      iconBg: 'bg-[#D4FFDD]',
      titleText: 'text-[#2AB858]',
      descriptionText: 'text-[#2AB858]',
      buttonBg: 'bg-[#2AB858]',
      buttonHover: 'hover:bg-green-600',
      imagePosition: 'center',
      imageWidth: ''
    },
    {
      icon: Cart,
      title: 'Look Professional',
      description: 'Give customers a smooth, trustworthy buying experience.',
      image: '/business2.png',
      imageAlt: 'Product showcase',
      bg: 'bg-gradient-to-br from-orange-50 to-orange-100',
      iconBg: 'bg-[#FFEBD2]',
      titleText: 'text-[#FF8F2E]',
      descriptionText: 'text-[#FF8F2E]',
      buttonBg: 'bg-[#FF8F2E]',
      buttonHover: 'hover:bg-orange-600',
      imagePosition: 'right',
      imageWidth: 'max-w-full sm:max-w-xs'
    },
    {
      icon: Chart,
      title: 'Grow Confidently',
      description: 'Insights help you scale with data, not guesswork.',
      image: '/business3.png',
      imageAlt: 'Analytics dashboard',
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconBg: 'bg-[#DAF0FD]',
      titleText: 'text-[#06A4FF]',
      descriptionText: 'text-[#06A4FF]',
      buttonBg: 'bg-[#06A4FF]',
      buttonHover: 'hover:bg-blue-600',
      imagePosition: 'center',
      imageWidth: 'max-w-full sm:max-w-xs'
    },
    {
      icon: AlarmClock,
      title: 'Save Time',
      description: 'Manage everything from one dashboard instead of multiple apps.',
      image: '/business4.png',
      imageAlt: 'Store management',
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
      iconBg: 'bg-[#EDE2FF]',
      titleText: 'text-[#9359F1]',
      descriptionText: 'text-[#9359F1]',
      buttonBg: 'bg-[#9359F1]',
      buttonHover: 'hover:bg-purple-600',
      imagePosition: 'right',
      imageWidth: 'max-w-full sm:max-w-xs'
    }
  ];

  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-foreground mb-2'>
            Why Businesses
          </h2>
          <h2 className='text-4xl font-bold text-foreground'>
            <span className='bg-[#4A90E2] text-white px-2  inline-block'>
              Choose Swiftree
            </span>
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
          {businessCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`${card.bg} rounded-3xl p-8 relative overflow-hidden flex flex-col min-h-[400px]`}
              >
                {/* Header with Icon and Title */}
                <div className='flex items-center gap-3 mb-4'>
                  <div className={`${card.iconBg} rounded-full p-3`}>
                    <Icon className='h-6 w-6 text-white' />
                  </div>
                  <h3 className={`text-xl font-semibold ${card.titleText}`}>
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className={`${card.descriptionText} mb-6 text-sm`}>
                  {card.description}
                </p>

                {/* Button */}
                <Button
                  className={`${card.buttonBg} ${card.buttonHover} text-white w-fit`}
                >
                  Sign In Now
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>

                {/* Image - positioned based on card config */}
                <div
                  className={`absolute bottom-0 ${
                    card.imagePosition === 'center'
                      ? 'left-0 right-0 flex justify-center'
                      : 'right-0'
                  }`}
                >
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className={`${card.imageWidth} h-auto rounded-lg`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Business