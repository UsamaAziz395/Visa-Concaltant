
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Pricing from './Pages/Pricing'

import Servicedetail from './Pages/Servicedetail'
import Team from './Pages/Team'
import Gallerydetail from './Pages/Gallerydetail'

import Layout from './Components/Layout/Layout'
import ApplyVisa from './Components/ApplyVisa/ApplyVisa'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/services' element={<Services />} />
        <Route path='/servicedetail' element={<Servicedetail />} />
        <Route path='/team' element={<Team />} />
        <Route path='/gallerydetail' element={<Gallerydetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/applyvisa' element={<ApplyVisa />} />
      </Route>
    </Routes>
  )
}

export default App
