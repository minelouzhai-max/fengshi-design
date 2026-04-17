import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && contentRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(0, 1 - scrollY / 600);
        const translateY = scrollY * 0.4;
        contentRef.current.style.opacity = String(opacity);
        contentRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="枫石空间设计"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <p className="text-[var(--color-gold)] text-sm md:text-base tracking-[0.3em] mb-6 font-sans-sc">
          宁静设计 / 自然生活
        </p>
        
        <h1 className="font-serif-sc text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide">
          枫石空间
        </h1>
        
        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-px bg-white/60" />
          <span className="text-white/80 text-lg md:text-xl font-light tracking-widest">DR</span>
          <span className="w-12 h-px bg-white/60" />
        </div>
        
        <p className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed mb-12 font-sans-sc">
          我们打造尊重时间流逝之美的空间，
          <br />
          在简约中寻找完美，在材质中拥抱自然。
        </p>

        <button
          onClick={scrollToProjects}
          className="group flex items-center gap-3 px-8 py-4 bg-[var(--color-charcoal)] text-white rounded-full hover:bg-[var(--color-gold)] transition-all duration-500"
        >
          <span className="text-sm font-medium">探索我们的作品</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
