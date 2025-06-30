
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-clip-text text-transparent leading-tight">
              Climate Specialist
              <br />
              <span className="text-4xl md:text-6xl">Building a Sustainable Future</span>
            </h1>
          </div>
          
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4">
              Dr. Elliott More PhD CEng
            </p>
            <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              15 years of experience designing innovative engineering solutions for decarbonisation, 
              sustainability, and climate action. From mechanical engineering to leading climate strategies 
              for international banks and institutional investors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://www.linkedin.com/in/elliott-more/", "_blank")}
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
