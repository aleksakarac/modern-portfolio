import HiImBox from "./HiImBox"
import SkillsBox from "./SkillsBox"
import Avatar from "./Avatar"
import ViewWorkBox from "./ViewWorkBox"
import ContactBox from "./ContactBox"

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full">
      {/* Contact button at top center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <ContactBox />
      </div>
      {/* Main content: row with intro, avatar, skills */}
      <div className="flex flex-row items-center justify-center w-full gap-12 z-10">
        <HiImBox />
        <Avatar />
        <SkillsBox />
      </div>
      {/* View Work button at bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ViewWorkBox />
      </div>
    </section>
  )
}
export default Hero
