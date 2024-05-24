import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Col, Row, Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/ProductSlice'

const Home = () => {
  const dispatch = useDispatch()
  const {allProducts,error,loading} = useSelector(state=>state.productReducer)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <>
    <Header insideHome={true}/>
    <div style={{marginTop:'150px'}} className="container-fluid">
      {
        loading ?
        <div className="text-center mt-5 fw-bolder">
          <Spinner className='me-2' animation="bolder" variant="info"/> Loading ...
        </div>
        :
      <Row className='my-5'>
        {
          allProducts?.length>0 ?
          allProducts?.map(product=>(
          <Col key={product?.id} className='mb-5' sm={12} lg={6} md={4} xl={3}>
           <Card className='shadow rounded'>
            <Card.Img style={{height:'180px'}} variant="top" src={product?.thumbnail} />
             <Card.Body>
              <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
               <div className='text-center mt-3'>
                <Link to={`/${product?.id}/view`}>
                  View More...
                  </Link>
                </div>
               </Card.Body>
             </Card>
           </Col>
          ))
        :
        <div className="fw-bolder text-center mt-5 mb-5 text-danger">
          Product not Found ...
        </div>
      }
      </Row>
      }
    </div>
    
    </>
  )
}

export default Home