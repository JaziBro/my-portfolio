import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <Skills/>
        <Projects/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
