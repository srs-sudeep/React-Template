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
    <>
      <div>
        <p>Hello World</p>
      </div>
    </>
  )
}

export default App
