import { useState } from 'react'
import './App.css'

import ProgressRing from './components/ProgressRing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProgressRing/>
    </div>
  )
}

export default App
