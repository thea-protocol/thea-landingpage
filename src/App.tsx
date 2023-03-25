import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeNew from './pages/HomeNew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomeNew />
    </div>
  )
}

export default App
