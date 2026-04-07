import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Mountain } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import climbing1 from '/assets/climbing1.jpg';
import climbing2 from '/assets/climbing2.jpg';
import climbing3 from '/assets/climbing3.jpg';
import climbing4 from '/assets/climbing4.jpg';
import climbing5 from '/assets/climbing5.jpg';
import climbingAK from '/assets/climbingAK.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BeyondResearch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStory, setShowStory] = useState(false);
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  const containerRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchPosRef = useRef(50); // current horizontal % for mobile
  // Smoothing: target vs current position, interpolated via rAF
  const targetYRef = useRef(50);
  const currentYRef = useRef(50);
  const rafRef = useRef(null);
  const headerRef = useScrollReveal();
  const heroRef = useScrollReveal({ threshold: 0.05 });

  const slides = [
    climbingAK,
    climbing1,
    climbing2,
    climbing3,
    climbing4,
    climbing5,
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Reset object-position to center when slide changes
  useEffect(() => {
    touchPosRef.current = 50;
    targetYRef.current = 50;
    currentYRef.current = 50;
    const container = containerRef.current;
    if (!container) return;
    const imgs = container.querySelectorAll('.slide-img');
    imgs.forEach((img) => {
      img.style.objectPosition = '50% 50%';
    });
  }, [currentSlide]);

  // Smooth interpolation loop — lerps currentY toward targetY
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      const prev = currentYRef.current;
      const next = lerp(prev, targetYRef.current, 0.08);
      // Stop updating if close enough
      if (Math.abs(next - prev) > 0.05) {
        currentYRef.current = next;
        const container = containerRef.current;
        if (container) {
          const activeImg = container.querySelector('.slide-img-active');
          if (activeImg) {
            activeImg.style.objectPosition = `50% ${next}%`;
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Desktop: mouse movement sets the target vertical position.
  // Center 40% of container height maps to the full 0–100% range.
  const handleMouseMove = useCallback((e) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const rawRatio = (e.clientY - rect.top) / rect.height;
    const zoneTop = 0.3;
    const zoneBottom = 0.7;
    const mappedRatio = (rawRatio - zoneTop) / (zoneBottom - zoneTop);
    const clamped = Math.max(0, Math.min(1, mappedRatio));
    targetYRef.current = clamped * 100;
  }, []);

  // Mobile: touch drag controls horizontal position
  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (touchStartRef.current === null) return;
    const container = containerRef.current;
    if (!container) return;

    const deltaX = e.touches[0].clientX - touchStartRef.current;
    const containerWidth = container.offsetWidth;
    // Sensitivity: full container drag = 100% shift
    const deltaPercent = (deltaX / containerWidth) * 100;
    // Invert: drag right → image shifts left (reveals right side)
    const newPos = Math.max(0, Math.min(100, touchPosRef.current - deltaPercent));

    const activeImg = container.querySelector('.slide-img-active');
    if (activeImg) {
      activeImg.style.objectPosition = `${newPos}% 50%`;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Persist current position
    const container = containerRef.current;
    if (!container) return;
    const activeImg = container.querySelector('.slide-img-active');
    if (activeImg) {
      const pos = activeImg.style.objectPosition;
      const match = pos.match(/([\d.]+)%/);
      if (match) touchPosRef.current = parseFloat(match[1]);
    }
    touchStartRef.current = null;
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="full-width-bg mesh-bg-3 pt-16 sm:pt-20 pb-16 flex-col">
      {/* Section Header */}
      <div className="container-custom">
        <div ref={headerRef} className="reveal-fade-up text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100/80 dark:bg-primary-900/40 backdrop-blur-sm rounded-full icon-pulse">
              <Mountain className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Beyond Research
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Finding strength and inspiration in nature's challenges
          </p>
        </div>
      </div>

      {/* Full-width immersive hero carousel */}
      <div ref={heroRef} className="reveal-fade-up w-full" style={{ transitionDelay: '0.1s' }}>
        <div
          ref={containerRef}
          className="relative w-full h-[75vh] lg:h-screen min-h-[500px] overflow-hidden cursor-move"
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides — object-cover with JS-controlled object-position */}
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Climbing adventure ${index + 1}`}
              className={`slide-img absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide
                  ? "opacity-100 slide-img-active"
                  : "opacity-0"
              }`}
            />
          ))}

          {/* Dark gradient overlay — lighter on mobile when toggles are closed */}
          <div className={`absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500 ${
            showStory || showPhilosophy
              ? 'bg-gradient-to-t from-black/80 via-black/30 to-black/10'
              : 'bg-gradient-to-t from-black/60 via-black/10 to-transparent lg:from-black/80 lg:via-black/20 lg:to-black/10'
          }`} />

          {/* Desktop: always-visible text overlay */}
          <div className="absolute inset-0 z-10 hidden lg:flex flex-col justify-end pointer-events-none">
            <div className="container-custom pb-20 sm:pb-24">
              <div className="max-w-3xl space-y-6">
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                  I find strength and inspiration in nature, especially through
                  the challenges of rock and ice climbing. Each climb refines my
                  focus, demanding an appreciation for precision and a calm,
                  steady mind. Alongside friends, these adventures bring out
                  laughter and trust, reminding me of the joy and connection that
                  comes from shared goals and pushing limits together.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Multi-pitch Ice & Traditional Climbing
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    British Columbia & Alaska
                  </span>
                </div>
                <p className="text-white/60 text-base italic max-w-xl">
                  Just as in research, climbing teaches patience, problem-solving,
                  and the importance of preparation. Every route is a new challenge
                  that requires both mental and physical resilience.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: toggle-based text overlay */}
          <div className="absolute bottom-16 left-0 right-0 z-10 lg:hidden px-4">
            {/* Toggle buttons row */}
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => { setShowStory((v) => !v); setShowPhilosophy(false); }}
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  showStory
                    ? 'bg-white/25 border-white/30 text-white'
                    : 'bg-black/30 border-white/10 text-white/80'
                } backdrop-blur-md`}
              >
                My Story
                {showStory ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
              </button>
              <button
                onClick={() => { setShowPhilosophy((v) => !v); setShowStory(false); }}
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  showPhilosophy
                    ? 'bg-white/25 border-white/30 text-white'
                    : 'bg-black/30 border-white/10 text-white/80'
                } backdrop-blur-md`}
              >
                Philosophy
                {showPhilosophy ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
              </button>
            </div>

            {/* "My Story" dropdown */}
            <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
              showStory ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-black/15 backdrop-blur-sm rounded-xl border border-white/10 p-4 space-y-3">
                <p className="text-white/90 text-sm leading-relaxed">
                  I find strength and inspiration in nature, especially through
                  the challenges of rock and ice climbing. Each climb refines my
                  focus, demanding an appreciation for precision and a calm,
                  steady mind. Alongside friends, these adventures bring out
                  laughter and trust, reminding me of the joy and connection that
                  comes from shared goals and pushing limits together.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    Multi-pitch Ice & Traditional
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    BC & Alaska
                  </span>
                </div>
              </div>
            </div>

            {/* "Philosophy" dropdown */}
            <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
              showPhilosophy ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-black/15 backdrop-blur-sm rounded-xl border border-white/10 p-4">
                <p className="text-white/80 text-sm italic leading-relaxed">
                  Just as in research, climbing teaches patience, problem-solving,
                  and the importance of preparation. Every route is a new challenge
                  that requires both mental and physical resilience.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows — z-[5] on mobile so text overlay (z-10) sits above */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[5] lg:z-20 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[5] lg:z-20 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-6 h-3"
                    : "bg-white/40 hover:bg-white/60 w-3 h-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeyondResearch;
