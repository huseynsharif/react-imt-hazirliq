import React, { useReducer, useState } from 'react'

export default function CounterComponent() {


    const [state, dispatch] = useReducer(reducer, {value:1})

    function reducer(state, action) {
        switch(action.type){
            case 'VURMA' : return {value: state.value*2}
            case 'BOLME' : return {value: state.value/2}
        }
    }

  return (
    <div>

        <h1>{state.value}</h1>
        <button onClick={()=>dispatch({ type:'VURMA' })}>VURMA</button>
        <button  onClick={()=>dispatch({ type:'BOLME' })}>BOLME</button>

    </div>
  )
}
