import React from 'react'
import { useRecoilValue } from 'recoil'
import counterAtom from "../states/counterAtom"

export default function ComA() {
  var value = useRecoilValue(counterAtom);
  return (
    <div>
      Counter Value: {value}
    </div>
  )
}
