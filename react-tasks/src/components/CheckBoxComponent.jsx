import React, { useEffect, useRef, useState } from 'react'

export default function CheckBoxComponent() {

    const checboxRef = useRef()

    const [disabled, setDisabled] = useState(true)

    const handleChange = ()=>{
        setDisabled(!checboxRef.current.checked)
    }

  return (
    <div>
        <input ref={checboxRef} type='checkbox' onChange={handleChange}/>
        <button disabled={disabled}>BUTTON</button>
    </div>
  )
}
