import React from 'react'
import { Card, CardContent } from "./ui/card";

function Stats() {
    const stats = [
        { number: "550", label: "Nigerian Vendors" },
        { number: "2M", label: "Orders Processed" },
        { number: "₦5M", label: "Revenue Generated" },
        { number: "99%", label: "Customer Satisfaction" }
      ];
    
  return (
    <section className="container mx-auto px-4 sm:px-6 bg-[url(/bg1.png)] bg-cover py-10">   <div className="mt-14"> <h2 className="text-4xl text-center font-bold text-foreground mb-8 md:mb-14">
    What We&apos;ve <span className="bg-[#5BA3F8] text-white px-2">Achieved</span> Till Date
  </h2>
    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center bg-white">
          <CardContent className="py-4">
            <div className="text-3xl md:text-4xl font-bold text-[#9359F1] mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-[#A0A0A0]">
              {stat.label}
            </div></CardContent>
        </Card>
      ))}
    </div></div></section>
  )
}

export default Stats