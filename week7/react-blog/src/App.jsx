import { useState } from 'react'
import './App.css'
import Blog from './component/blog/Blog'
import Club from './component/club/Club'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home/Home'
import Nav from './component/nav/Nav'
import Footer from './component/footer/Footer'

function App() {
  const [count, setCount] = useState(0) 

  function showPrice() {
    alert("Price: $200 only")
  }

  return (
    <>
    {/* <p>the total of th boys are {5 + 2}.</p>
    <Brand />
    <Club designer="Manchester city" showPrice={showPrice}/>
    <Club /> */}
    <Nav />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/club' element={<Club designer="Manchester city" showPrice={showPrice} />} />
    <Route path='/blog' element={<Blog />} />
   </Routes>
   <Footer />

    </>
    
  )
}

export default App
