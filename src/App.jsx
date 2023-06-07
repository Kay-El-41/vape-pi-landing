import './App.css'
import Navbar from './components/Navbar'
import BestDealSection from './sections/BestDealSection'
import DeviceSection from './sections/DeviceSection'
import FlavorSection from './sections/FlavorSection'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import NewReleasedSection from './sections/NewReleasedSection'
import ProductSection from './sections/ProductSection'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <BestDealSection />
        <ProductSection />
        <NewReleasedSection />
        <FlavorSection />
        <DeviceSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App