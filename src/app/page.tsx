import About from './views/homepage/About';
import Hero from './views/homepage/Hero';
import Projects from './views/homepage/Projects';

export default function Home() {
  return (
    <div className="container mx-auto px-[5%] pb-20">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
