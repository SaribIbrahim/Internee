import LeftHero from "./LeftHero.jsx";
import RightHero from "./RightHero.jsx";

const Hero = () => {
  return (
    <div className="flex flex-col items-center py-10 lg:flex-row lg:gap-30 lg:px-10 xl:px-20 mb-10">
      <LeftHero />
      <RightHero />
    </div>
  );
};

export default Hero;
