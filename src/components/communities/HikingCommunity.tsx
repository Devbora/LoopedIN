import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Mountain, Clock, Thermometer } from "lucide-react";

const HikingCommunity = () => {
  const [activeTab, setActiveTab] = useState("events");

  const upcomingHikes = [
    {
      id: 1,
      title: "Sunrise Peak Trail",
      date: "This Saturday",
      time: "6:00 AM",
      difficulty: "Moderate",
      distance: "8.5 miles",
      elevation: "2,400 ft",
      participants: 12,
      maxParticipants: 15,
      weather: "Sunny, 68°F"
    },
    {
      id: 2,
      title: "Waterfall Canyon Loop",
      date: "Sunday",
      time: "9:00 AM",
      difficulty: "Easy",
      distance: "4.2 miles",
      elevation: "800 ft",
      participants: 8,
      maxParticipants: 20,
      weather: "Partly Cloudy, 72°F"
    },
    {
      id: 3,
      title: "Ridge Line Challenge",
      date: "Next Weekend",
      time: "7:00 AM",
      difficulty: "Hard",
      distance: "12.3 miles",
      elevation: "3,800 ft",
      participants: 6,
      maxParticipants: 10,
      weather: "Clear, 65°F"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Moderate": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="bg-card rounded-lg shadow-soft p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Trail Blazers</h1>
              <p className="text-muted-foreground">Plan hikes, share routes, and explore nature together</p>
            </div>
            <Button className="bg-gradient-primary hover:shadow-elegant">
              <Mountain className="mr-2 h-4 w-4" />
              Plan New Hike
            </Button>
          </div>
          
          {/* Navigation */}
          <div className="flex space-x-6 mt-6 border-b border-border">
            {["events", "routes", "gear"].map((tab) => (
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
        {activeTab === "events" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Events */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold mb-4">Upcoming Hikes</h2>
              
              {upcomingHikes.map((hike) => (
                <Card key={hike.id} className="group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {hike.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{hike.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{hike.time}</span>
                            </div>
                          </div>
                        </CardDescription>
                      </div>
                      <Badge className={getDifficultyColor(hike.difficulty)}>
                        {hike.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Distance</p>
                        <p className="font-semibold">{hike.distance}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Elevation</p>
                        <p className="font-semibold">{hike.elevation}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Weather</p>
                        <div className="flex items-center justify-center space-x-1">
                          <Thermometer className="h-4 w-4" />
                          <p className="font-semibold text-sm">{hike.weather}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Hikers</p>
                        <div className="flex items-center justify-center space-x-1">
                          <Users className="h-4 w-4" />
                          <p className="font-semibold">{hike.participants}/{hike.maxParticipants}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Meetup at Trailhead Parking</span>
                      </div>
                      <Button 
                        className="bg-gradient-primary hover:shadow-elegant"
                        disabled={hike.participants >= hike.maxParticipants}
                      >
                        {hike.participants >= hike.maxParticipants ? "Full" : "Join Hike"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trail Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Sunrise Peak</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Good</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Waterfall Canyon</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Excellent</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Ridge Line</span>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Muddy</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Safety Reminder</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Always inform someone of your hiking plans</p>
                    <p>• Check weather conditions before departing</p>
                    <p>• Bring extra water and snacks</p>
                    <p>• Carry a first aid kit</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HikingCommunity;