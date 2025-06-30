
import { Card } from "@/components/ui/card";

export const Tools = () => {
  const tools = [
    {
      name: "Excel",
      description: "Advanced data analysis & modeling",
      logo: "📊"
    },
    {
      name: "JavaScript",
      description: "Web development & automation",
      logo: "🟨"
    },
    {
      name: "React",
      description: "Modern web applications",
      logo: "⚛️"
    },
    {
      name: "Figma",
      description: "Design & prototyping",
      logo: "🎨"
    },
    {
      name: "Notion",
      description: "Project management & documentation",
      logo: "📝"
    },
    {
      name: "Python",
      description: "Data science & analysis",
      logo: "🐍"
    }
  ];

  return (
    <section id="tools" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Tools & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge tools to deliver innovative solutions and insights
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tool.logo}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{tool.name}</h3>
              <p className="text-gray-600 text-sm">{tool.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
