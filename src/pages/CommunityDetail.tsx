import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import SkateboardCommunity from "@/components/communities/SkateboardCommunity";
import HikingCommunity from "@/components/communities/HikingCommunity";

const CommunityDetail = () => {
  const { id } = useParams<{ id: string }>();

  const renderCommunity = () => {
    switch (id) {
      case "skateboard":
        return <SkateboardCommunity />;
      case "hiking":
        return <HikingCommunity />;
      default:
        return (
          <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Community Coming Soon</h1>
              <p className="text-muted-foreground">This community interface is being built.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {renderCommunity()}
    </div>
  );
};

export default CommunityDetail;