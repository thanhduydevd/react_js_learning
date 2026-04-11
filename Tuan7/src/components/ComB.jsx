import React from 'react'
import { useRecoilState } from 'recoil'
import counterAtom from '../states/counterAtom'

export default function ComB() {
  const [count, setCount] = useRecoilState(counterAtom)
  

  function handleTang(){
        setCount(count+1);
  }

  function handleGiam(){
        setCount(count-1);
  }
  return (
    <div>
      <button onClick={handleTang}>+</button>
      <button onClick={handleGiam}>-</button>
    </div>
  )
}
