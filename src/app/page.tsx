import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsCards from "@/components/TestimonialsCards";
import Founders from "@/components/Founders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="main">
      <HeroSection/>
      <Featured/>
      <WhyChooseUs/>
      <TestimonialsCards/>
      <Founders/>
      <Footer/>
      
      
    </div>
  );
}
