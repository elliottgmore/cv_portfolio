
import { Card } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Elliott's technical expertise and strategic thinking have been instrumental in developing our net-zero transition plan. His ability to translate complex climate science into actionable business strategies is exceptional.",
      author: "Sarah Chen",
      role: "Head of Sustainability, Major Pension Fund",
      company: "International Investment Group"
    },
    {
      text: "Working with Elliott at Ramboll was inspiring. His leadership in the sustainability department and innovative approach to decarbonisation challenges consistently delivered outstanding results for our clients.",
      author: "Michael Andersen",
      role: "Senior Consultant",
      company: "Ramboll Denmark"
    },
    {
      text: "Elliott's work on our climate action plan at C40 was exemplary. His programme management of 15 cities simultaneously while providing deep technical expertise was remarkable and highly effective.",
      author: "Dr. Maria Rodriguez",
      role: "Director of Climate Planning",
      company: "C40 Cities Climate Leadership Group"
    },
    {
      text: "Elliott brings a unique combination of engineering rigor and climate expertise. His trusted advisor approach has helped us challenge our assumptions and develop more robust sustainability strategies.",
      author: "James Thompson",
      role: "Chief Sustainability Officer",
      company: "Real Estate Investment Trust"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Client & Colleague Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building trusted relationships through exceptional delivery and innovative thinking
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl"
            >
              <div className="mb-6">
                <div className="text-blue-500 text-4xl mb-4">"</div>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="font-semibold text-gray-900 text-lg">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.role}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
