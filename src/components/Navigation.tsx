
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Dr. Elliott More
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#timeline" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#tools" className="text-gray-700 hover:text-blue-600 transition-colors">Tools</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="hover:bg-blue-50 transition-all duration-200 hover:scale-105"
              onClick={() => window.open("https://drive.google.com/file/d/1c3dt5pIQnCtdZaqDBohujiGCS3crdQJ_/view?usp=sharing", "_blank")}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
