import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FourOFour from './Pages/404/404'
import Home from './Pages/Home/Home'

const Router = () => {
  
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/home' element={<Home />} />
      <Route path='*' element={<FourOFour />} />
    </Routes>
  )
}

export default Router