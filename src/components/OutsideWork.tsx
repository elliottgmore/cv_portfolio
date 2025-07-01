
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const OutsideWork = () => {
  const activities = [
    {
      title: "I love to volunteer",
      description: "I am a proud volunteer Surf Lifesaver at Bondi Beach.",
      image: "/lovable-uploads/6248ac21-03e7-457f-8530-3ed9fb9a10df.png",
      alt: "Volunteer Surf Lifesavers at Bondi Beach"
    },
    {
      title: "Play sports",
      description: "I have played Ultimate Frisbee since falling in love with the sport at University, and have been lucky enough to compete internationally with both the Australian and Great Britain teams.",
      image: "/lovable-uploads/3ec05652-4f9e-40f4-926d-bdcecf75702a.png",
      alt: "Playing Ultimate Frisbee"
    },
    {
      title: "Get out in nature",
      description: "Spending as much time out of the city is vital to me. I recently got to live out my boyhood dream of building an off-grid log cabin in the wilds of Northern California.",
      image: "/lovable-uploads/ccd79284-f3ad-4652-b733-07a88e37a1ce.png",
      alt: "Building log cabin in Northern California"
    }
  ];

  return (
    <section id="outside-work" className="py-20 px-6 bg-gradient-to-br from-blue-50/30 to-green-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Outside of Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond my professional life, I'm passionate about giving back to the community, 
            staying active, and connecting with nature
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {activities.map((activity, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="bg-white/70 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 z-10"></div>
                          <img 
                            src={activity.image}
                            alt={activity.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight">
                            {activity.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white/90 transition-all duration-300" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white/90 transition-all duration-300" />
          </Carousel>
          
          {/* Mobile navigation dots */}
          <div className="flex justify-center mt-8 md:hidden">
            <div className="flex space-x-2">
              {activities.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
