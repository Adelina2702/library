import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'

export default function MyRoutes() {
  return (
   <>
       <BrowserRouter>
       <Routes>
           <Route path='/' element={<RegisterPage/>}/>
       </Routes>
       </BrowserRouter>
   </>
  )
}
