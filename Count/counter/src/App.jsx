import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  const removeValue = () => {
    counter>0 ? setCounter(counter - 1): setCounter(5);
  }


  return (
    <>
      <button
      onClick={removeValue}
      >Current Value {counter}</button>
    </>
  )
}

export default App
