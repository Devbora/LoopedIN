import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Upload, Heart, MessageCircle, Share, Search, TrendingUp } from "lucide-react";

const SkateboardCommunity = () => {
  const [activeTab, setActiveTab] = useState("feed");

  const videos = [
    {
      id: 1,
      title: "Perfect Kickflip Downtown",
      author: "Mike_Shredder",
      views: "2.4K",
      likes: 89,
      comments: 23,
      thumbnail: "/api/placeholder/300/200",
      duration: "0:45"
    },
    {
      id: 2,
      title: "New Spot: Harbor Bridge Rails",
      author: "Sarah_Skates",
      views: "1.8K",
      likes: 67,
      comments: 15,
      thumbnail: "/api/placeholder/300/200",
      duration: "1:23"
    },
    {
      id: 3,
      title: "Beginner's Guide: Ollie Tips",
      author: "Coach_Tony",
      views: "5.2K",
      likes: 234,
      comments: 67,
      thumbnail: "/api/placeholder/300/200",
      duration: "3:15"
    }
  ];

  const spots = [
    { name: "Downtown Plaza", rating: 4.8, tricks: "Rails, Ledges" },
    { name: "Harbor Bridge", rating: 4.6, tricks: "Stairs, Gaps" },
    { name: "University Courtyard", rating: 4.2, tricks: "Manual Pads, Banks" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="bg-card rounded-lg shadow-soft p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Urban Skaters</h1>
              <p className="text-muted-foreground">Share tricks, discover spots, connect with local skaters</p>
            </div>
            <Button className="bg-gradient-primary hover:shadow-elegant">
              <Upload className="mr-2 h-4 w-4" />
              Upload Video
            </Button>
          </div>
          
          {/* Navigation */}
          <div className="flex space-x-6 mt-6 border-b border-border">
            {["feed", "spots", "challenges"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-1 font-medium transition-colors ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === "feed" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search videos..." className="pl-10" />
                </div>
                <Button variant="outline">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Trending
                </Button>
              </div>

              {videos.map((video) => (
                <Card key={video.id} className="group hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <div className="relative w-48 h-32 bg-muted rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">by {video.author}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{video.views} views</span>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{video.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{video.comments}</span>
                          </div>
                          <Share className="h-4 w-4 cursor-pointer hover:text-foreground" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Spots Near You</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {spots.map((spot, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{spot.name}</p>
                        <p className="text-sm text-muted-foreground">{spot.tricks}</p>
                      </div>
                      <Badge variant="secondary">★ {spot.rating}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    This week: Land a clean kickflip and tag #CleanFlip
                  </p>
                  <Button variant="outline" className="w-full">
                    Join Challenge
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkateboardCommunity;