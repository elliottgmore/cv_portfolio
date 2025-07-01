
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-blue-300 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Ready to tackle your climate challenges with innovative engineering solutions? 
            Let's build a more sustainable future together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-300 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://www.linkedin.com/in/elliott-more/", "_blank")}
            >
              Connect on LinkedIn
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
          </div>
        </div>
        
        <div className="mt-12 text-gray-600">
          <p className="text-lg">
            Decarbonisation Specialist • Thought Leader
          </p>
          <p className="text-sm mt-2">
            Building trusted relationships through innovative engineering solutions
          </p>
        </div>
      </div>
    </section>
  );
};
