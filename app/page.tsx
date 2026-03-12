import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import ScopeOfWork from './components/ScopeOfWork'
import Commercial from './components/Commercial'
import Terms from './components/Terms'
import WhyMVNE from './components/WhyMVNE'
import Downloads from './components/Downloads'
import NextSteps from './components/NextSteps'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <ScopeOfWork />
        <Commercial />
        <Terms />
        <WhyMVNE />
        <Downloads />
        <NextSteps />
      </main>
      <Footer />
    </>
  )
}
