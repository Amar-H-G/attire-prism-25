import { useCallback, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProductSection } from './components/ProductSection'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'
import { ImageModal } from './components/ImageModal'

function App() {
  const [modal, setModal] = useState({
    open: false,
    src: '',
    alt: '',
  })

  const openImage = useCallback((src, alt) => {
    setModal({ open: true, src, alt: alt || '' })
  }, [])

  const closeModal = useCallback(() => {
    setModal((m) => ({ ...m, open: false }))
  }, [])

  return (
    <div className="min-h-dvh bg-surface-950 text-muted antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductSection onOpenImage={openImage} />
        <About onOpenImage={openImage} />
        <Gallery onOpenImage={openImage} />
      </main>
      <Footer />
      <ImageModal
        open={modal.open}
        src={modal.src}
        alt={modal.alt}
        onClose={closeModal}
      />
    </div>
  )
}

export default App
