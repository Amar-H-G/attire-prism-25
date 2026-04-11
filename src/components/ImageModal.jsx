import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'

export function ImageModal({ open, src, alt, onClose }) {
  const closeBtnRef = useRef(null)
  useBodyScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const t = requestAnimationFrame(() => closeBtnRef.current?.focus())
    return () => {
      window.removeEventListener('keydown', onKey)
      cancelAnimationFrame(t)
    }
  }, [open, onClose])

  if (!open || !src) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        type="button"
        className="absolute inset-0 bg-surface-950/90 backdrop-blur-sm"
        aria-label="Close preview"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[90dvh] max-w-[min(96vw,1200px)] overflow-hidden rounded-2xl border border-white/10 bg-surface-800 shadow-2xl shadow-primary/10">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-surface-900/90 text-white ring-1 ring-white/10 transition hover:bg-primary hover:ring-primary/40"
          aria-label="Close"
        >
          <X className="h-5 w-5" strokeWidth={2} />
        </button>
        <img
          src={src}
          alt={alt || 'Preview'}
          className="block max-h-[85dvh] w-full object-contain"
        />
      </div>
    </div>
  )
}
