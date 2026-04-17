import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Projects from '@/sections/Projects';
import Process from '@/sections/Process';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
