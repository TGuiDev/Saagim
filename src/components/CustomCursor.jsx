import { useEffect, useRef } from 'react'

function isInteractiveTarget(target) {
  if (!(target instanceof Element)) {
    return false
  }

  return Boolean(
    target.closest('a, button, summary, input, textarea, select, label, [role="button"], [data-cursor="active"]'),
  )
}

function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches

    if (!finePointer) {
      return undefined
    }

    const ringEl = ringRef.current
    const dotEl = dotRef.current

    if (!ringEl || !dotEl) {
      return undefined
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: target.x, y: target.y }
    const dot = { x: target.x, y: target.y }

    let rafId = 0

    const animate = () => {
      ring.x += (target.x - ring.x) * 0.3
      ring.y += (target.y - ring.y) * 0.3
      dot.x += (target.x - dot.x) * 0.58
      dot.y += (target.y - dot.y) * 0.58

      ringEl.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(var(--cursor-ring-scale, 1))`
      dotEl.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%) scale(var(--cursor-dot-scale, 1))`

      rafId = window.requestAnimationFrame(animate)
    }

    const showCursor = () => {
      ringEl.classList.add('is-visible')
      dotEl.classList.add('is-visible')
    }

    const hideCursor = () => {
      ringEl.classList.remove('is-visible')
      dotEl.classList.remove('is-visible')
    }

    const handleMove = (event) => {
      target.x = event.clientX
      target.y = event.clientY
      showCursor()
    }

    const handleHover = (event) => {
      const active = isInteractiveTarget(event.target)
      ringEl.classList.toggle('is-active', active)
      dotEl.classList.toggle('is-active', active)
    }

    const handleDown = () => {
      ringEl.classList.add('is-pressing')
      dotEl.classList.add('is-pressing')
    }

    const handleUp = () => {
      ringEl.classList.remove('is-pressing')
      dotEl.classList.remove('is-pressing')
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hideCursor()
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleHover, { passive: true })
    window.addEventListener('mousedown', handleDown, { passive: true })
    window.addEventListener('mouseup', handleUp, { passive: true })
    window.addEventListener('mouseleave', hideCursor)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    rafId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleHover)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  )
}

export default CustomCursor