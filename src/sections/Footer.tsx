import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '服务', href: '#services' },
  { label: '作品', href: '#projects' },
];

const serviceLinks = [
  '室内设计',
  '建筑规划',
  '家具定制',
  '景观设计',
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--color-dark-bg)] text-white">
      {/* Main Footer */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}>
              <div className="w-48 mb-6">
                <img
                  src="/images/logo-horizontal-white.png"
                  alt="枫石空间"
                  className="w-full h-auto"
                />
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              我们打造尊重时间流逝之美的空间，在简约中寻找完美，在材质中拥抱自然。让设计回归本真，创造永恒的居住体验。
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-white mb-6">导航</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 text-sm hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-white mb-6">服务</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#services');
                    }}
                    className="text-white/60 text-sm hover:text-[var(--color-gold)] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-white mb-6">联系方式</h4>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm">
                <span className="block text-white/40 text-xs mb-1">地址</span>
                江苏省无锡市天昌路 13-106
              </li>
              <li className="text-white/60 text-sm">
                <span className="block text-white/40 text-xs mb-1">电话</span>
                +86 180 1249 1816
              </li>
              <li className="text-white/60 text-sm">
                <span className="block text-white/40 text-xs mb-1">邮箱</span>
                fengshi.space@qq.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              2026 枫石空间. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">
                使用条款
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
