import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="main">
      <HeroSection/>
      <Featured/>
      <WhyChooseUs/>
    </div>
  );
}
