/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Order from './Pages/Order'
import FilterData from './Pages/FilterData'
import Forget from './components/Forget'
import ContactPage from './Pages/ContactPage'
import AboutUs from './Pages/Aboutus'

function App() {

  const [order,setorder] =useState(null) 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Shop' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout  setorder={setorder}/>}></Route>
        <Route path='/order-conformation' element={< Order  order ={order}/>}></Route>
        <Route path='/filter-data' element={<FilterData/>}></Route>
        <Route path='/forget' element={<Forget/>}></Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />



        
      </Routes>
      <Footer/>
      </BrowserRouter>
        
    </>
  )
}

export default App
