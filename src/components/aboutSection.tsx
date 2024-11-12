import { ArrowRight } from "lucide-react";
import { Parallax } from "react-parallax";

const AboutSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* First Parallax Section */}
      <Parallax
        blur={0}
        bgImage="https://www.churchofengland.org/sites/default/files/2021-11/Lucy%20and%20Tommy%20vows.jpg" // Replace with your image
        bgImageAlt="Wedding Ceremony"
        strength={200}
        className="py-20 lg:py-32"
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-28">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-8 bg-black/40 p-8 rounded-xl backdrop-blur-sm">
              {/* Subtitle */}
              <div
                className="relative pl-4 md:pl-8 before:content-[''] before:absolute before:left-0 
                before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-3 md:before:w-6 
                before:bg-white"
              >
                <p className="text-white uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs sm:text-sm">
                  Creating magical moments since 2015
                </p>
              </div>

              {/* Main Heading */}
              <div className="space-y-1 md:space-y-2">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight md:leading-[1.2]">
                  Crafting your perfect
                </h2>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#C17437] leading-tight md:leading-[1.2]">
                  wedding story.
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-3 md:space-y-4">
                <p className="text-sm sm:text-base lg:text-lg text-white/90">
                  We transform your dream wedding into reality with meticulous
                  attention to detail and personalized service. Every
                  celebration is uniquely crafted to reflect your love story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Second Parallax Section */}
      <Parallax
        blur={0}
        bgImage="https://moorephotography.ca/wp-content/uploads/2021/03/ashley-austin-outdoor-country-wedding-in-manitoba-summer-in-sunflower-field-033-scaled.jpg" // Replace with your image
        bgImageAlt="Wedding Reception"
        strength={300}
        className="py-20 lg:py-32"
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-28">
          <div className="flex flex-col lg:flex-row items-center justify-end gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-8 bg-black/40 p-8 rounded-xl backdrop-blur-sm">
              <p className="text-sm sm:text-base lg:text-lg text-white/90">
                From intimate gatherings to grand celebrations, our experienced
                team ensures every moment is perfectly orchestrated, creating
                memories that last a lifetime.
              </p>

              {/* Button */}
              <div className="pt-4">
                <button
                  className="group flex items-center gap-2 bg-[#C17437] text-white px-5 sm:px-8 
                  py-2.5 sm:py-4 rounded-md hover:bg-[#A15415] transition-all duration-300 
                  text-xs sm:text-sm md:text-base"
                >
                  <span className="tracking-wider uppercase">Read More</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Third Parallax Section with Decorative Elements */}
      <Parallax
        blur={0}
        bgImage="https://stefaniciottiphotography.com/wp-content/uploads/2023/02/The_Big_White_Barn_Styled_Shoot_2022-88-scaled.jpg" // Replace with your image
        bgImageAlt="Wedding Details"
        strength={400}
        className="py-20 lg:py-32"
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-28">
          <div className="relative">
            {/* Decorative dots pattern */}
            <div className="absolute -left-4 -bottom-4 w-24 h-24">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#C17437] opacity-50"
                  />
                ))}
              </div>
            </div>

            {/* Content Box */}
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-8 bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl text-white font-light mb-4">
                  Your Dream Venue Awaits
                </h3>
                <p className="text-white/90">
                  Discover our curated collection of stunning venues perfect for
                  your special day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default AboutSection;
