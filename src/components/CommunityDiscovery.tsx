import CommunityCard from "./CommunityCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import skateboardImg from "@/assets/skateboard-community.jpg";
import hikingImg from "@/assets/hiking-community.jpg";
import photographyImg from "@/assets/photography-community.jpg";

interface CommunityDiscoveryProps {
  userData: {
    name: string;
    city: string;
    age: string;
  };
  onCreateCommunity: () => void;
}

const CommunityDiscovery = ({ userData, onCreateCommunity }: CommunityDiscoveryProps) => {
  const navigate = useNavigate();

  const communities = [
    {
      id: "skateboard",
      title: "Urban Skaters",
      description: "Share tricks, spots, and connect with local skaters. Upload videos, get feedback, and discover new skating locations.",
      members: 2847,
      location: userData.city,
      category: "Sports",
      nextEvent: "Street Session - Tomorrow 6PM",
      image: skateboardImg
    },
    {
      id: "hiking",
      title: "Trail Blazers",
      description: "Plan hikes, share routes, and explore nature together. Built-in trail planner and safety features for group adventures.",
      members: 1563,
      location: userData.city,
      category: "Outdoor",
      nextEvent: "Mountain Trail - This Weekend",
      image: hikingImg
    },
    {
      id: "photography",
      title: "Lens Artists",
      description: "Photography community for sharing work, organizing photo walks, and learning techniques from fellow photographers.",
      members: 3291,
      location: userData.city,
      category: "Creative",
      nextEvent: "Golden Hour Shoot - Friday 5PM",
      image: photographyImg
    }
  ];

  const handleJoinCommunity = (communityId: string) => {
    navigate(`/community/${communityId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Perfect Communities for You, {userData.name}!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Based on your location in {userData.city} and interests, we've found these amazing communities waiting for you to join.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community) => (
            <CommunityCard
              key={community.id}
              title={community.title}
              description={community.description}
              members={community.members}
              location={community.location}
              category={community.category}
              nextEvent={community.nextEvent}
              image={community.image}
              onJoin={() => handleJoinCommunity(community.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12 space-y-6">
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/20 shadow-elegant max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-3">Don't see what you're looking for?</h3>
            <p className="text-muted-foreground mb-6">
              Create your own community and bring like-minded people together!
            </p>
            <Button 
              onClick={onCreateCommunity}
              className="bg-gradient-primary hover:shadow-elegant transition-all duration-300"
              size="lg"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Community
            </Button>
          </div>
          
          <p className="text-muted-foreground">
            We have {Math.floor(Math.random() * 500 + 200)}+ more communities in {userData.city}
          </p>
          <button className="text-primary hover:text-primary-glow transition-colors font-medium">
            Explore All Communities →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityDiscovery;