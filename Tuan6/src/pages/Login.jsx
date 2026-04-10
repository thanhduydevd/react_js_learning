import React from 'react'

export default function Login() {
  var trangThai = 'Chua dang nhap';
  if(sessionStorage.getItem('login')){
    trangThai = 'Da dang nhap';
  }else{
    trangThai = 'Chua dang nhap'
  }
  return (
    <div>
      
      {
        sessionStorage.getItem('login') ? <button onClick={()=>sessionStorage.clear()}>Dang xuat</button> : <button onClick={()=>sessionStorage.setItem("login","true")}>Dang nhap</button>
      }
      <br/>
      {trangThai}
    </div>
  )
}
