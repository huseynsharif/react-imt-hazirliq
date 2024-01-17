import React from 'react'

export default function DynamicSection({sectionId, children}) {
  return (
    <div>

        <section
            id={sectionId}
            style={{
                backgroundColor: 'gray',
                color:'red',
                fontSize:"24px"
            }}
        >{children}</section>

    </div>
  )
}
