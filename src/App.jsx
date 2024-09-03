import './app.scss';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

export default function App() {
  return (
    <div>
      <Cursor />
      <section id="home" className="lg:h-screen snap-center">
        <Navbar />
        <Hero />
      </section>
      <section id="skills" className="h-screen snap-center">
        <Parallax type="skills" />
      </section>
      <section className="lg:h-screen snap-center">
        <Skills />
      </section>
      <section id="portfolio" className="h-screen snap-center">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="contact" className="lg:h-screen snap-center">
        <Contact />
      </section>
    </div>
  );
}
