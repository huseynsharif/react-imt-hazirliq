import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    const artir = ()=>{
        setCount(prev => prev + 1);
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={artir}>Artir</button>

    </div>
  )
}
