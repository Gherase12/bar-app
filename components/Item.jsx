import React from 'react'
import { useRouter } from 'next/router';
import { urlFor } from './../sanity';


const Item = ({title ,price ,  img , color , slug }) => {
  const borderColor = `border-[${color}]`
  const router = useRouter()
  return (
    <div className={ `shrink-0 flex-none h-[143px] w-[105px] border-2 ${borderColor}  lg:w-[313px] lg:h-[427px]`}  onClick={()=> router.push(`/product/${slug}`)} >
        <div className="border-b-2 text-[10px] flex items-center justify-center text-darkYellow border-darkYellow h-[24px] lg:text-[24px] lg:h-[62px]">{title}</div>
        <p className='text-[8px] flex justify-end pt-[15px] pr-[15px] lg:text-[27px]'>{price}$</p>
        <img src={urlFor(img)} alt={title} className='object-contain w-[90px] h-[100px]  mx-auto lg:w-[300px] lg:h-[300px]' />
    </div>
  )
}

export default Item
