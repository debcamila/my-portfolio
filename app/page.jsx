import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Services from "@/components/Services";
import LatestProjects from "@/components/LatestProjects";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Bio />
      <Services />
      <LatestProjects />
      <Cta />
    </main>
  );
}
