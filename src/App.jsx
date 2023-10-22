import { useState } from 'react'
import './App.css'
import Layouts from './layouts/Layouts'
import Routing from './routes/Route'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Layouts>
      <Routing/>
    </Layouts>
    </BrowserRouter>
    </>
  )
}

export default App
