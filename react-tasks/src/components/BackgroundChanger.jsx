import React, { useState } from 'react'

export default function BackgroundChanger() {
    const [backColor, setBackColor] = useState('white')

    const handleChange = (e)=>{
        const color = e.target.value;
        setBackColor(color)
        console.log(e.target.value);
    }
    return (
        <div style={{
            
            backgroundColor:backColor,
            width:"100px",
            height:"100px"
            }}>
            <select id='selectColor' onChange={(e)=>handleChange(e)}>
                <option value={'white'}>SECIN</option>
                <option value={'blue'}>Mavi</option>
                <option value={'red'}>Qırmızı</option>
                <option value={'green'}>Yaşıl</option>
            </select>

        </div>
    )
}
