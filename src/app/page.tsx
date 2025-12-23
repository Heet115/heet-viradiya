import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsGrid } from "@/components/projects-grid";
import { Workbench } from "@/components/workbench";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";

export default function Home() {
  return (
    <main className="scanlines relative min-h-screen overflow-hidden">
      <CursorGlow />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ProjectsGrid />
        <Workbench />
        <Footer />
      </div>
    </main>
  );
}
