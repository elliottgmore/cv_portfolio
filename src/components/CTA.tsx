
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
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
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://www.linkedin.com/in/elliott-more/", "_blank")}
            >
              Connect on LinkedIn
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://drive.google.com/file/d/1c3dt5pIQnCtdZaqDBohujiGCS3crdQJ_/view?usp=sharing", "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-gray-600">
          <p className="text-lg">
            Dr. Elliott More PhD CEng • Climate Specialist • Sustainability Leader
          </p>
          <p className="text-sm mt-2">
            Building trusted relationships through innovative engineering solutions
          </p>
        </div>
      </div>
    </section>
  );
};
