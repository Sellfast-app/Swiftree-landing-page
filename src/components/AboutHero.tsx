

const AboutHero = () => {
    return (
        <section className="pt-24 pb-12 px-4 bg-[url(/bg3.png)] bg-cover bg-center sm:px-6 lg:px-8 ">
            <div className="container mx-auto py-20">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
                        <span className="block text-[#A3D9AF]">Helping African Businesses.</span>
                        <span className="block bg-gradient-to-r from-green-primary to-green-dark bg-clip-text text-[#4FCA6A]">
                            Grow Sustainably..
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#A0A0A0] max-w-3xl mx-auto mb-8 animate-slide-up">
                        Swiftree is building the platform that empowers African entrepreneurs to build globally competitive, data-driven businesses with little to no technical expertise.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;