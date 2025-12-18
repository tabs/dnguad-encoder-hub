import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ToolsSection from "@/components/ToolsSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ToolsSection />
        <HowItWorks />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
