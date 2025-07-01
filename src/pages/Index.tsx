
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Tools } from "@/components/Tools";
import { OutsideWork } from "@/components/OutsideWork";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Tools />
      <Testimonials />
      <OutsideWork />
      <CTA />
    </div>
  );
};

export default Index;
