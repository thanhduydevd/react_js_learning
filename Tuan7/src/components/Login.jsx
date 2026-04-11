import React from 'react'
import { useRecoilState } from 'recoil'
import loginAtom from '../states/loginAtom'

export default function Login() {
  const [user, setUser] = useRecoilState(loginAtom)

  function handleLogin(){
    setUser({id:1, name:'duy',age:22})
    console.log(user);
    
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
