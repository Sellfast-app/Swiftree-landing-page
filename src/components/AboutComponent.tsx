import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {  ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Vision from "./svgIcons/Vision";
import BPhone from "./svgIcons/BPhone";
import OPhone from "./svgIcons/OPhone";
import GPhone from "./svgIcons/GPhone";
import PPhone from "./svgIcons/PPhone";
import Linkedin from "./svgIcons/Linkedin";

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [teamSlide, setTeamSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const whySwiftreeReasons = [
        {
            icon: <BPhone />,
            color: "bg-blue-500",
            textColor: "text-[#5BA3F8]",
            title: "We dey for you 24/7",
            description: "We're literally one call, text, email, dm away from answering your questions or sorting any business difficulties you may encounter"
        },
        {
            icon: <OPhone/>,
            color: "bg-orange-500",
            textColor: "text-[#FEA436]",
            title: "Less Stress With Us",
            description: "With us you automatically confirm orders, put your business on auto-pilot, issue receipts and get financial analysis and reports without any stress to your brain."
        },
        {
            icon: <GPhone/>,
            color: "bg-green-500",
            textColor: "text-[#4FCA6A]",
            title: "Operate Autonomously",
            description: "Swiftree provides you with the ease that you can literally sleep and your business would run itself, all through our WhatsApp integrations and automation system."
        },
        {
            icon: <PPhone/>,
            color: "bg-purple-500",
            textColor: "text-[#9359F1]",
            title: "Paddy Wey No Dey Fall Hand",
            description: "With us, you'll experience ZERO downtime, enjoy smooth business management and automation, 24/7 awesome customer service, secure payments and deliveries."
        }
    ];

    const teamMembers = [
        {
            name: "Joshua Ogbudu",
            nameColor: "text-[#5BA3F8]",
            roleStyle: "bg-[#E6F6FF] text-[#5BA3F8] border-[#5BA3F8]",
            role: "Founder & CEO, Swiftree",
            image: "/josh.png",
            linkedin: "https://linkedin.com/in/joshua-ogbudu-6032b51b4",
            experience: "Gen Z tech founder and former Business Intelligence Manager (Palmpay) with experience driving point-of-sale(POS) growth and contributing to over 450 million in monthly transaction volume within Nigeria's fintech ecosystem. Selected among 45 out of 2000+ candidates for a European Union-backed venture program in Lithuania. Holds a Postgraduate Diploma in Data Analytics from Turing College and a Bsc in Computer Science from Redeemer's University. Passionate about building scalable technology that powers commerce and economic growth across Africa",
            vision: "To revolutionize how businesses integrate sustainability into their core operations, making eco-conscious decisions the default choice for future growth."
        },
        {
            name: "Charles David",
            nameColor: "text-[#4ECA6A]",
            roleStyle: "bg-[#E3FFE9] text-[#4ECA6A] border-[#4ECA6A]",
            role: "Co-founder & COO, Swiftree",
            image: "/dave.png",
            linkedin: "https://www.linkedin.com/in/david-ukap-a4a669173",
            experience: "David Ukap, an accomplished Cyber Security Professional, NCSC Advisor, ensures operational excellence and robust security. A graduate of Redeemer's University and the University of Staffordshire with an MSc in Cybersecurity, David has over five years' experience developing security strategies for startups and businesses. A certified UK NCSC assessor, he has guided over 100 UK organizations in adopting stringent cybersecurity frameworks (CE, CE+, ISO 27001, ICA). He also publishes articles offering practical security advice for the digital economy.",
            vision: "To revolutionize how businesses integrate sustainability into their core operations, making eco-conscious decisions the default choice for future growth."
        },
        {
            name: "Caleb Akpomughe",
            nameColor: "text-[#123E00]",
            roleStyle: "bg-[#E9FBE1] text-[#123E00] border-[#123E00]",
            role: "Founding Frontend Engineer, Swiftree",
            image: "/caleb.png",
            linkedin: "https://linkedin.com/in/caleb-akpomughe",
            experience: "Caleb Akpomughe is a versatile technology professional with a strong background in frontend development and operational leadership. He has built and integrated admin dashboards as a Frontend Developer at Bunchbay and contributed to frontend development for Chotubot. Demonstrating a capacity for leadership, Caleb also served as the Chief Operations Officer at Startev Africa, where he oversaw the company's operational strategies. A Software Engineering graduate of the Federal University of Technology Owerri, he is equipped to bridge the gap between technical execution and strategic business management.",
            vision: "To create technology that seamlessly connects environmental impact with business intelligence, empowering data-driven sustainable decisions."
        },
        {
            name: "Adindu Amarachukwu",
            nameColor: "text-[#F3D40D]",
            roleStyle: "bg-[#FFFADB] text-[#F3D40D] border-[#F3D40D]",
            role: "Founding Product Designer, Swiftree",
            image: "/edward.png",
            linkedin: "https://linkedin.com/in/amarachukwu-chizzy-458112245",
            experience: "Adindu Amarachukwu Chizitere is a software engineer and product designer passionate about building technology that simplifies commerce and enhances everyday business interactions. Before joining Swiftree, he co-founded Dispa8ch, a logistics SaaS company developing delivery management tools for African logistics operators, and WhatSell, an e-commerce platform empowering WhatsApp vendors to digitize and scale their businesses. A graduate of the Federal University of Technology, Owerri, Adindu has experience spanning product design, frontend development, and product management, with roles in startups and organizations including Bridge AI, PHRC (NNPC), and Google Developer Student Clubs (FUTO). Driven by innovation and empathy, he is passionate about creating user-centered products that enable African entrepreneurs to thrive in the digital economy.",
            vision: "To bridge the gap between corporate ambitions and environmental action, ensuring every business decision contributes to a healthier planet."
        },
        {
            name: "Jeffery Osaze",
            nameColor: "text-[#13239E]",
            roleStyle: "bg-[#E7EAFF] text-[#13239E] border-[#13239E]",
            role: "Customer Experience Manager, Swiftree",
            image: "/Jeff.png",
            linkedin: "https://www.linkedin.com/in/jeffery-osaze-a5960019b",
            experience: "Jeffery Osaze is a results-driven customer service and operations professional. He has measurably improved service efficiency, client relationships, and organizational growth, increasing repeat business by 15%, customer retention by 30%, and team onboarding speed by 40%. His background in international relations, strong communication, empathy, and ability to resolve issues under pressure, evidenced by leading community outreach for 200+ people, consistently enhances customer experiences.",
            vision: "To revolutionize how businesses integrate sustainability into their core operations, making eco-conscious decisions the default choice for future growth."
        },
        {
            name: "Femi Olatunji",
            nameColor: "text-[#123D00]",
            roleStyle: "bg-[#E9FBE1] text-[#123D00] border-[#123D00]",
            role: "Founding Operations Manager, Swiftree",
            image: "/Femi.png",
            linkedin: "www.linkedin.com/in/femimisi",
            experience: "Olatunji Femi is an Operations Manager skilled in streamlining processes, coordinating teams, and improving operational efficiency. He applies a data-driven, solutions-focused approach to challenges while supporting organizational goals with clear communication and disciplined execution. Olatunji holds a degree from the University of Ibadan, which strengthens his analytical and leadership foundation and supports his ability to deliver consistent, high-quality results.",
            vision: "To revolutionize how businesses integrate sustainability into their core operations, making eco-conscious decisions the default choice for future growth."
        },
        {
            name: "Anthony Okolie",
            nameColor: "text-[#123D00]",
            roleStyle: "bg-[#E9FBE1] text-[#123D00] border-[#123D00]",
            role: "Founding Backend Engineer, Swiftree",
            image: "/Tony.png",
            linkedin: "https://www.linkedin.com/in/kingtony-technologies",
            experience: "Okolie Anthony is a  Backend Engineer whose first experience started  at Dispa8ch in 2023, developing his backend skills. He then completed a nine-month frontend internship at RavenPay Africa (2024-2025) while continuing to hone his backend expertise. In 2025, he co-founded Swiftree Technologies, contributing to a revolutionary e-commerce technology. That same year, he earned a bachelor's degree in Information Technology from FUTO.",
            vision: "To revolutionize how businesses integrate sustainability into their core operations, making eco-conscious decisions the default choice for future growth."
        },
    ];

    // Prepare items for infinite sliding effect
    const getInfiniteItems = () => {
        if (whySwiftreeReasons.length === 0) return [];
        
        // Create array with clones at both ends for seamless infinite scroll
        // Structure: [last-1, last, ...original..., first, second]
        return [
            ...whySwiftreeReasons.slice(-2), // Last 2 items at the beginning
            ...whySwiftreeReasons,
            ...whySwiftreeReasons.slice(0, 2) // First 2 items at the end
        ];
    };

    const infiniteItems = getInfiniteItems();
    const totalOriginalItems = whySwiftreeReasons.length;
    const totalInfiniteItems = infiniteItems.length;
    const originalStartIndex = 2; // Starting index accounting for prepended clones

    const handlePrevSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide(prev => {
            const newIndex = prev - 1;
            
            // If we're at the start of original items (index 2), jump to the cloned items
            if (newIndex < originalStartIndex) {
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentSlide(originalStartIndex + totalOriginalItems - 1);
                }, 10);
                return newIndex;
            }
            
            return newIndex;
        });
    };

    const handleNextSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide(prev => {
            const newIndex = prev + 1;
            
            // If we're at the end of original items, jump to the beginning clones
            if (newIndex >= originalStartIndex + totalOriginalItems) {
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentSlide(originalStartIndex);
                }, 10);
                return newIndex;
            }
            
            return newIndex;
        });
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 4000);
        
        return () => clearInterval(interval);
    }, [currentSlide]);

    const handlePrevTeam = () => {
        setTeamSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    };

    const handleNextTeam = () => {
        setTeamSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    };

    // Calculate visible slide index for dots
    const getVisibleSlideIndex = () => {
        if (currentSlide < originalStartIndex) {
            return totalOriginalItems - (originalStartIndex - currentSlide);
        } else if (currentSlide >= originalStartIndex + totalOriginalItems) {
            return currentSlide - (originalStartIndex + totalOriginalItems);
        } else {
            return currentSlide - originalStartIndex;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Why Swiftree */}
            <section className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Why <span className="bg-[#4FCA6A] text-white px-3 py-1">Swiftree</span> ?
                        </h1>
                        <div className="hidden md:flex items-center gap-3">
                            <Button onClick={handlePrevSlide} variant="ghost" size="icon" className="rounded-full w-10 h-10 ">
                                <ArrowLeft className="w-6 h-6" />
                            </Button>
                            <Button onClick={handleNextSlide} variant="ghost" size="icon" className="rounded-full w-10 h-10 ">
                                <ArrowRight className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>

                    {/* Infinite Sliding Carousel */}
                    <div className="relative overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-out"
                            style={{ 
                                transform: `translateX(-${currentSlide * (100 / (window.innerWidth < 768 ? 1 : 3))}%)`,
                                transition: isTransitioning ? 'transform 500ms ease-out' : 'none'
                            }}
                        >
                            {infiniteItems.map((reason, index) => (
                                <div 
                                    key={`${reason.title}-${index}`}
                                    className="flex-shrink-0 w-full md:w-1/3 px-3"
                                >
                                    <Card className="h-full transition-all duration-300 bg-white shadow-sm hover:shadow-lg rounded-2xl hover:-translate-y-1">
                                        <CardContent className="pt-6 px-4 sm:px-6">
                                            <div className="flex gap-3 items-center mb-4">
                                                <div className={`${reason.color} w-12 h-12 rounded-full flex items-center justify-center text-white`}>
                                                    {reason.icon}
                                                </div>
                                                <h3 className={`text-xl font-semibold ${reason.textColor}`}>
                                                    {reason.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {reason.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex md:hidden items-center justify-center gap-3 mt-8">
                        <Button onClick={handlePrevSlide} variant="outline" size="icon" className="rounded-full w-12 h-12 border-2 hover:bg-green-50">
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button onClick={handleNextSlide} size="icon" className="rounded-full w-12 h-12 bg-[#4FCA6A] hover:bg-[#3BA855] text-white">
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>

                    <div className="flex md:hidden justify-center gap-2 mt-6">
                        {whySwiftreeReasons.map((_, index) => (
                            <button 
                                key={index} 
                                onClick={() => {
                                    setIsTransitioning(true);
                                    setCurrentSlide(index + originalStartIndex);
                                }} 
                                className={`w-2 h-2 rounded-full transition-all ${getVisibleSlideIndex() === index ? 'bg-[#4FCA6A] w-8' : 'bg-gray-300'}`} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="bg-[#5BA3F8] px-1 text-white">Story,</span> Our Journey</h2>
                            <p className="leading-relaxed mb-4">
                                Swiftree is an AI-driven social commerce automation platform designed to help vendors streamline operations, manage customer relationships, and scale efficiently across local and international markets. We provide small and medium-sized businesses with the technology infrastructure to automate sales, payments, and logistics, enabling them to focus on growth rather than manual operations.
                            </p>
                        </div>
                        <div className="p-8 rounded-lg border border-[#BCE6FF] bg-[#EBF8FF] shadow-sm">
                            <div className="flex gap-3 items-center mb-4">
                                <Vision />
                                <h3 className="text-2xl font-semibold text-[#5BA3F8]">Vision Statement</h3>
                            </div>
                            <p className="text-[#A2C0D2] leading-relaxed mb-4">
                                At Swiftree, our mission is to simplify commerce for local vendors by merging AI, payments, and logistics into one seamless platform. We exist to help entrepreneurs grow faster, smarter, and stronger.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Meet The <span className="text-white bg-[#4FCA6A] px-2">Team</span>
                        </h2>
                        <p className="text-[#A0A0A0] max-w-2xl mx-auto">
                            Passionate professionals dedicated to building a sustainable future for businesses worldwide
                        </p>
                    </div>

                    <div className="relative">
                        <div className="grid md:grid-cols-2  items-start">
                            {/* Left - Profile Card */}
                            <div className="flex justify-center md:justify-start">
                                <div className="w-full max-w-[370px] sm:max-w-[400px] h-[500px] sm:h-[550px] ">
                                <img src={teamMembers[teamSlide].image} alt={teamMembers[teamSlide].name} className=" object-cover" />

                                </div>
                            </div>

                            {/* Right - Content */}
                            <div className="space-y-6">
                                <h3 className={`text-3xl md:text-4xl font-bold ${teamMembers[teamSlide].nameColor}`}>{teamMembers[teamSlide].name}</h3>
                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className={`inline-block ${teamMembers[teamSlide].roleStyle} px-4 py-2.5 rounded-xl text-sm font-medium border `}>
                                        {teamMembers[teamSlide].role}
                                    </span>
                                    <a href={teamMembers[teamSlide].linkedin} target="_blank" rel="noopener noreferrer" className=" ">
                                        <Linkedin/>
                                    </a>
                                </div>
                                <div className=" p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-3">Experience</h4>
                                    <p className="text-gray-700 leading-relaxed text-sm">{teamMembers[teamSlide].experience}</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-center md:justify-end gap-3 mt-8 md:absolute md:top-0 md:right-0 md:mt-0">
                            <Button onClick={handlePrevTeam} variant="ghost" size="icon" className=" w-11 h-11 ">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                            <Button onClick={handleNextTeam} variant="ghost" size="icon" className=" w-11 h-11 ">
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;