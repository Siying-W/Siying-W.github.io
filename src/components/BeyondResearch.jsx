import { ChevronLeft, ChevronRight, Mountain } from "lucide-react";
import { useEffect, useState } from "react";
import climbing1 from '/assets/climbing1.jpg';
import climbing2 from '/assets/climbing2.jpg';
import climbing3 from '/assets/climbing3.jpg';
import climbing4 from '/assets/climbing4.jpg';
import climbing5 from '/assets/climbing5.jpg';
import climbingAK from '/assets/climbingAK.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BeyondResearch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [containerHeight, setContainerHeight] = useState(400);
  const headerRef = useScrollReveal();
  const textRef = useScrollReveal({ threshold: 0.1 });
  const slideshowRef = useScrollReveal({ threshold: 0.1 });
  const summaryRef = useScrollReveal({ threshold: 0.1 });

  const slides = [
    climbingAK,
    climbing1,
    climbing2,
    climbing3,
    climbing4,
    climbing5,
  ];

  const handleImageLoad = (event) => {
    const img = event.target;
    const containerWidth = img.parentElement.offsetWidth;
    const aspectRatio = img.naturalHeight / img.naturalWidth;
    const calculatedHeight = containerWidth * aspectRatio;
    setContainerHeight(Math.max(calculatedHeight, 400));
  };

  const handleSlideChange = (newSlideIndex) => {
    setCurrentSlide(newSlideIndex);
    const img = new Image();
    img.onload = () => {
      const containerWidth =
        document.querySelector(".slideshow-container")?.offsetWidth || 400;
      const aspectRatio = img.naturalHeight / img.naturalWidth;
      const calculatedHeight = containerWidth * aspectRatio;
      setContainerHeight(Math.max(calculatedHeight, 400));
    };
    img.src = slides[newSlideIndex];
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="full-width-bg mesh-bg-3 pt-16 sm:pt-20">
      <div className="container-custom">
        <div ref={headerRef} className="reveal-fade-up text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100/80 backdrop-blur-sm rounded-full icon-pulse">
              <Mountain className="w-10 h-10 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Beyond Research
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finding strength and inspiration in nature's challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="reveal-fade-left space-y-6">
            <div className="glass-card p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                I find strength and inspiration in nature, especially through
                the challenges of rock and ice climbing. Each climb refines my
                focus, demanding an appreciation for precision and a calm,
                steady mind. Alongside friends, these adventures bring out
                laughter and trust, reminding me of the joy and connection that
                comes from shared goals and pushing limits together. In every
                ascent, I'm reminded of the balance and vitality that these
                pursuits bring to my life, both mentally and physically.
              </p>
            </div>

            {/* Climbing Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  Style
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Multi-pitch Ice & Traditional Climbing
                </div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  Location
                </div>
                <div className="text-gray-600 text-sm sm:text-base leading-tight">
                  British Columbia,<br className="sm:hidden" /> Alaska
                </div>
              </div>
            </div>
          </div>

          {/* Slideshow */}
          <div ref={slideshowRef} className="reveal-fade-right relative" style={{ transitionDelay: '0.15s' }}>
            <div className="glass-card p-4">
              <div className="relative overflow-hidden rounded-xl slideshow-container">
                <div
                  className="relative"
                  style={{ height: `${containerHeight}px` }}
                >
                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide}
                      alt={`Climbing adventure ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                        index === currentSlide
                          ? "opacity-100 kenburns-active"
                          : "opacity-0"
                      }`}
                      onLoad={handleImageLoad}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/60 backdrop-blur-md hover:bg-white/80 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/30"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/60 backdrop-blur-md hover:bg-white/80 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/30"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-white w-6 h-3"
                          : "bg-white/50 hover:bg-white/75 w-3 h-3"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div ref={summaryRef} className="reveal-fade-up mt-16 text-center" style={{ transitionDelay: '0.1s' }}>
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Climbing Philosophy
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Just as in research, climbing teaches patience, problem-solving,
              and the importance of preparation. Every route is a new challenge
              that requires both mental and physical resilience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeyondResearch;
