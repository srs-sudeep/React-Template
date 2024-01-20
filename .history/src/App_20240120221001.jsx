import Router from './routes'
import React, { useEffect, useState } from 'react'
// routes
import { BrowserRouter } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <LoadingPage />
  }
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <StyledChart />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
