import { useEffect, useRef, useState } from 'react';

interface StatProps {
  value: string;
  label: string;
  delay: number;
}

function AnimatedStat({ value, label, delay }: StatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="text-4xl md:text-5xl font-serif-sc text-[var(--color-gold)] mb-2">
        {value}
      </div>
      <div className="text-sm text-[var(--color-text-secondary)]">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[var(--color-cream)]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <img
                  src="/images/about-1.jpg"
                  alt="关于枫石空间"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="/images/about-2.jpg"
                  alt="枫石空间设计"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <p className="text-[var(--color-gold)] text-sm tracking-[0.2em] mb-4">
              关于我们
            </p>
            <h2 className="font-serif-sc text-4xl md:text-5xl text-[var(--color-text-primary)] mb-6 leading-tight">
              回归本真
              <br />
              <span className="text-[var(--color-gold)]">创造永恒</span>
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                我们相信设计应该回归本真。我们的方法将自然材料与现代生活相结合，创造既永恒又实用的空间。每一个项目都是一次对宋式美学的探索——在自然中发现诗意，在留白中感受韵味。
              </p>
              <p>
                枫石空间成立于2021年，专注于高端住宅和商业空间的室内设计。我们的设计理念源于对于宋式美学的深刻理解。
              </p>
              <blockquote className="border-l-4 border-[var(--color-gold)] pl-6 py-2 my-6">
                <p className="text-[var(--color-text-primary)] font-serif-sc text-lg italic">
                  "外师造化，中得心源。"
                </p>
              </blockquote>
              <p>
                让空间与自然和谐共生，营造宁静舒适的氛围，这正是宋式美学给予当代设计最珍贵的启示。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[var(--color-border)]">
              <AnimatedStat value="12+" label="年经验" delay={0} />
              <AnimatedStat value="300+" label="项目完成" delay={200} />
              <AnimatedStat value="98%" label="客户满意度" delay={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
