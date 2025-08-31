import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Calendar } from "lucide-react";

interface CommunityCardProps {
  title: string;
  description: string;
  members: number;
  location: string;
  category: string;
  nextEvent?: string;
  image: string;
  onJoin: () => void;
}

const CommunityCard = ({
  title,
  description,
  members,
  location,
  category,
  nextEvent,
  image,
  onJoin
}: CommunityCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 border border-border/50 overflow-hidden bg-card shadow-card">
      <div className="h-48 bg-gradient-subtle relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm border border-accent/20">
            {category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </div>
      
      <CardHeader className="pb-4 border-b border-border/50">
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{members.toLocaleString()} members</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
        
        {nextEvent && (
          <div className="flex items-center space-x-1 text-sm text-accent">
            <Calendar className="h-4 w-4" />
            <span>Next: {nextEvent}</span>
          </div>
        )}
        
        <div className="border-t border-border/30 pt-4 -mx-6 px-6">
          <Button 
            onClick={onJoin}
            className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300 shadow-soft"
          >
            Join Community
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;