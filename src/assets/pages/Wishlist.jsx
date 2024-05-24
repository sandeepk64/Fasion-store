import React from 'react'
import Header from '../components/Header'
import { Col, Row, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const Wishlist = () => {
  const dispatch = useDispatch()
  const ourWishlist = useSelector(state=>state.wishlistReducer)
  const ourCart = useSelector(state=>state.wishlistReducer)

  const handleCart = (product)=>{
    const existingProduct = ourCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      alert("Product quantity is incrementing!!!")
    }else{
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
    }
  }
  return (
    <>
      <Header/>
        <div style={{marginTop:'150px'}} className="container-fluid">
          {
            ourWishlist?.length>0?
            <div>
          <h3 className='text-danger'>Your Wishlist</h3>
        <Row className='my-5'>
          {
            ourWishlist?.map(product=>(
          <Col key={product?.id} sm={12} lg={6} md={4} xl={3}>
          <Card className='shadow rounded' style={{ width: '18rem' }}>
             <Card.Img style={{height:'230px'}} variant="top" src={product?.thumbnail} />
              <Card.Body>
            <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
            <div className="d-flex justify-content-around mt-3">
            <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn'><i className="fa-solid fa-heart-circle-xmark text-danger"></i></button>
            <button onClick={()=>handleCart(product)} className='btn'><i className="fa-solid fa-cart-plus text-success"></i></button>
            </div>
        </Card.Body>
      </Card>
          </Col>
            ))
         }
        </Row>
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

export default Wishlist