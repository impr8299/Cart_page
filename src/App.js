import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login';
import Navbar from './Sidebar/Navbar';
import Cart from './component/Productpage/Cart';
import Protected from './component/Protected';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/products' element={<Protected Component={Cart} />} />
          <Route path="*" element={<h1>Error 404 Page Not Found!!</h1>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;