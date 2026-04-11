import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ImagePreviewProvider } from '../context/ImagePreviewProvider'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { RouteFallback } from '../components/RouteFallback'

export function MainLayout() {
  return (
    <ImagePreviewProvider>
      <div className="flex min-h-dvh flex-col bg-surface-950 text-muted antialiased">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<RouteFallback />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ImagePreviewProvider>
  )
}
