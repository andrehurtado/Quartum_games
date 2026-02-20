import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProblemSolution } from '@/components/ProblemSolution'
import { HardwareTiers } from '@/components/HardwareTiers'
import { GameCatalog } from '@/components/GameCatalog'
import { HowItWorks } from '@/components/HowItWorks'
import { WhoItsFor } from '@/components/WhoItsFor'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <HardwareTiers />
        <GameCatalog />
        <HowItWorks />
        <WhoItsFor />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
