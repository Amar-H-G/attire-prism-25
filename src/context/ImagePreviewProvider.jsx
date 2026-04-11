import { useCallback, useMemo, useState } from 'react'
import { ImageModal } from '../components/ImageModal'
import { ImagePreviewContext } from './imagePreviewContext'

export function ImagePreviewProvider({ children }) {
  const [modal, setModal] = useState({
    open: false,
    src: '',
    alt: '',
  })

  const openPreview = useCallback((src, alt) => {
    setModal({ open: true, src, alt: alt || '' })
  }, [])

  const closePreview = useCallback(() => {
    setModal((m) => ({ ...m, open: false }))
  }, [])

  const value = useMemo(
    () => ({ openPreview, closePreview }),
    [openPreview, closePreview],
  )

  return (
    <ImagePreviewContext.Provider value={value}>
      {children}
      <ImageModal
        open={modal.open}
        src={modal.src}
        alt={modal.alt}
        onClose={closePreview}
      />
    </ImagePreviewContext.Provider>
  )
}
