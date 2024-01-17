import React, { useState } from 'react'

export default function Form() {

    const [text, setText] = useState('')
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div>

            <form onSubmit={(e)=>handleSubmit(e)}>
                <input
                    type='text'
                    onChange={(e)=>handleChange(e)}
                />
                <button>SUBMIT</button>
            </form>
            <h1>{text}</h1>
        </div>
    )
}
