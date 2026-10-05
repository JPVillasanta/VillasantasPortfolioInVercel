import './App.css'
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
  return (
    <div className="site-shell">
      <Header />
      <main id="top">
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
