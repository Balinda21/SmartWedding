import  { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  image: string;
  title: string;
  subtitle?: string;
}

const slides: SlideData[] = [
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/wedding-wishes-bride-and-groom-surrounded-by-their-friends-66abb2eac5cde.jpg",
    title: "Resort",
    subtitle: "Just magical",
  },
  {
    image:
      "https://sarahben.com/wp-content/uploads/2018/04/The-Orlo-Wedding-by-Sarah-Ben-Photography_0034.jpg",
    title: "Experience",
    subtitle: "Unforgettable moments",
  },
  {
    image:
      "https://carlynkphotography.com/wp-content/uploads/2018/05/Wedding-Photographers-in-Youngstown-OH_0046.jpg",
    title: "Paradise",
    subtitle: "Your dream vacation",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-white">
            <div className="text-center space-y-6">
              <h2 className="text-xl md:text-3xl lg:text-5xl font-light tracking-[0.2em] uppercase">
                {slide.subtitle}
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-[0.1em] uppercase">
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
