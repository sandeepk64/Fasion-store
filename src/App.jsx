import './App.css'
import { Navigate, Route,Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Wishlist from './assets/pages/Wishlist'
import Cart from './assets/pages/Cart'
import Footer from './assets/components/Footer'
import View from './assets/pages/View'


function App() {

  return (
    <>
      <Routes>
        {/* {http://localhost:5173/} */}
        <Route path='/' element={<Home/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        {/* {http://localhost:5173/10/view} */}
        <Route path='/:id/view' element={<View/>}/>
        {/* {page not found} */}
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
