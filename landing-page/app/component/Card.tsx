import { cardTypes } from '@/type'
import Image from 'next/image'

import React from 'react'

export default function Card(props:cardTypes) {
  return (
    <>
    
    <div className="w-80 shadow-md shadow-gray-400 rounded-md ">
            <Image
              className="mb-5"
              src={props.image}
              alt="Image loading..."
              width={"320"}
              height={"300"}
            />
            <h1 className="text-lg font-bold mb-3 ml-5 ">{props.title}</h1>
            <p className="mx-5 mb-10">
              {props.Description}
            </p>
          </div>
          
    </>
  )
}
