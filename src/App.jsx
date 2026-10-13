import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Page from './Pages/Page'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Layout from './Components/Layout/Layout'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
   <Routes>
    <Route element={<Layout />}>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/page' element={<Page />}></Route>
    <Route path='/services' element={<Services />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    </Route>
   </Routes>
   
   
   
   
   
   
   
   
   </>
  )
}

export default App
