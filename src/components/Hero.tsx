
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-green-50 p-2">
                <img 
                  src="/cv_portfolio/images/94f97221-41c1-4f10-a505-c9700bcda1ef.png"
                  alt="Dr. Elliott More"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-clip-text text-transparent leading-tight">
                Decarbonisation Specialist
                <br />
                
              </h1>
            </div>
            
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              
              <p className="text-lg text-gray-500 leading-relaxed">
                15 years of experience designing innovative engineering solutions for decarbonisation, 
                sustainability, and climate action. From mechanical engineering to leading climate strategies 
                for international banks and institutional investors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
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
      </div>
    </section>
  );
};
