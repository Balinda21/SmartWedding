import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full sm:px-6 lg:px-28 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 lg:pr-8">
            {/* Subtitle */}
            <div
              className="relative pl-6 md:pl-8 before:content-[''] before:absolute before:left-0 
              before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-4 md:before:w-6 
              before:bg-gray-400"
            >
              <p className="text-gray-500 uppercase tracking-[0.2em] text-xs sm:text-sm">
                Creating magical moments since 2015
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#C17437] leading-[1.2]">
                Crafting your perfect
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#C17437] leading-[1.2]">
                wedding story.
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-600">
              <p className="text-sm sm:text-base lg:text-lg">
                We transform your dream wedding into reality with meticulous
                attention to detail and personalized service. Every celebration
                is uniquely crafted to reflect your love story.
              </p>

              <p className="text-sm sm:text-base lg:text-lg">
                From intimate gatherings to grand celebrations, our experienced
                team ensures every moment is perfectly orchestrated, creating
                memories that last a lifetime.
              </p>
            </div>

            {/* Button */}
            <div className="pt-4">
              <button
                className="group flex items-center gap-2 bg-[#8B8378] text-white px-6 sm:px-8 
                py-3 sm:py-4 rounded-md hover:bg-[#776F66] transition-all duration-300 
                text-sm sm:text-base"
              >
                <span className="tracking-wider uppercase">Read More</span>
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Right Image Section with Layered Design */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Background decorative element */}
              <div
                className="absolute top-4 sm:top-6 -right-4 sm:-right-6 w-full h-full 
                "
              />

              {/* Main image container */}
              <div className="relative z-10 rounded-xl overflow-hidden">
                <img
                  src="https://www.themezaa.com/html/leadgen/demo/hotel/images/application-screenshot-img-06.png"
                  alt="Wedding Celebration"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
                  object-cover transition-transform duration-700"
                />
              </div>

              {/* Optional decorative dots pattern */}
              <div className="absolute -left-4 -bottom-4 w-24 h-24 hidden sm:block">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#C17437] opacity-50"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
