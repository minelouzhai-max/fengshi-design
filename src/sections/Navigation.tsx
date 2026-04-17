import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '服务', href: '#services' },
  { label: '作品', href: '#projects' },
  { label: '联系', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center"
            >
              <img
                src={isScrolled ? '/images/logo-icon-black.png' : '/images/logo-icon-white.png'}
                alt="枫石空间"
                className="h-8 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-[var(--color-gold)] ${
                    isScrolled ? 'text-[var(--color-text-primary)]' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[var(--color-charcoal)] text-white hover:bg-[var(--color-gold)]'
                    : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
                }`}
              >
                联系我们
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${isScrolled ? 'text-[var(--color-text-primary)]' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-2xl font-serif-sc text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="mt-4 px-8 py-3 bg-[var(--color-charcoal)] text-white rounded-full text-lg font-medium hover:bg-[var(--color-gold)] transition-colors"
          >
            联系我们
          </a>
        </div>
      </div>
    </>
  );
}
