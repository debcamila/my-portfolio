import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Skills from "@/components/Skills";
import LatestProjects from "@/components/LatestProjects";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Bio />
      <Skills />
      <LatestProjects />
      <Cta />
    </main>
  );
}
