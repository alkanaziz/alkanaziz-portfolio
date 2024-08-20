import './app.scss';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <div>
      <section id="homepage" className="h-screen snap-center">
        <Navbar />
      </section>
      <section className="h-screen snap-center">Parallax</section>
      <section id="services" className="h-screen snap-center">
        Services
      </section>
      <section className="h-screen snap-center">Paralax</section>
      <section id='portfolio' className="h-screen snap-center">Portfolio1</section>
      <section className="h-screen snap-center">Portfolio2</section>
      <section className="h-screen snap-center">Portfolio3</section>
      <section id='about' className="h-screen snap-center">About</section>
      <section id='contact' className="h-screen snap-center">Contact</section>
    </div>
  );
}
