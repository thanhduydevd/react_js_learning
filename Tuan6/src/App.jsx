import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Dashboard from './layouts/Dashboard'
import Order from './pages/Order'
import Profile from './pages/Profile'
import Setting from './pages/Setting'
import Checkout from './pages/Checkout'
import Login from './pages/Login'

function App() {

  return (
    <>
      <nav style={{display:'flex',gap:'5px', alignItems:'center',justifyContent:'center', width:'100%', height:'50px', backgroundColor:'green', color:'white'}}>
        <Link to='/'>Home</Link> 
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        <Link to='/dashboard/order'>Order</Link>
        <Link to='/dashboard/profile'>Profile</Link>
        <Link to='/dashboard/setting'>Setting</Link>
        <Link to='/dashboard/login'>Login</Link>
      </nav>
      <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/contact' element={ <Contact/>}/>
          <Route path='/product' element={ <Product/>}/>
          <Route path='/product/:id' element={ <ProductDetail/>}/>
          <Route path='*' element={ <NotFound/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='order' element={<Order/>} />
            <Route path='profile' element={<Profile/>} />
            <Route path='setting' element={<Setting/>} />
            <Route path='checkout/:id' element={<Checkout/>} />
            <Route path='login' element={<Login/>} />
          </Route>
      </Routes>
    </>
  )
}

export default App
