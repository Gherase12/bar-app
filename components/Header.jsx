import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import { MdClose } from 'react-icons/md'
import { BsCart2 } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../redux/features/cart/cartSlice'

const Header = ({ drinksRef, aboutRef, contactRef }) => {
  const cartItems = useSelector(selectCartItems)

  const [open, setOpen] = useState(false)

  const scrollToElement = (Ref) => {
    setOpen(false)
    Ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  const router = useRouter()
  return (
    <div className="relative  z-20  flex h-[47px] w-full items-center justify-center bg-black/80 text-darkYellow shadow-lg shadow-darkYellow md:h-[125px] md:justify-between md:px-[40px] md:text-[29px]">
      <h1 className="md:text-[40px]">Drink bar</h1>
      <div className="hidden space-x-4 md:flex 2xl:ml-[800px]">
        <button onClick={() => scrollToElement(drinksRef)}>Drinks</button>
        <button onClick={() => scrollToElement(aboutRef)}>About Us</button>
        <button onClick={() => scrollToElement(contactRef)}>Find Us</button>
        <div className="relative">
          {cartItems.length != 0 && (
            <div className="absolute left-[25px] h-[15px] w-[15px] rounded-full bg-darkYellow text-center text-[10px] font-bold text-black">
              {cartItems?.length}
            </div>
          )}
          <BsCart2
            className=" mt-[5px] text-[30px] text-darkYellow "
            onClick={() => router.push('/cart')}
          />
        </div>
      </div>
      <GiHamburgerMenu
        className="absolute left-[20px] text-[20px] md:hidden "
        onClick={() => setOpen(true)}
      />
      <BsCart2
        className="absolute right-[20px] text-[20px] md:hidden  "
        onClick={() => router.push('/cart')}
      />
      <div>
        
      {open && (
        <div className=" fixed  top-0 left-0 z-[100] flex h-screen w-screen flex-col items-center space-y-4 bg-black pt-[100px] text-[20px]">
          <MdClose
            className="absolute right-[10px] top-[10px]"
            onClick={() => setOpen(false)}
          />
          <button onClick={() => scrollToElement(drinksRef)}>Drinks</button>
          <button onClick={() => scrollToElement(aboutRef)}>About Us</button>
          <button onClick={() => scrollToElement(contactRef)}>Find Us</button>
        </div>
      )}
      </div>
    </div>
  )
}

export default Header
