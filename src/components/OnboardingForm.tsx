import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface OnboardingFormProps {
  onSubmit: (data: { name: string; city: string; age: string }) => void;
}

const OnboardingForm = ({ onSubmit }: OnboardingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    age: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.city && formData.age) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-elegant border border-border/50 bg-card">
      <CardHeader className="text-center border-b border-border/50 pb-6">
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Join Your Tribe</CardTitle>
        <CardDescription className="text-muted-foreground">
          Tell us about yourself and we'll connect you with amazing communities
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              What's your name?
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="border-border focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium">
              Where are you located?
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="border-border focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="age" className="text-sm font-medium">
              What's your age?
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              className="border-border focus:ring-primary"
            />
          </div>
          
          <div className="border-t border-border/30 pt-6 -mx-6 px-6">
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300 shadow-soft"
              size="lg"
            >
              Discover My Communities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default OnboardingForm;