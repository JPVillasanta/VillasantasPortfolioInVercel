import './App.css'
import useScrollReveal from './hooks/useScrollReveal'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const shellRef = useScrollReveal()
  return (
    <div className="site-shell" ref={shellRef}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <div id="top" />
        <Hero />
        <Profile />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
