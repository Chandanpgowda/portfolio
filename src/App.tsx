import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements, Certifications, Education } from './components/Sections';
import { CodingProfiles } from './components/CodingProfiles';
import { GitHubActivity } from './components/GitHubActivity';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';

export default function App() {
  return (
    <>
      <Navbar />
      <Cursor />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <CodingProfiles />
        <GitHubActivity />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
