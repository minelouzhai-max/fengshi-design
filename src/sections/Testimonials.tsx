import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: '枫石空间将我们的房子变成了家。他们不仅理解我们的需求，更超越了我们的期望。每一个细节都体现着对美的追求。',
    author: '林雨晴',
    role: '私宅业主',
    location: '无锡',
  },
  {
    id: 2,
    content: '对细节的关注无与伦比。从最初的概念到最终的交付，团队始终保持专业和热情。这是一次令人难忘的合作体验。',
    author: '陈明远',
    role: '企业家',
    location: '连云港',
  },
  {
    id: 3,
    content: '纯粹、宁静、完美。枫石空间的设计让我们的茶室成为了心灵的栖息地。在这里，时间仿佛静止了。',
    author: '王思雅',
    role: '茶艺师',
    location: '苏州',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[var(--color-cream)]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[var(--color-gold)] text-sm tracking-[0.2em] mb-4">
            客户评价
          </p>
          <h2 className="font-serif-sc text-4xl md:text-5xl text-[var(--color-text-primary)]">
            他们的故事
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-4">
              <p
                key={currentTestimonial.id}
                className="font-serif-sc text-xl md:text-2xl text-[var(--color-text-primary)] leading-relaxed mb-8 animate-fade-in"
              >
                "{currentTestimonial.content}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[var(--color-text-primary)]">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {currentTestimonial.role}
                    <span className="mx-2">·</span>
                    {currentTestimonial.location}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={goToPrev}
                    className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-charcoal)] hover:text-white hover:border-[var(--color-charcoal)] transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'w-6 bg-[var(--color-gold)]'
                            : 'bg-[var(--color-border)] hover:bg-[var(--color-gold)]/50'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-charcoal)] hover:text-white hover:border-[var(--color-charcoal)] transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
