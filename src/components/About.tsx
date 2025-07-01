
import { Card } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      title: "Climate Strategy Leadership",
      description: "Leading net-zero transition plans for institutional real estate investors and pension funds, implementing SBTi ambitions across all scope categories."
    },
    {
      title: "Technical Excellence",
      description: "Advanced engineering solutions for decarbonisation and digitalisation, pushing boundaries with cutting-edge technical design."
    },
    {
      title: "Global Impact",
      description: "Programme managed climate action plans for 15 cities at C40, providing specialist support on GHG inventories and mitigation trajectories."
    },
    {
      title: "Trusted Advisor",
      description: "Building long-term relationships with clients, challenging briefs to ensure they're solving the right problems with innovative solutions."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Driving Climate Action Through Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I thrive designing innovative engineering solutions for people and the built environment, 
            bringing cutting-edge thinking to clients who need trusted advisors for their sustainability journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="p-8 bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Current Focus</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Currently working with international banks as a climate specialist, helping institutional 
              real estate investors and pension funds craft comprehensive net-zero strategies. My work spans 
              from technical GHG assessments to strategic implementation planning, ensuring clients can 
              meet their sustainability commitments while maintaining business objectives.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};
