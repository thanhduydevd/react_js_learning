import React from 'react'
import themeAtom from '../states/themeAtom'
import { useRecoilValue, useRecoilState } from 'recoil'

export default function ChangeTheme() {
  const themeValue = useRecoilValue(themeAtom);
  const [theme, setTheme] = useRecoilState(themeAtom);

  function handleChange(){
    if(themeValue == 'light'){
        localStorage.setItem('theme','dark')
        setTheme('dark')
    }else if(themeValue == 'dark'){
        localStorage.setItem('theme','light')
        setTheme('light')
    }
  }
  
  return (
    <div>
      <button onClick={handleChange}>{themeValue}</button>
    </div>
  )
}
