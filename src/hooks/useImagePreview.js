import { useContext } from 'react'
import { ImagePreviewContext } from '../context/imagePreviewContext'

export function useImagePreview() {
  const ctx = useContext(ImagePreviewContext)
  if (!ctx) {
    throw new Error('useImagePreview must be used within ImagePreviewProvider')
  }
  return ctx
}
