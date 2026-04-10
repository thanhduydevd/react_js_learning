import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetail() {
    const dieuHuong = useNavigate();
    const {id} = useParams();
  return (
    <div>
      Product ID: {id}
      <br/>
      <button onClick={()=>{dieuHuong('/dashboard/checkout/' + id)}}>Mua</button>
    </div>
  )
}
