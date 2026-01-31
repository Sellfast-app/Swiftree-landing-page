import React, { useState } from 'react'
import { Search, ChevronDown, Plus, X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  const mainFAQData: FAQItem[] = [
    {
      question: "Is Swiftree free to start?",
      answer: "Swiftree is completely free to use for the first month after signup, after which you'd have to subscribe to a plan.",
      category: "onboarding"
    },
    {
      question: "Can I use Swiftree on my phone?",
      answer: "Yes! Swiftree is fully optimized for mobile devices. You can access it through your mobile browser or download our mobile app for iOS and Android.",
      category: "onboarding"
    },
    {
      question: "Do I need technical skills?",
      answer: "No technical skills required! Swiftree is designed to be user-friendly and intuitive. Our onboarding process will guide you through everything you need to know.",
      category: "onboarding"
    },
    {
      question: "How do payments work?",
      answer: "Swiftree integrates with multiple payment providers. You can accept payments via cards, bank transfers, and mobile money. Funds are typically settled to your account within 24-48 hours.",
      category: "payments"
    },
    {
      question: "Can I upgrade later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges accordingly.",
      category: "billing"
    }
  ];

  const additionalFAQData: FAQItem[] = [
    {
      question: "How does Swiftree handle shipping and delivery?",
      answer: "Swiftree integrates with reliable logistics partners for seamless delivery. You can track shipments in real-time, get delivery estimates, and manage fulfillment directly from your dashboard.",
      category: "features"
    },
    {
      question: "Can I integrate Swiftree with my existing website?",
      answer: "Yes, Swiftree offers API access and embeddable widgets that allow you to integrate our shopping features into your existing website or mobile app. Contact our support team for integration assistance.",
      category: "features"
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "Your data is preserved for 90 days after cancellation. You can reactivate your account within this period to regain access. After 90 days, data may be permanently deleted according to our data retention policy.",
      category: "billing"
    },
    {
      question: "Is there a transaction limit per month?",
      answer: "Transaction limits vary based on your subscription plan. Basic plans have reasonable limits, while premium plans offer higher or unlimited transactions. Check our pricing page for specific details.",
      category: "payments"
    },
    {
      question: "How does the AI-powered customer support work?",
      answer: "Our AI analyzes customer inquiries and provides instant responses based on your product catalog and business policies. You can customize responses, set automated workflows, and the AI learns from your manual interventions to improve over time.",
      category: "features"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "onboarding", label: "Onboarding" },
    { value: "payments", label: "Payments" },
    { value: "billing", label: "Billing" },
    { value: "features", label: "Features" }
  ];

  // Combine FAQs based on showAllFAQs state
  const allFAQs = showAllFAQs ? [...mainFAQData, ...additionalFAQData] : mainFAQData;

  const filteredFAQs = allFAQs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleShowAllFAQs = () => {
    setShowAllFAQs(!showAllFAQs);
    // If we're showing more FAQs, open the first additional one
    if (!showAllFAQs) {
      setOpenIndex(mainFAQData.length);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[url(/bg2.png)] bg-cover relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="bg-[#4FCA6A] text-white px-2">Frequently</span>{' '}
            <span className="text-gray-900">Asked Questions</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Everything you'd like to know about Swiftree
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for your most important questions"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48 bg-white border-gray-200 rounded-xl">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-200 ${
                index >= mainFAQData.length && showAllFAQs ? 'animate-fadeIn' : ''
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">
                  {faq.question}
                  {index >= mainFAQData.length && showAllFAQs && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      New
                    </span>
                  )}
                </span>
                {openIndex === index ? (
                  <X className="h-5 w-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-sm">
          <button
            onClick={toggleShowAllFAQs}
            className="text-[#4FCA6A] font-semibold hover:underline inline-flex items-center gap-2 transition-all duration-300"
          >
            {showAllFAQs ? 'Show Less FAQs' : 'View All FAQs'}
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAllFAQs ? 'rotate-180' : ''}`} />
          </button>
          
          {showAllFAQs && (
            <p className="mt-4 text-gray-500 text-sm">
              Showing {allFAQs.length} frequently asked questions
            </p>
          )}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No FAQs found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-[#4FCA6A] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* Add custom animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQ;