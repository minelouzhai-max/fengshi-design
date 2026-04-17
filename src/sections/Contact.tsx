import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[var(--color-warm-white)]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="text-[var(--color-gold)] text-sm tracking-[0.2em] mb-4">
              联系我们
            </p>
            <h2 className="font-serif-sc text-4xl md:text-5xl text-[var(--color-text-primary)] mb-4 leading-tight">
              开启您的
              <br />
              <span className="text-[var(--color-gold)]">设计之旅</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10">
              无论您是想改造现有的空间，还是从零开始打造梦想之家，我们都期待与您交流。让我们一起创造属于您的独特空间。
            </p>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden mb-10">
              <img
                src="/images/contact.jpg"
                alt="联系我们"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)] mb-1">地址</p>
                  <p className="text-[var(--color-text-primary)]">江苏省无锡市天昌路 13-106</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)] mb-1">电话</p>
                  <p className="text-[var(--color-text-primary)]">+86 180 1249 1816</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)] mb-1">邮箱</p>
                  <p className="text-[var(--color-text-primary)]">fengshi.space@qq.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="font-serif-sc text-2xl text-[var(--color-text-primary)] mb-8">
                发送咨询
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-serif-sc text-xl text-[var(--color-text-primary)] mb-2">
                    发送成功
                  </h4>
                  <p className="text-[var(--color-text-secondary)]">
                    感谢您的咨询，我们会尽快与您联系。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="您的姓名"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-4 border-0 border-b border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="电子邮箱"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-4 border-0 border-b border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="联系电话"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="请描述您的项目需求..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-0 py-4 border-0 border-b border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[var(--color-charcoal)] text-white rounded-full hover:bg-[var(--color-gold)] transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>发送中...</span>
                    ) : (
                      <>
                        <span>发送咨询</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
