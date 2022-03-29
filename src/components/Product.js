import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions'

function Product({item}) {

  const dispatch = useDispatch()

  const add = () => {
    
    dispatch(addToCart(item))
  }

  return (
    <div className='item'>
        <h4 className='name'>{item.name}</h4>
        <img src={item.image} alt="" className='img-fluid'/>
        <h4 className='price'><b>Price : </b>{item.price} $/-</h4>
        <div className="d-flex justify-content-end">
            <Button onClick={() => add()}>Add To Cart</Button>
        </div>
    </div>
  )
}

export default Product