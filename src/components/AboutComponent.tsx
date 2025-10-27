import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react"; // Import LinkedIn icon

const About = () => {
    const teamMembers = [
        {
            name: "Joshua Ogbudu",
            role: "Founder & CEO, Swiftree",
            initials: "JO",
            image: "/josh.JPG",
            linkedin: "https://linkedin.com/in/joshua-ogbudu-6032b51b4", 
            experience: "Joshua Ogbudu is a data-driven entrepreneur with experience in fintech and telecommunications. Before founding Swiftree, he worked at PalmPay, a leading fintech company, and Huawei Technologies, a global telecommunications firm, where he led data and business intelligence initiatives.A graduate of Redeemer's University and Turing College (Lithuania), Joshua is passionate about leveraging AI and data to empower vendors and simplify digital commerce across Africa.",
            vision: "To revolutionize how businesses integrate sustainability into their core operations, making eco-conscious decisions the default choice for future growth."
        },
        {
            name: "Caleb Akpomughe",
            role: "Founding Engineer, Swiftree",
            initials: "CA",
            image: "/calebprofileimage.jpg",
            linkedin: "https://linkedin.com/in/caleb-akpomughe",
            experience: "Caleb Akpomughe is a versatile technology professional with a strong background in frontend development and operational leadership. He has built and integrated admin dashboards as a Frontend Developer at Bunchbay and contributed to frontend development for Chotubot. Demonstrating a capacity for leadership, Caleb also served as the Chief Operations Officer at Startev Africa, where he oversaw the company's operational strategies. A Software Engineering graduate of the Federal University of Technology Owerri, he is equipped to bridge the gap between technical execution and strategic business management.",
            vision: "To create technology that seamlessly connects environmental impact with business intelligence, empowering data-driven sustainable decisions."
        },
        {
            name: "Adindu Amarachukwu",
            role: "Founding Product Designer, Swiftree",
            initials: "EW",
            image: "/edward-small.jpg",
            linkedin: "https://linkedin.com/in/amarachukwu-chizzy-458112245",
            experience: "Adindu Amarachukwu Chizitere is a software engineer and product designer passionate about building technology that simplifies commerce and enhances everyday business interactions. Before joining Swiftree, he co-founded Dispa8ch, a logistics SaaS company developing delivery management tools for African logistics operators, and WhatSell, an e-commerce platform empowering WhatsApp vendors to digitize and scale their businesses.A graduate of the Federal University of Technology, Owerri, Adindu has experience spanning product design, frontend development, and product management, with roles in startups and organizations including Bridge AI, PHRC (NNPC), and Google Developer Student Clubs (FUTO).Driven by innovation and empathy, he is passionate about creating user-centered products that enable African entrepreneurs to thrive in the digital economy.",
            vision: "To bridge the gap between corporate ambitions and environmental action, ensuring every business decision contributes to a healthier planet."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About Swiftree</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to help businesses grow sustainably while making a positive impact on our planet.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Swiftree is an AI-driven social commerce automation platform designed to help vendors streamline operations, manage customer relationships, and scale efficiently across local and international markets.

                                We provide small and medium-sized businesses with the technology infrastructure to automate sales, payments, and logistics, enabling them to focus on growth rather than manual operations. Swiftree integrates seamlessly with WhatsApp, web, and third-party logistics providers, allowing vendors to manage their entire business from a single platform.
                                Our AI intelligently assists vendors by handling customer interactions, order processing, and partner assignments, bridging the gap between informal commerce and digital retail. By simplifying business management, Swiftree empowers African entrepreneurs to build globally competitive, data-driven businesses with minimal technical expertise.  </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Today, we're building innovative solutions that integrate sustainability into everyday business operations, making it easier for companies of all sizes to track, measure, and improve their environmental impact while achieving their business goals.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-lg border shadow-sm">
                            <h3 className="text-2xl font-semibold mb-6">Vision Statement</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                At Swiftree, our mission is to simplify commerce for local vendors by merging AI, payments, and logistics into one seamless platform.
                                We exist to help entrepreneurs, from small shop owners to growing brands, manage sales, engage customers, and deliver products effortlessly, all within the platforms they already use every day.
                                By building accessible technology that connects people, products, and payments, we&apos;re enabling a new generation of digital entrepreneurs to grow faster, smarter, and stronger, starting from Africa to the world. </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Passionate professionals dedicated to building a sustainable future for businesses worldwide
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center mb-4">
                                        <Avatar className="w-24 h-24 mb-4">
                                            <AvatarImage src={member.image} alt={member.name} />
                                            <AvatarFallback className="text-lg font-semibold">{member.initials}</AvatarFallback>
                                        </Avatar>
                                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                        <div className="flex items-center gap-2 mb-4">
                                            <p className="text-sm text-primary font-medium">{member.role}</p>
                                            <a 
                                                href={member.linkedin} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 transition-colors"
                                            >
                                                <Linkedin size={15} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-sm">
                                        <div>
                                            <h4 className="font-semibold mb-2">Experience</h4>
                                            <p className="text-muted-foreground leading-relaxed">{member.experience}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Vision</h4>
                                            <p className="text-muted-foreground leading-relaxed">{member.vision}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
                    <p className="text-muted-foreground mb-8">
                        Together, we can build a future where business success and environmental responsibility go hand in hand.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;