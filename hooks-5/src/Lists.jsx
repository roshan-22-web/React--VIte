import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Lists = ({getItems}) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
     setItems(getItems(10))
     console.log("setting items");
     
    }
    ,[getItems])

  return (
    <div>
        {items.map((item,index) =>{
           return <p key={index}>{item}</p>
        })}
    </div>
  )
}

export default Lists