import React from 'react'
import { useParams } from 'react-router-dom'

export default function Checkout() {
   const {id} = useParams();
  return (
    <div>
      Thanh toan thanh cong san pham: {id}
    </div>
  )
}
