import React from 'react'

export default function StyledText({fontColor, message}) {


  return (
    <div>

        <h1 style={{color:{fontColor}}}>{message}</h1>

    </div>
  )
}
