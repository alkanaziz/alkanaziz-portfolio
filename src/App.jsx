import './app.scss';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

export default function App() {
  return (
    <div>
      <section id="homepage" className="h-screen snap-center">
        <Navbar />
        <Hero />
      </section>
      <section className="h-screen snap-center">
        <Parallax type="services" />
      </section>
      <section id="services" className="h-screen snap-center">
        <Services />
      </section>
      <section id="portfolio" className="h-screen snap-center">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="contact" className="h-screen snap-center">
        <Contact />
      </section>
    </div>
  );
}
