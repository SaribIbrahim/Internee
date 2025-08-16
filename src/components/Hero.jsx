import LeftHero from "./LeftHero.jsx"
import RightHero from "./RightHero.jsx"

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-30 py-10 lg:px-10 xl:px-20 items-center ">
      <LeftHero/>
      <RightHero/>
    </div>
  )
}

export default Hero