import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'

const Cart = () => {
  const ourCart = useSelector(state=>state.cartReducer)
  return (
    <>
      <Header/>
      <div className='container' style={{marginTop:'150px'}}>
        {
          ourCart?.length>0 ?
          <div className="cart">
          <h1>Cart Summary</h1>
          <div className="row mt-4">
            <div className="col-lg-8">
              <table className="table shadow">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    ourCart?.map((product,index)=>(
                    <tr key={product?.id}>
                    <td>{index+1}</td>
                    <td>{product?.title.slice(0,20)}...</td>
                    <td><img width={'50px'} src={product?.thumbnail} alt="" /></td>
                    <td>
                      <div className="d-flex">
                        <button className='btn fw-bolder'>-</button>
                        <input value={product?.quantity} style={{width:'50px'}} className='fw-bolder me-1 ms-1' type="text" readOnly />
                        <button className='btn fw-bolder'>+</button>
                      </div>
                    </td>
                    <td>$ {product?.totalPrice}</td>
                    <td>
                      <button className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
                    </td>
                  </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        :
        <div style={{height:'60vh'}} className="d-flex justify-content-center align-items-center flex-column">
        <img height={'400px'} src="https://assets.materialup.com/uploads/38936b35-9823-47e1-98cc-fb8b5c1d962e/preview.jpg" alt="" />
        <h3>Your Wishlist is Empty!!!</h3>
      </div>
        }
      </div>
    </>
  )
}

export default Cart