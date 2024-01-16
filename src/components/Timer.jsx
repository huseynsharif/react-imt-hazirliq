import React, { useEffect, useState } from 'react'

export default function Timer() {

    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setSec(prev=>prev+1)
            
        }, 1000)
    },[])

    useEffect(() => {
        if(sec==60){
            setMin(m => m + 1);
            setSec(0)
        }
    
    }, [sec])
    

  return (
    <div>

        <h1>{min} : {sec}</h1>

    </div>
  )
}
