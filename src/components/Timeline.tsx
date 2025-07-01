import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Timeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const academicData = [
    {
      id: "meng",
      title: "MEng Engineering",
      startyear: 2003.09,
      endyear: 2007.06,
      company: "University of Warwick",
      link: "https://warwick.ac.uk/",
      logo: "/cv_portfolio/images/warwick.png",
      grade: "First Class Honours",
      color: "bg-green-400",
      description: "Master of Mechanical Engineering (MEng)",
      projects: [
        "IMEchE Individual Project Award",
        "Advanced thermodynamics and fluid mechanics",
        "Sustainable energy systems design",
        "Engineering project management"
      ]
    },
    {
      id: "pgdip",
      title: "PGDip",
      startyear: 2007.09,
      endyear: 2009.06,
      company: "London South Bank University",
      link: "https://www.lsbu.ac.uk/",
      logo: "/cv_portfolio/images/lsbu.png",
      grade: "",
      color: "bg-green-400",
      description: "Part-time Postgraduate Diploma - Building Services Engineering",
      projects: [
        "Air Conditioning and Refrigeration",
        "Plumbing and Drainage",
        "Energy Efficiency",
        "Renewable Energy",
        "Building Services Design",
        "Project Management"
      ]
    },
    {
      id: "mphil",
      title: "MPhil",
      startyear: 2010.09,
      endyear: 2011.05,
      company: "University of Cambridge",
      link: "https://www.cam.ac.uk/",
      logo: "/cv_portfolio/images/camb.jpg",
      grade: "",
      color: "bg-green-400",
      description: "Master of Philosophy - Research focus",
      projects: [
        "Advanced research methodology",
        "Sustainable engineering research",
        "Academic publication and presentation"
      ]
    },
    {
      id: "phd",
      title: "PhD in Foresight",
      startyear: 2012.01,
      endyear: 2015.12,
      company: "University of Cambridge",
      link: "https://www.cam.ac.uk/",
      logo: "/cv_portfolio/images/camb.jpg",
      grade: "",
      color: "bg-green-400",
      description: "I explored how cognitive biases inhibit rational decision-making about the future. I worked with a strategy consultancy firm to review the quality of foresight in senior execs in manufacturing firms. I also conducted a comparative analysis between UK and Chinese firms (spending 6 months in Beijing, hosted at Tsinghua University). I developed and tested an improved foresight process (with the help of the strategy consulting firm) and determined a material improvement in both the quality and breadth of foresight exhibited by decision makers.",
      projects: [
        "Advanced data analysis and modelling",
        "International conferences",
        "Foresight process development",
        "Comparative analysis between UK and Chinese firms",
        "Forecasting exogenous trends",
        "Strategic Decision Making"
      ]
    },
    {
      id: "cert",
      title: "Data",
      startyear: 2022.02,
      endyear: 2023.03,
      company: "Google Data Analytics Professional Certificate",
      link: "https://www.coursera.org/professional-certificates/google-data-analytics",
      logo: "/cv_portfolio/images/coursera.png",
      color: "bg-green-400",
      description: "Data Analytics Professional Certificate",
      projects: [
        "Data Analysis",
        "Data Visualization",
        "Data Cleaning",
        "Data Modeling",
        "Data Storytelling"
      ]
    },
    {
      id: "react",
      title: "React",
      startyear: 2023.10,
      endyear: 2024.10,
      company: "Javascript and React fundamentals",
      link: "https://www.coursera.org/learn/react-fundamentals",
      logo: "/cv_portfolio/images/coursera.png",
      color: "bg-green-400",
      description: "Javascript and React fundamentals",
      projects: [
        "Javascript and React fundamentals",
        "Webapp development",
        "GitHub"
      ]
    }
  ];

  const workData = [
    {
      id: "sweco",
      title: "Sweco",
      startyear: 2007.09,
      endyear: 2010.07,
      company: "Sweco Engineering Consultancy",
      link: "https://www.sweco.com/",
      logo: "/cv_portfolio/images/sweco.jpg",
      color: "bg-blue-700",
      description: "Early career mechanical and energy engineering experience",
      projects: [
        "Graduate of the year award",
        "St Botolphs - London - Office Development",
        "Vauxhall Cross - London - Residential Development",
        "107 Cheapside - London - Retail Fitout"
      ]
    },  
    {
      id: "unfccc",
      title: "",
      startyear: 2012.07,
      endyear: 2012.10,
      company: "UNFCCC",
      link: "https://unfccc.int/",
      logo: "/cv_portfolio/images/unfccc.jpg",
      color: "bg-blue-500",
      isSecondment: true,
      description: "Secondment to the UNFCCC to deliver expert advice on the Technology Roadmaps",
      projects: [
        "Consultant for the Technology Executive Committee (TEC) on the current state of climate change technology roadmaps (TRMs).",
        "Presented initial findings in early September at the UNFCCC 4th meeting of the TEC in Bangkok."
      ]
    },
    {
      id: "gofs",
      title: "",
      startyear: 2013.03,
      endyear: 2013.09,
      company: "Government Office for Science",
      link: "https://assets.publishing.service.gov.uk/media/5a7c321140f0b67d0b11f7e6/13-810-future-manufacturing-summary-report.pdf",
      logo: "/cv_portfolio/images/gofs.png",
      color: "bg-blue-500",
      isSecondment: true,
      description: "Secondment from PhD to the Government Office for Science to work on the Future of Manufacturing project",
      projects: [
        "The Foresight project examined the nature of manufacturing and its role over the next 40 years to the UK and global economies.",
        "The project delivered recommendations to the UK Government in Autumn 2013, providing a timely look at the long-term picture for the manufacturing sector out to 2050, investigating global trends and drivers of change.",
        "This aligned closely with Elliott's research into the influence of macro sustainability trends and drivers on corporate strategy in the manufacturing sector."
      ]
    },
    {
      id: "arup",
      title: "Arup",
      startyear: 2015.12,
      endyear: 2021.08,
      company: "Arup",
      link: "https://www.arup.com/",
      logo: "/cv_portfolio/images/Arup.png",
      color: "bg-blue-700",
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
      startyear: 2020.05,
      endyear: 2021.03,
      company: "C40 Cities",
      link: "https://www.c40.org/",
      logo: "/cv_portfolio/images/C40.png",
      color: "bg-blue-500",
      isSecondment: true,
      description: "European CAP Programme Manager, working directly with city officials across Europe & some of Middle East to help them develop a Climate Action Plan which is consistent with the 1.5°C Paris Agreement.",
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
      startyear: 2021.09,
      endyear: 2023.10,
      company: "Engineering & Design Consultancy",
      link: "https://www.ramboll.com/",
      logo: "/cv_portfolio/images/ramboll.png",
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
      id: "cabin",
      title: " ",
      startyear: 2023.10,
      endyear: 2023.12,
      company: "Break to build a log cabin",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7139043341559566336/",
      logo: "/cv_portfolio/images/cabin.png",
      color: "bg-blue-500",
      isSecondment: true,
      description: "Built a log cabin in the wilds of Northern California",
      projects: [
        "I left my job in Denmark and moved to Australia. A stopover in California gave me time to complete one of my dream projects... building a log cabin in the woods. No prior experience, just a desire to reconnect with nature and temporarily escape the hopelessness of working on sustainability everyday."
       ]
    },
    {
      id: "freelance",
      title: "Freelance",
      startyear: 2023.12,
      endyear: 2025.06,
      company: "Freelance Decarboinisation Specialist",
      link: "https://emoreconsulting.com/",
      logo: "/cv_portfolio/images/EMC.png",
      color: "bg-blue-700",
      description: "Helping companies with measuring their GHG emissions, setting reduction targets, and co-creating a reduction strategy.",
      projects: [
        "GHG inventory development",
        "Net-zero mitigation trajectory planning",
        "Climate adaptation and impact assessments",
        "Target setting"
      ]
    }
  ];

  // Combine both arrays for finding selected period
  const allData = [...academicData, ...workData];

  // Calculate timeline range dynamically
  const startYear = 2003;
  const maxEndYear = Math.max(...allData.map(item => item.endyear));
  const timelineSpan = maxEndYear - startYear;

  // Helper function to convert decimal year to month number (1-12)
  const getMonthFromDecimal = (year: number): number => {
    const decimal = year - Math.floor(year);
    
    // New format: .01 = January, .02 = February, ..., .11 = November, .12 = December
    const month = Math.round(decimal * 100);
    console.log(`Year: ${year}, Decimal: ${decimal}, Month: ${month}`);
    return month;
  };

  // Helper function to format year display
  const formatYear = (year: number): string => {
    if (year % 1 === 0) {
      return year.toString();
    }
    const wholeYear = Math.floor(year);
    const month = getMonthFromDecimal(year);
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[month - 1]} ${wholeYear}`;
  };

  // Helper function to format year range for display
  const formatYearRange = (start: number, end: number): string => {
    if (start % 1 === 0 && end % 1 === 0) {
      return `${start}-${end}`;
    }
    return `${formatYear(start)} - ${formatYear(end)}`;
  };

  return (
    <section id="timeline" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            15 years of experience from engineering fundamentals to climate leadership. 
            </p>
        </div>

        <div className="mb-12">
          <div className="relative">
            {/* Timeline Years */}
            <div className="flex justify-between text-sm text-gray-500 mb-4 px-4">
              {Array.from({ length: Math.ceil(timelineSpan) + 1 }, (_, i) => startYear + i).filter((year, i) => i % 2 === 0).map(year => (
                <span key={year} className="text-xs">{year}</span>
              ))}
            </div>
            
            {/* Academic Timeline Row */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-gray-700 mb-2">Academic & Professional Development</div>
              <div className="relative h-16 bg-gray-100 rounded-lg overflow-hidden">
                {academicData.map((item) => {
                  // Convert decimal years to actual month positions
                  const startYearDecimal = Math.floor(item.startyear) + (getMonthFromDecimal(item.startyear) - 1) / 12; // for January this is 0.01, for February this is 0.02, etc.
                  const endYearDecimal = Math.floor(item.endyear) + (getMonthFromDecimal(item.endyear) - 1) / 12; // for January this is 0.01, for February this is 0.02, etc.
                  
                  const startPos = ((startYearDecimal - startYear) / timelineSpan) * 100; // 0% is startYear, 100% is maxEndYear
                  const width = ((endYearDecimal - startYearDecimal) / timelineSpan) * 100; // 0% is startYear, 100% is maxEndYear
                  
                  return (
                    <div
                      key={item.id}
                      className={`absolute top-2 h-12 ${item.color} rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center text-white font-semibold`}
                      style={{
                        left: `${startPos}%`,
                        width: `${width}%`,
                        minWidth: '0px'
                      }}
                      onClick={() => setSelectedPeriod(selectedPeriod === item.id ? null : item.id)}
                    >
                      <span className="text-xs font-bold">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Work Experience Timeline Row */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-gray-700 mb-2">Professional Experience</div>
              <div className="relative h-16 bg-gray-100 rounded-lg overflow-hidden">
                {workData.map((item) => {
                  // Convert decimal years to actual month positions
                  const startYearDecimal = Math.floor(item.startyear) + (getMonthFromDecimal(item.startyear) - 1) / 12;
                  const endYearDecimal = Math.floor(item.endyear) + (getMonthFromDecimal(item.endyear) - 1) / 12;
                  
                  console.log(`${item.title}: ${item.startyear} -> ${startYearDecimal}, ${item.endyear} -> ${endYearDecimal}`);
                  
                  const startPos = ((startYearDecimal - startYear) / timelineSpan) * 100;
                  const width = ((endYearDecimal - startYearDecimal) / timelineSpan) * 100;
                  const isSecondment = item.isSecondment || false;
                  
                  return (
                    <div
                      key={item.id}
                      className={`absolute h-12 ${item.color} rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center text-white font-semibold`}
                      style={{
                        left: `${startPos}%`,
                        width: `${width}%`,
                        minWidth: '0px',
                        top: isSecondment ? '16px' : '8px'
                      }}
                      onClick={() => setSelectedPeriod(selectedPeriod === item.id ? null : item.id)}
                    >
                      <span className="text-xs font-bold">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Period Details */}
        {selectedPeriod && (
          <Card className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl animate-fade-in">
            {(() => {
              const selected = allData.find(item => item.id === selectedPeriod);
              return selected ? (
                <div>
                  <div className="relative">
                    {/* Logo in top right */}
                    {selected.logo && (
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-lg shadow-md p-2 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-300">
                        <img 
                          src={selected.logo} 
                          alt={`${selected.company} logo`}
                          className="max-w-full max-h-full object-contain"
                          onClick={() => window.open(selected.link, '_blank', 'noopener,noreferrer')}
                          onLoad={() => console.log(`Logo loaded successfully: ${selected.logo}`)}
                          onError={(e) => {
                            console.error(`Failed to load logo: ${selected.logo}`);
                            // Fallback to company name if logo fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden text-xs font-semibold text-gray-600 text-center leading-tight cursor-pointer" onClick={() => window.open(selected.link, '_blank', 'noopener,noreferrer')}>
                          {selected.company}
                        </div>
                      </div>
                    )}
                    
                    {/* Title and period */}
                    <div className="flex items-center gap-4 mb-6 pr-20">
                      <div className={`w-4 h-4 ${selected.color} rounded-full`}></div>
                      <h3 className="text-3xl font-bold text-gray-900">{selected.company}</h3>
                      <span className="text-lg text-gray-500">({formatYearRange(selected.startyear, selected.endyear)})</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{selected.description}</p>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Achievements:</h5>
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
