import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OnboardingForm from "@/components/OnboardingForm";
import CommunityDiscovery from "@/components/CommunityDiscovery";
import CreateCommunitySection from "@/components/CreateCommunitySection";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<"hero" | "onboarding" | "discovery" | "create">("hero");
  const [userData, setUserData] = useState<{ name: string; city: string; age: string } | null>(null);

  const handleGetStarted = () => {
    setCurrentStep("onboarding");
  };

  const handleOnboardingComplete = (data: { name: string; city: string; age: string }) => {
    setUserData(data);
    setCurrentStep("discovery");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {currentStep === "hero" && (
        <HeroSection onGetStarted={handleGetStarted} />
      )}
      
      {currentStep === "onboarding" && (
        <div className="min-h-screen bg-gradient-subtle flex items-center justify-center py-12">
          <OnboardingForm onSubmit={handleOnboardingComplete} />
        </div>
      )}
      
      {currentStep === "discovery" && userData && (
        <CommunityDiscovery userData={userData} onCreateCommunity={() => setCurrentStep("create")} />
      )}
      
      {currentStep === "create" && (
        <CreateCommunitySection />
      )}
    </div>
  );
};

export default Index;
