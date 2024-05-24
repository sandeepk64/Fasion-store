import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px'}} className='p-5 text-light mt-5 w-100 bg-info'>
    <div className="d-flex justify-content-between">

      <div style={{width:'400px'}} className="intro">
        <h4><i class="fa-solid fa-truck-fast me-2"></i>FF Store</h4>
        <p>Designed and built with all love in the world by the luminar team with the help of our contributors </p>
        <p>Code licensed Luminar, docs cc by 3.0.</p>
        <p>Currently v1.0.0</p>
      </div>

      <div className="links d-flex flex-column">
        <h4>Links</h4>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
        <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
        <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
      </div>

      <div className="guides d-flex flex-column">
        <h4>Guides</h4>
        <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
        <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
        <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}} target='_blank'>Routing</a>
      </div>

      <div className="contact">
        <h4>Contact Us</h4>
        <div className="d-flex">
          <input type="text" className='form-control' placeholder='Enter your email here'/>
          <button className='btn btn-warning ms-3'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="icons d-flex justify-content-between mt-3 ">
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
            <i className='fa-brands fa-twitter'></i>
          </a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
            <i className='fa-brands fa-instagram'></i>
          </a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
            <i className='fa-brands fa-facebook'></i>
          </a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
            <i className='fa-brands fa-github'></i>
          </a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
            <i className='fa-solid fa-phone'></i>
          </a>
        </div>
      </div>

    </div>
    <p className='text-center mt-5'>Copyright © 2024 FFstore Luminar Jan24 Batch. Build with React.</p>
  </div>
  )
}

export default Footer