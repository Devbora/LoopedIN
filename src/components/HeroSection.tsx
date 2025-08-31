import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Sparkles } from "lucide-react";
import mountainImage from "@/assets/mountain-background.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={mountainImage} 
          alt="Mountain landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Find Your Tribe</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Connect with
          <span className="bg-gradient-primary bg-clip-text text-transparent block bg-background/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-elegant">
            Amazing Communities
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Tell us who you are and where you live. We'll match you with vibrant local communities 
          that share your passions and interests.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-elegant transition-all duration-300"
            onClick={onGetStarted}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-primary mr-2" />
              <span className="text-3xl font-bold">50K+</span>
            </div>
            <p className="text-muted-foreground">Active Members</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="h-6 w-6 text-primary mr-2" />
              <span className="text-3xl font-bold">200+</span>
            </div>
            <p className="text-muted-foreground">Cities Covered</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="h-6 w-6 text-primary mr-2" />
              <span className="text-3xl font-bold">1000+</span>
            </div>
            <p className="text-muted-foreground">Communities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;