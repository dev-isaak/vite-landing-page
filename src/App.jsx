import React from 'react'
import Mainpage from './pages/Mainpage'
import Whatwedo from './pages/Whatwedo'
import Cases from './pages/Cases'
import About from './pages/About'
import Blog from './pages/Blog'
import {
    Route, Routes
} from 'react-router-dom'
import Proposal from './pages/Proposal'



const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Mainpage/>}/>
            <Route path='/what-we-do' element={<Whatwedo/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/cases' element={<Cases/>}/>
            <Route path='/proposal' element={<Proposal />}/>
        </Routes>
    </div>
  )
}

export default App