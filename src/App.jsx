import React from 'react'
import { useState } from 'react'
import Header from "./Header.jsx"
import Ivan from './Ivan.jsx'
import './index.css'

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Header count={count}/>
      <Ivan incrementCount={incrementCount}/>
    </div>
  )
}

export default App
