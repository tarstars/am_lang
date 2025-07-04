import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { analytics } from './firebase'
import { logEvent } from 'firebase/analytics'

export default function usePageViews() {
  const location = useLocation()

  useEffect(() => {
    logEvent(analytics, 'page_view', {
      page_path: location.pathname + location.search,
    })
  }, [location])
}
