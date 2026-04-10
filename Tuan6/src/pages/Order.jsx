import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Order() {
  if (!sessionStorage.getItem('login')) {
    return <Navigate to='/dashboard/login' />
  }
  return (
    <div>
      Order
    </div>
  )
}
