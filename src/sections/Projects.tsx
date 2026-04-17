import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    year: '2023',
    category: '住宅设计',
    title: '静谧居所',
    description: '一处远离喧嚣的私人庇护所，以极简的设计语言诠释宁静生活的真谛。',
    image: '/images/project-1.jpg',
  },
  {
    id: 2,
    year: '2023',
    category: '公寓设计',
    title: '城市禅意',
    description: '在繁华都市中打造一方禅意空间，让居住者在忙碌中找到内心的平静。',
    image: '/images/project-2.jpg',
  },
  {
    id: 3,
    year: '2022',
    category: '别墅设计',
    title: '自然之家',
    description: '将自然元素融入室内设计，创造与自然和谐共生的居住空间。',
    image: '/images/project-3.jpg',
  },
  {
    id: 4,
    year: '2022',
    category: '书房设计',
    title: '永恒空间',
    description: '以 timeless 的设计理念，打造一个经得起时间考验的阅读和思考空间。',
    image: '/images/project-4.jpg',
  },
];

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[var(--color-cream)]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="text-[var(--color-gold)] text-sm tracking-[0.2em] mb-4">
              精选作品
            </p>
            <h2 className="font-serif-sc text-4xl md:text-5xl text-[var(--color-text-primary)]">
              设计案例
            </h2>
          </div>
          <p className="text-[var(--color-text-secondary)] max-w-md mt-4 md:mt-0">
            每一个项目都是一次与客户的深度对话，我们用心聆听，用设计回应。
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm text-[var(--color-text-primary)]">
                    {project.year}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[var(--color-gold)] text-sm mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-serif-sc text-2xl text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="px-8 py-4 border border-[var(--color-charcoal)] text-[var(--color-charcoal)] rounded-full hover:bg-[var(--color-charcoal)] hover:text-white transition-all duration-500">
            查看全部作品
          </button>
        </div>
      </div>
    </section>
  );
}
