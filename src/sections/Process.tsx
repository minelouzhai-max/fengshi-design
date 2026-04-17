import { useEffect, useRef, useState } from 'react';
import type { ProcessStep } from '@/types';

const steps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: '发现',
    description: '深入了解客户需求，探索空间潜力，收集灵感与素材。我们通过细致的沟通，理解您的生活方式和审美偏好。',
  },
  {
    id: 2,
    number: '02',
    title: '概念',
    description: '基于研究发现，形成设计概念和方向。我们提供多方案选择，确保设计方向与您的愿景一致。',
  },
  {
    id: 3,
    number: '03',
    title: '执行',
    description: '精心实施设计方案，严格把控每一个细节。从材料采购到施工监督，我们全程跟进。',
  },
  {
    id: 4,
    number: '04',
    title: '交付',
    description: '完美呈现设计成果，确保每个细节都达到预期。我们提供完善的售后服务，让您无后顾之忧。',
  },
];

export default function Process() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[var(--color-warm-white)]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[var(--color-gold)] text-sm tracking-[0.2em] mb-4">
            工作流程
          </p>
          <h2 className="font-serif-sc text-4xl md:text-5xl text-[var(--color-text-primary)]">
            我们的方法
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-[var(--color-border)]" />

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative text-center transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Number */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-[var(--color-gold)]/20" />
                <div className="absolute inset-2 rounded-full border border-[var(--color-gold)]/40" />
                <span className="font-serif-sc text-3xl text-[var(--color-gold)]">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-serif-sc text-xl text-[var(--color-text-primary)] mb-4">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
