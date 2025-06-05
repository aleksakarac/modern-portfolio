import HiImBox from "./HiImBox"
import SkillsBox from "./SkillsBox"
import Avatar from "./Avatar"
import ViewWorkBox from "./ViewWorkBox"
import ContactBox from "./ContactBox"

function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] w-full">
      {/* Contact Box (top center) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <ContactBox />
      </div>
      {/* Main Row: HiImBox (left), Avatar (center), SkillsBox (right) */}
      <div className="flex flex-row items-center justify-center w-full gap-8 z-10">
        <HiImBox />
        <Avatar />
        <SkillsBox />
      </div>
      {/* View Work Box (bottom center) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <ViewWorkBox />
      </div>
    </section>
  )
}

export default Hero
