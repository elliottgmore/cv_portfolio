
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Timeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const timelineData = [
    {
      id: "meng",
      title: "MEng",
      period: "2004-2008",
      company: "University",
      color: "bg-green-400",
      description: "Master of Engineering - Foundation in mechanical and energy engineering",
      projects: [
        "Advanced thermodynamics and fluid mechanics",
        "Sustainable energy systems design",
        "Engineering project management"
      ]
    },
    {
      id: "pgdip",
      title: "PGDip",
      period: "2008-2009",
      company: "University",
      color: "bg-green-300",
      description: "Postgraduate Diploma - Specialized engineering focus",
      projects: [
        "Advanced engineering systems",
        "Professional engineering practice",
        "Sustainable technology implementation"
      ]
    },
    {
      id: "sweco",
      title: "Sweco",
      period: "2007-2011",
      company: "Engineering Consultancy",
      color: "bg-blue-300",
      description: "Early career mechanical and energy engineering experience",
      projects: [
        "Building services engineering",
        "Energy efficiency assessments",
        "HVAC system design and optimization"
      ]
    },
    {
      id: "mphil",
      title: "MPhil",
      period: "2011-2012",
      company: "University",
      color: "bg-gray-400",
      description: "Master of Philosophy - Research focus",
      projects: [
        "Advanced research methodology",
        "Sustainable engineering research",
        "Academic publication and presentation"
      ]
    },
    {
      id: "gofs",
      title: "GOFS",
      period: "2013-2014",
      company: "Research Institution",
      color: "bg-blue-400",
      description: "Specialized research and development role",
      projects: [
        "Climate science research",
        "Environmental impact assessments",
        "Technical report writing and analysis"
      ]
    },
    {
      id: "phd",
      title: "PhD",
      period: "2014-2016",
      company: "University",
      color: "bg-gray-500",
      description: "Doctor of Philosophy - Advanced research and expertise development",
      projects: [
        "Original climate research contribution",
        "Advanced data analysis and modeling",
        "International conference presentations"
      ]
    },
    {
      id: "arup",
      title: "Arup",
      period: "2015-2019",
      company: "Global Engineering Consultancy",
      color: "bg-blue-500",
      description: "Senior engineering consultant role at world-renowned firm",
      projects: [
        "Large-scale infrastructure projects",
        "Sustainability consulting for major developments",
        "Climate resilience and adaptation planning"
      ]
    },
    {
      id: "c40",
      title: "C40",
      period: "2020-2021",
      company: "Cities Climate Leadership Group",
      color: "bg-blue-600",
      description: "Programme managed 15 cities' climate action plans",
      projects: [
        "GHG inventory development for major cities",
        "Net-zero mitigation trajectory planning",
        "Climate adaptation and impact assessments",
        "International climate policy coordination"
      ]
    },
    {
      id: "ramboll",
      title: "Ramboll",
      period: "2021-2023",
      company: "Engineering & Design Consultancy",
      color: "bg-blue-700",
      description: "Decarbonisation & Digitalisation Lead, Management team member",
      projects: [
        "Strategic sustainability department leadership",
        "Digital transformation in sustainability",
        "Client relationship management across 5 offices",
        "Advanced decarbonisation solution development"
      ]
    },
    {
      id: "cert",
      title: "CEng",
      period: "2022-2023",
      company: "Professional Certification",
      color: "bg-green-600",
      description: "Chartered Engineer status - Professional recognition",
      projects: [
        "Professional competency demonstration",
        "Continuing professional development",
        "Industry leadership recognition"
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            15 years of progressive experience from engineering fundamentals to climate leadership. 
            Click on any period to explore the projects and achievements.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative">
            {/* Timeline Years */}
            <div className="flex justify-between text-sm text-gray-500 mb-4 px-4">
              {Array.from({ length: 20 }, (_, i) => 2004 + i).filter((year, i) => i % 2 === 0).map(year => (
                <span key={year} className="text-xs">{year}</span>
              ))}
            </div>
            
            {/* Timeline Bar */}
            <div className="relative h-20 bg-gray-200 rounded-lg mb-8 overflow-hidden">
              {timelineData.map((item) => {
                const startYear = parseInt(item.period.split('-')[0]);
                const endYear = parseInt(item.period.split('-')[1]);
                const startPos = ((startYear - 2004) / 19) * 100;
                const width = ((endYear - startYear + 1) / 19) * 100;
                
                return (
                  <div
                    key={item.id}
                    className={`absolute top-2 h-16 ${item.color} rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center text-white font-semibold`}
                    style={{
                      left: `${startPos}%`,
                      width: `${width}%`,
                      minWidth: '60px'
                    }}
                    onClick={() => setSelectedPeriod(selectedPeriod === item.id ? null : item.id)}
                  >
                    <span className="text-sm font-bold">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Period Details */}
        {selectedPeriod && (
          <Card className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl animate-fade-in">
            {(() => {
              const selected = timelineData.find(item => item.id === selectedPeriod);
              return selected ? (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-4 h-4 ${selected.color} rounded-full`}></div>
                    <h3 className="text-3xl font-bold text-gray-900">{selected.title}</h3>
                    <span className="text-lg text-gray-500">({selected.period})</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700 mb-4">{selected.company}</h4>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{selected.description}</p>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Projects & Achievements:</h5>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {selected.projects.map((project, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null;
            })()}
          </Card>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">Click on any timeline segment above to explore detailed projects and achievements</p>
        </div>
      </div>
    </section>
  );
};
