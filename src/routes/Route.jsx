import React, { Children } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import Dashboard from '../pages/Dashboard/Dashboard'
import CreateRecipe from '../pages/Admin/CreateRecipe/CreateRecipe'
import ReadRecipe from '../pages/Admin/ReadRecipe/ReadRecipe'
import UpdateRecipe from '../pages/Admin/UpdateRecipe/UpdateRecipe'
import DetailRecipe from '../pages/Admin/DetailRecipe/DetailRecipe'
import DeleteRecipe from '../pages/Admin/DeleteRecipe/DeleteRecipe'
import Login from '../pages/Login/Login'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Kontribusi from '../pages/Kontribusi/Kontribusi'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/kontribusi" element={<Kontribusi/>}/>
      <Route path="/readRecipe/:id" element={<DetailRecipe/>}/>
      <Route path="/createRecipe" element={<CreateRecipe/>}/>
      <Route path="/readRecipe" element={<ReadRecipe/>}/>
      <Route path="/updateRecipe" element={<UpdateRecipe/>}/>
      <Route path="/deleteRecipe" element={<DeleteRecipe/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}

export default Routing