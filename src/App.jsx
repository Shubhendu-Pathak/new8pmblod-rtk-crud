import React from 'react'
import NavTop from './components/NavTop'
import { Route, Routes } from 'react-router-dom'
import AllData from './components/AllData'
import Create from './components/Create'

import Update from './components/Update'


function App() {
  return (
    <div>
     <NavTop/>
     <Routes>
      <Route path='/' element={<AllData/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/user/:id' element={<Update/>}/>

     </Routes>
    </div>
  )
}

export default App