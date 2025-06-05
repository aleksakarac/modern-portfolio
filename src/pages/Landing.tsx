import Header from '../components/Header'
import Hero from '../components/Hero'
import AnimatedBackground from '../components/AnimatedBackground'

function Landing() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <AnimatedBackground />
      <Header />
      <Hero />
    </div>
  )
}
export default Landing
