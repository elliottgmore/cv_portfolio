
import { Card } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Elliott is a true climate champion. We worked together at Rambøll, delivering on the most ambitious sustainability projects in order to transfrom the construction industry in Denmark. Elliott is always focused and combines his technical experience with creativity to find unique solutions for each client. I hope that we have the opportunity to work together in the future!",
      author: "Nanna Lee Thusgaard",
      role: "Sustainability Nerd",
      company: "ex-Ramboll"
    },
    {
      text: "I had the pleasure of working with Elliott during his secondment to C40, where he led the delivery of critical, timely, technical assistance to European member cities. Elliott combines technical aptitude with human understanding, making him uniquely able to provide complex technical support and manage relationships. I look forward to working with Elliott again.",
      author: "Julia Lipton",
      role: "Climate Action Lead",
      company: "C40 Cities"
    },
    {
      text: "I had the pleasure of working closely with Elliott both during our time at the C40 Climate Leadership Group and at Ramboll. Elliott is not just a valuable team member, but a true driving force behind advancing the sustainability agenda. His commitment to this cause is unwavering, and he possesses a rare ability to lead and inspire others to join him in pushing the boundaries of analysis and ambition to achieve impactful results.",
      author: "Paulina Lis",
      role: "Urban sustainability transitions",
      company: "Ramboll"
    },
    {
      text: "Elliott is a true climate champion. We worked together supporting climate leading cities deliver on the most ambitious objectives of the Paris Agreement. What an adventure! He was absolutely key in the success of this program. Always focused, tremendously well-organised, paying attention to every detail and with a strong solid technical background that always amazed me and made me feel supported. I hope that we have the opportunity to work together in the future!",
      author: "Júlia López Ventura",
      role: "European Regional Director",
      company: "C40 Cities"
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
