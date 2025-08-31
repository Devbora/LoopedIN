import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Users, MapPin, Tag, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CreateCommunitySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    location: "",
    rules: "",
    expectedMembers: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const categories = [
    "Sports & Fitness",
    "Arts & Creativity", 
    "Technology",
    "Food & Dining",
    "Outdoor & Adventure",
    "Music & Entertainment",
    "Learning & Education",
    "Gaming",
    "Social & Networking",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.category) {
      setIsSubmitted(true);
      toast({
        title: "Community Created!",
        description: `${formData.name} has been created successfully. (Demo mode - not saved)`,
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      description: "",
      category: "",
      location: "",
      rules: "",
      expectedMembers: ""
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center py-12">
        <Card className="w-full max-w-md mx-auto shadow-elegant border border-border/50 bg-card text-center">
          <CardHeader className="pb-6">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Community Created!
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {formData.name} is ready to welcome new members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">{formData.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{formData.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {formData.category}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {formData.location || "Global"}
                  </span>
                </div>
              </div>
              <Button onClick={resetForm} className="w-full" variant="outline">
                Create Another Community
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center py-12">
      <Card className="w-full max-w-2xl mx-auto shadow-elegant border border-border/50 bg-card">
        <CardHeader className="text-center border-b border-border/50 pb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <Plus className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Create Your Community
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Start a new community and bring people together around shared interests
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium flex items-center">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  Community Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="e.g., Urban Photography Club"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="border-border focus:ring-primary"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-primary" />
                  Category *
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className="border-border focus:ring-primary">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border shadow-elegant z-50">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  Location
                </Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="e.g., San Francisco, CA or Online"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="border-border focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="expectedMembers" className="text-sm font-medium">
                  Expected Members
                </Label>
                <Input
                  id="expectedMembers"
                  type="number"
                  placeholder="e.g., 50"
                  value={formData.expectedMembers}
                  onChange={(e) => handleInputChange("expectedMembers", e.target.value)}
                  className="border-border focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium flex items-center">
                <FileText className="h-4 w-4 mr-2 text-primary" />
                Description *
              </Label>
              <Textarea
                id="description"
                placeholder="Tell people what your community is about, what activities you'll do, and what makes it special..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="border-border focus:ring-primary min-h-[100px]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rules" className="text-sm font-medium">
                Community Guidelines (Optional)
              </Label>
              <Textarea
                id="rules"
                placeholder="Set some basic rules or guidelines for your community..."
                value={formData.rules}
                onChange={(e) => handleInputChange("rules", e.target.value)}
                className="border-border focus:ring-primary min-h-[80px]"
              />
            </div>
            
            <div className="border-t border-border/30 pt-6 -mx-6 px-6">
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300 shadow-soft"
                size="lg"
              >
                <Plus className="mr-2 h-4 w-4" />
                Create Community
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                * Demo mode - community won't be saved without backend integration
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateCommunitySection;