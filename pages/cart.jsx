import React from 'react'
import CartItem from './../components/CartItem'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../redux/features/cart/cartSlice'
import { urlFor } from './../sanity'

function cart() {
  const router = useRouter()
  const cartItems = useSelector(selectCartItems)
  const total = cartItems.reduce(
    (acc, el) => acc + el.defaultProductVariant.price * el.count,
    0
  )
  console.log(cartItems)
  return (
    <div className="relative h-screen overflow-hidden bg-black ">
      <BsFillArrowLeftCircleFill
        className="absolute top-[20px] left-[20px] text-[40px] text-darkYellow"
        onClick={() => router.push('/')}
      />
      <h1 className="my-[65px] text-center text-[29px] text-darkYellow text-shadow-yellow lg:text-[40px] ">
        MY CART
      </h1>
      <div className="lg:flex lg:justify-center lg:space-x-[40px]">
        <div className="flex h-[485px] flex-col items-center space-y-[20px] overflow-scroll scrollbar-hide  lg:h-[380px] ">
          {cartItems?.length == 0 ? (
            <div className="text-white lg:text-[20px]">The cart is empty</div>
          ) : (
            cartItems?.map((p, i) => (
              <CartItem
                key={i}
                name={p.title}
                price={p.defaultProductVariant.price}
                img={urlFor(p.defaultProductVariant.images)}
                count={p.count}
                product={p}
              />
            ))
          )}
        </div>

        {cartItems?.length != 0 && (
          <>
            <div className="mx-auto mt-[10px] flex h-[100px] w-[285px] border-t-2 border-darkYellow pt-[20px] text-[12px] text-darkYellow lg:hidden">
              <div>
                <div className="w-[111px] border-b-2 border-darkYellow">
                  <h1>SUBTOTAL: {total || 0}$</h1>
                  <h1>SHIPPING: 10$</h1>
                </div>
                <h1>TOTAL: 108$</h1>
              </div>
              <div className="flex items-center justify-center flex-1 ">
                <button className="h-[25px] w-[122px] bg-darkYellow/60 font-bold text-black shadow-md shadow-darkYellow  ">
                  CHECKOUT
                </button>
              </div>
            </div>

            <div className="hidden h-[302px] w-[352px]   flex-col border-2 border-darkYellow lg:flex ">
              <div className=" flex w-[300px] flex-1 flex-col justify-center space-y-[10px] pl-[20px] text-[30px]  text-darkYellow">
                <div className="border-b-2 border-gray-500">
                  <h1 className="w-[350px] ">SUBTOTAL: {total || 0}$</h1>
                  <h1 className="w-[350px] ">SHOPPING: 10$</h1>
                </div>
                <h1>TOTAL: {total + 10 || 0}$</h1>
              </div>
              <button className="h-[45px] bg-darkYellow text-center text-[30px] font-bold">
                CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default cart
