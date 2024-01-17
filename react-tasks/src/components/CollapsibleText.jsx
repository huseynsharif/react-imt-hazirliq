import React, { useState } from 'react'

export default function CollapsibleText({ header, content }) {

    const [show, setShow] = useState(false)

    const handleClick = ()=>{
        setShow((prevShow)=>!prevShow)
    }

    return (
        <div>

            <h1 onClick={handleClick}>{header}</h1>
            {show && <div>{content}</div>}
        </div>
    )
}
