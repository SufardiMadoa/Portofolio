import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Button } from './components/ui/button'
import Index from './pages'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index/>
    </>
  )
}

export default App
