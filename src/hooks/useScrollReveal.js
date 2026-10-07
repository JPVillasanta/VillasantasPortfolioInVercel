import { useEffect, useRef } from 'react'

export default function useScrollReveal() {
  const root = useRef(null)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches || !('IntersectionObserver' in window)) return
    const elements = root.current.querySelectorAll('main section:not(.hero), .project-card, .skill-card')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.06 })
    elements.forEach((element) => {
      element.classList.add('reveal-pending')
      observer.observe(element)
    })
    const clear = () => {
      if (media.matches) {
        observer.disconnect()
        elements.forEach((element) => element.classList.remove('reveal-pending'))
      }
    }
    media.addEventListener('change', clear)
    return () => {
      observer.disconnect()
      media.removeEventListener('change', clear)
      elements.forEach((element) => element.classList.remove('reveal-pending'))
    }
  }, [])
  return root
}
