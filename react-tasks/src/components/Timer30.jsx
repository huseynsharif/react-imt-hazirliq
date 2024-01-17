import React, { useEffect, useState } from 'react'

export default function Timer30() {

    const [sec, setSec] = useState(30)

    useEffect(()=>{
        setInterval(()=>{
            setSec(prev=>{
                if (prev>0) {
                    return prev-1
                }
                else{
                    return 0;
                }
            })
        }, 1000)
    },[])


  return (
    <div>

        <h1>{sec}</h1>

    </div>
  )
}
