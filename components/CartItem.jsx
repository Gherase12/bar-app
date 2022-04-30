import React from 'react'
import { addToCart, removeFromCart } from '../redux/features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion';

function CartItem({ name, img, price, count, product }) {
  const dispatch = useDispatch()
  
  return (
    <div
    className=" flex h-[80px] w-[285px]  justify-around space-x-[35px] lg:w-[600px] lg:items-center lg:justify-around lg:border-b-2 lg:text-[25px] lg:text-darkYellow">
      <div className="flex h-[79px] w-[62px] items-center justify-center rounded-lg border-2 border-darkYellow p-[6px] lg:h-[109px] lg:w-[92px] lg:border-none">
        <img src={img} alt={name} className="object-contain" />
      </div>
      {/* mobile title + price */}
      <div className="flex w-[120px] flex-col justify-between py-[10px]  lg:hidden">
        <h1 className="text-[14px] text-darkYellow">{name}</h1>
        <h1 className="text-[17px] text-white">${price}</h1>
      </div>
      {/* Desktop title + price  */}
      <div className=" lg:w-[150px] lg:text-[15px]">
        <h1 className="hidden lg:flex">{name}</h1>
        <h1 className="hidden lg:flex">{price}$</h1>
      </div>
      <div className="flex items-center space-x-[10px] text-white">
        <button onClick={() => dispatch(removeFromCart(product))}>-</button>
        <div>{count}</div>
        <button onClick={() => dispatch(addToCart(product))}>+</button>
      </div>
      <div className="hidden lg:flex"> {(price * count).toFixed(1)}$</div>
    </div>
  )
}

export default CartItem
