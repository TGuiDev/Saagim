import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundLayers from './components/BackgroundLayers'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import DifferentialsSection from './components/DifferentialsSection'
import RulesRequirementsSection from './components/RulesRequirementsSection'
import FaqSection from './components/FaqSection'
import FinalCtaSection from './components/FinalCtaSection'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement

    const updateScrollProgress = () => {
      const maxScroll = root.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      root.style.setProperty('--scroll-progress', `${Math.min(Math.max(progress, 0), 1)}`)
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title-line', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
      })

      gsap.from('.hero-sub, .hero-cta, .hero-badge, .topbar', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        delay: 0.2,
        ease: 'power2.out',
      })

      gsap.from('.feature-card', {
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        delay: 0.35,
        ease: 'power2.out',
      })

      gsap.utils.toArray('.reveal').forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 84%',
          },
        })
      })

      gsap.utils.toArray('.panel-reveal').forEach((panel) => {
        gsap.from(panel, {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 88%',
          },
        })
      })

      gsap.to('.bg-mesh', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="theme-text relative min-h-screen">
      <CustomCursor />
      <div className="scroll-fx-rail" aria-hidden="true">
        <span className="scroll-fx-star" />
      </div>
      <BackgroundLayers />
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-8">
        <HeroSection />
        <AboutSection />
        <DifferentialsSection />
        <RulesRequirementsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </div>
  )
}

export default App
