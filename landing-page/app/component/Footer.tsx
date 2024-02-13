import { footer } from '@/type'
import React from 'react'

export default function Footer(props:footer) {
  return (
    <>
    <div>
        <div style={props.color} className=""  >
            <h1 className='text-5xl pb-5'>{props.title}</h1>
            <p className='pb-5'>{props.paraDetails}</p>
            <p className=''>{props.mail}</p>
        </div>
        
    </div>
    </>
  )
}
