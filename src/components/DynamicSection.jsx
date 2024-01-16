import React from 'react'

export default function DynamicSection({htmlContent, sectionId}) {
  return (
    <div>

        <section
            id={sectionId}
            style={{
                backgroundColor: 'gray',
                color:'red',
                fontSize:"24px"
            }}
        >{htmlContent}</section>

    </div>
  )
}
