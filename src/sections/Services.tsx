import { useEffect, useRef, useState } from 'react';
import { Home, Building2, Armchair, TreePine } from 'lucide-react';
import type { Service } from '@/types';

const services: Service[] = [
  {
    id: 1,
    title: '室内设计',
    description: '创造和谐的生活空间，将功能性与美学完美融合。我们注重每一个细节，从材质选择到光线布局，打造独一无二的居住体验。',
    image: '/images/service-1.jpg',
    icon: 'home',
  },
  {
    id: 2,
    title: '建筑规划',
    description: '构建永恒之美的结构，尊重场地环境与历史文脉。我们的建筑设计追求与自然的对话，创造可持续的空间解决方案。',
    image: '/images/service-2.jpg',
    icon: 'building',
  },
  {
    id: 3,
    title: '家具定制',
    description: '手工制作的独特家具，传承匠人精神。我们与优秀的手工艺人合作，为客户定制符合空间气质的专属家具。',
    image: '/images/service-3.jpg',
    icon: 'armchair',
  },
  {
    id: 4,
    title: '景观设计',
    description: '将自然融入日常生活，创造宁静的户外空间。从庭院到露台，我们设计的景观空间让人与自然和谐共处。',
    image: '/images/service-4.jpg',
    icon: 'tree',
  },
];

const iconMap = {
  home: Home,
  building: Building2,
  armchair: Armchair,
  tree: TreePine,
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[var(--color-warm-white)]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[var(--color-gold)] text-sm tracking-[0.2em] mb-4">
            我们的服务
          </p>
          <h2 className="font-serif-sc text-4xl md:text-5xl text-[var(--color-text-primary)]">
            专业领域
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const isHovered = hoveredId === service.id;

            return (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                      isHovered ? 'opacity-90' : 'opacity-70'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div
                    className={`w-12 h-12 rounded-full bg-[var(--color-gold)]/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-all duration-500 ${
                      isHovered ? 'bg-[var(--color-gold)] scale-110' : ''
                    }`}
                  >
                    <IconComponent
                      className={`w-5 h-5 transition-colors duration-500 ${
                        isHovered ? 'text-white' : 'text-[var(--color-gold)]'
                      }`}
                    />
                  </div>
                  <h3 className="font-serif-sc text-xl text-white mb-2">
                    {service.title}
                  </h3>
                  <p
                    className={`text-white/80 text-sm leading-relaxed transition-all duration-500 ${
                      isHovered
                        ? 'opacity-100 max-h-40'
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
