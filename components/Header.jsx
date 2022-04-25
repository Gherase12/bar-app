import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
// import { IoCloseOutline } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import { BsCart2 } from 'react-icons/bs'
import { useRouter } from 'next/router';

const Header = ({ drinksRef , aboutRef , contactRef}) => {
  const [open, setOpen] = useState(false)
  const scrollToElement =(Ref)=>{
    setOpen(false)
    Ref.current.scrollIntoView({behavior: "smooth"})
  }
  const router = useRouter();
  return (
    <div className="relative z-20  flex h-[47px] w-full items-center justify-center bg-black/80 text-darkYellow shadow-lg shadow-darkYellow md:h-[125px] md:justify-between md:px-[40px] md:text-[29px]">
      <h1 className="md:text-[40px]">Drink bar</h1>
      <div className="hidden space-x-4  md:flex xl:mr-[200px]">
        
        <button onClick={()=>scrollToElement(drinksRef)} >Drinks</button>
        <button onClick={()=>scrollToElement(aboutRef)} >About Us</button>
        <button onClick={()=>scrollToElement(contactRef)} >Find Us</button>
        <BsCart2 className=" mt-[5px] text-[30px] text-darkYellow " onClick={()=>router.push("/cart")} />
      </div>
      <GiHamburgerMenu className="absolute left-[20px] text-[20px] md:hidden " onClick={()=> setOpen(true)} />
      <BsCart2 className="absolute right-[20px] text-[20px] md:hidden  "  onClick={()=>router.push("/cart")} />
      {open && (
        <div className=" z-[100]  fixed top-0 left-0 flex h-screen w-screen flex-col items-center space-y-4 bg-black pt-[100px] text-[20px]">
          <MdClose className="absolute right-[10px] top-[10px]" onClick={()=> setOpen(false)} />
          <button onClick={()=>scrollToElement(drinksRef)} >Drinks</button>
          <button  onClick={()=>scrollToElement(aboutRef)}>About Us</button>
          <button  onClick={()=>scrollToElement(contactRef)}>Find Us</button>
          
        </div>
      )}
    </div>
  )
}

export default Header
