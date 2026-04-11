import { useEffect, useState } from 'react'
import './App.css'
import ComA from "./components/ComA"
import ComB from './components/ComB'
import ChangeTheme from './components/ChangeTheme'
import themeAtom from './states/themeAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import Login from './components/Login'
import loginAtom from './states/loginAtom'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const [user, setUser] = useRecoilState(loginAtom)

  useEffect(()=>{
    setTheme(localStorage.getItem("theme"))
  },[]);
  return (
    <div className={theme == 'light' ? 'dark' : 'light'}>
      <p>{user ? 'Xin chao ' + user.name : 'Ban chua dang nhap'}</p>
      <ComA></ComA>
      <ComB></ComB>
      <ChangeTheme/>
      <Login></Login>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <ProductList/>
      <Cart/>
      
    </div>
  )
}

export default App
