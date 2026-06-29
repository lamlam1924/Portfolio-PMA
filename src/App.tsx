import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import RightDock from './components/layout/RightDock'
import Hero from './components/sections/Hero'
import ProjectSection from './components/sections/GrowthSection'
import CaseStudySection from './components/sections/WorkingJournalSection'
import ContactSection from './components/sections/ContactSection'
import './styles/globals.css'

function App() {
  return (
    <div className="site">
      <Header />
      <RightDock />

      <main>
        <Hero />
        <ProjectSection />
        <CaseStudySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
