import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Expertise } from '../components/Expertise';
import { ProjectsTeaser } from '../components/ProjectsTeaser';
import { HowIWork } from '../components/HowIWork';
import { Services } from '../components/Services';
import { TechStack } from '../components/TechStack';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
      <ProjectsTeaser />
      <HowIWork />
      <Services />
      <TechStack />
      <Contact />
    </main>
  );
}
