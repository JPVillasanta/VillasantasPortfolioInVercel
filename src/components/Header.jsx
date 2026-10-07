import { useEffect, useState } from 'react'
import Arrow from './Arrow'

const links = ['about', 'projects', 'skills', 'contact']

export default function Header() {
  const [active, setActive] = useState('')
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      let current = ''
      links.forEach((id) => {
        if (document.getElementById(id)?.getBoundingClientRect().top <= 160) current = id
      })
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = 'contact'
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Jhon Paul Villasanta, back to top">JP<span>.</span>V</a>
      <nav aria-label="Main navigation">
        {links.map((id) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
      <a className="header-link" href="https://github.com/JPVillasanta" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
    </header>
  )
}
