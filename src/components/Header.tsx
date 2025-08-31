import { Button } from "@/components/ui/button";
import { Network } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-8 bg-card border-b border-border shadow-soft backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
            <Network className="h-6 w-6 text-accent-foreground" />
          </div>
          <div className="h-8 w-px bg-border/50 mx-2"></div>
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            LoopedIN
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#communities" className="text-muted-foreground hover:text-foreground transition-colors relative group">
            Communities
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors relative group">
            How it Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div className="h-6 w-px bg-border/50"></div>
          <Button variant="outline" size="sm" className="shadow-soft hover:shadow-card transition-all duration-300">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;