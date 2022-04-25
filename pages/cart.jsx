import React from 'react'
import CartItem from './../components/CartItem'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

function cart() {

  const router = useRouter();
  return (
    <div className="relative h-screen overflow-hidden bg-black ">
      <BsFillArrowLeftCircleFill className="absolute top-[20px] left-[20px] text-[40px] text-darkYellow" onClick={()=>router.push("/")} />
      <h1 className="lg:text-[40px] my-[65px] text-center text-[29px] text-darkYellow text-shadow-yellow ">
        MY CART
      </h1>
      <div className="lg:flex lg:justify-center lg:space-x-[40px]">
      <div className="flex h-[485px] lg:h-[380px] flex-col items-center space-y-[20px] overflow-scroll  scrollbar-hide ">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      {/* mobile checkout section */}
      <div className="lg:hidden mx-auto h-[100px] pt-[20px] w-[285px] border-t-2 border-darkYellow text-[15px] text-darkYellow flex mt-[10px]">
        <div>
          <div className="w-[111px] border-b-2 border-darkYellow">
            <h1>SUBTOTAL: 98$</h1>
            <h1>SHIPPING: 10$</h1>
          </div>
          <h1>TOTAL: 108$</h1>
        </div>
        <div className="flex items-center justify-center flex-1 ">
          <button className="w-[122px] h-[25px] bg-darkYellow/60 font-bold text-black shadow-md shadow-darkYellow  ">
            CHECKOUT
          </button>
        </div>
      </div>
      {/* desktop checkout section */}
        <div className="hidden lg:flex flex-col   w-[382px] h-[432px] border-2 border-darkYellow " >
          <div className=" pl-[20px] space-y-[10px] w-[300px] text-[40px] flex flex-col justify-center flex-1  text-darkYellow">
           
            <div className="border-b-2 border-gray-500">
            <h1>SUBTOTAL: 72$</h1>
            <h1>SHOPPING: 10$</h1>
            </div>
            <h1>TOTAL: 82$</h1>
          </div>
          <button className="h-[45px] bg-darkYellow text-center font-bold text-[30px]">CHECKOUT</button>
          
        </div>
      </div>
     
    </div>
  )
}

export default cart
