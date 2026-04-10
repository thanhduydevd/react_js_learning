import React from 'react'
import { Link } from 'react-router-dom';

const sanPham = [{id:1,name:'Ao'},{id:2,name:'Quan'}];
export default function Product() {
  return (
    <div>
      Product: 
      <ul>
      {sanPham.map((item)=>{
        return (
            <li>
                <Link to={`/product/${item.id}`}>{item.name}</Link>
            </li>
        )
      })
      }
      </ul>
    </div>
  )
}
