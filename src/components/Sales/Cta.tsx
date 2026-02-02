import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Cta() {
  return (
    <section className=''>
      <div className=' mx-auto'>
        <div className='relative bg-[url(/cta_swiftree.png)] bg-cover bg-center rounded-[3rem] overflow-hidden min-h-[600px] flex items-center'>
          {/* Content Container */}
          <div className='container mx-auto px-8 lg:px-16 py-16 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-8 items-center'>
              {/* Left Content */}
              <div className='text-white max-w-xl'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
                  Start Selling Smarter Today
                </h2>
                <p className='text-sm mb-8 text-[#A0A0A0] leading-relaxed'>
                  Join thousands of sellers using Swiftree to simplify their business and increase sales.
                </p>
                <Button 
                  size="lg"
                  className='bg-[#4FCA6A] hover:bg-[#45b85e] text-[#123D00] px-8 py-6 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all'
                >
                  Get Started with Swiftree
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </div>
              
              <div className='relative lg:block'>
                <img 
                  src="/ctamacbook.png" 
                  alt="Swiftree Dashboard Preview"
                  className='w-full h-auto object-contain drop-shadow-2xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta