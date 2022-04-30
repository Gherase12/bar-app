
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillArrowLeftCircleFill , BsCart2} from 'react-icons/bs'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { sanityClient } from '../../sanity'
import { urlFor } from './../../sanity';
import { useDispatch, useSelector } from 'react-redux'
import {addToCart, selectCartItems} from "../../redux/features/cart/cartSlice"


function product({ product }) {
  const dispatch = useDispatch()
  const router = useRouter()
  const cartItems = useSelector(selectCartItems)
  

  

  const [rating, setRating] = useState(product.defaultProductVariant.rating)
  const [hover, setHover] = useState(0)
  let easing = [0.6, -0.05, 0.01, 0.99]

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="relative h-auto overflow-hidden bg-black "
    >
      <div className="absolute top-[20px] right-[20px]">

       <div className="relative">
          {cartItems.length !=0 && (
          <div className="absolute rounded-full bg-darkYellow w-[15px] h-[15px] text-[10px] font-bold text-center text-black left-[25px]" >{cartItems?.length}</div>
          )}
          
        <BsCart2 className=" mt-[5px] text-[30px] text-darkYellow " onClick={()=>router.push("/cart")} />
        </div>
      </div>
      <BsFillArrowLeftCircleFill
        className="absolute top-[20px] left-[20px] text-[40px] text-darkYellow"
        onClick={() => router.back()}
      />
      {/* phone screen */}
      <div className="mt-[80px] lg:hidden">
        <motion.h1
          variants={fadeInUp}
          className="mx-auto text-center text-[27px] text-darkYellow text-shadow-yellow"
        >
          {product.defaultProductVariant.title.toUpperCase()}
        </motion.h1>

        <div className="mt-[37px] flex justify-between px-[44px]">
          <div className=" flex w-[125px] items-center  ">
            index += 1z
            {[...Array(5)].map(
              (star, index) => {
                return (
                  <AiFillStar
                    key={index}
                    className={`${
                      index <= (hover || rating)
                        ? 'text-darkYellow'
                        : 'text-gray-500'
                    }  cursor-pointer border-none text-[20px] outline-none`}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  />
                )
              }
            )}
          </div>

          <div className="text-[30px] text-white text-shadow-yellow">
            {product.defaultProductVariant.price}$
          </div>
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="flex h-[494px] justify-center"
        >
          <motion.img
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            src={urlFor(product.defaultProductVariant.images)}
            alt={product.title}
            className="z-10 object-contain "
          />
         
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="z-30 flex w-auto justify-center  space-x-4 text-[14px] font-bold"
        >
          <div className="h-[27px] w-[66px] text-center text-white">{product.defaultProductVariant.Avol}% ALC. </div>
          {/* {product.quantities.map((q, i) => (
            <button
              key={i}
              className="h-[27px] w-[66px] border-2 text-center text-white hover:bg-darkYellow"
            >
              {q.vol}
            </button>
          ))} */}
        </motion.div>
        <div className="my-[56px] flex justify-center">
          <motion.button
          whileTap={{
            scale: 1.2,
         
          }}
            onClick={()=>dispatch(addToCart(product))}
            variants={fadeInUp}
            className=" h-[41px] w-[160px] bg-darkYellow text-center text-[19px] font-bold shadow-md shadow-darkYellow"
          >
            ADD TO CART
          </motion.button>
        </div>
        <motion.p
          variants={fadeInUp}
          className="40px] mx-auto  mb-[40px] w-[300px] text-center text-white  scrollbar-hide"
        >
          {product.description?.en?.children?.text}
        </motion.p>
      </div>
      {/* desktop screen*/}
      <div className="hidden h-screen lg:flex ">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="flex items-center justify-center flex-1 "
        >
          <motion.img
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            src={urlFor(product.defaultProductVariant.images)}
            alt={product.title}
            className="h-[860px] w-[1000px]  object-contain "
          />
        </motion.div>
        <div className="flex-1  p-[70px]">
          <motion.h1
            variants={fadeInUp}
            className="text-[50px] text-darkYellow text-shadow-yellow"
          >
            {product.defaultProductVariant.title}
          </motion.h1>
          <motion.h1
            variants={fadeInUp}
            className=" mt-[40px] text-[50px] font-bold text-white text-shadow-yellow"
          >
            ${product.defaultProductVariant.price}{' '}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="my-[66px] max-h-[250px] max-w-[686px] overflow-scroll text-[20px] font-bold text-white scrollbar-hide "
          >
            {product.description?.en?.children.text}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex items-center w-auto ">
            {[...Array(5)].map((star, index) => {
              index += 1
              return (
                <AiFillStar
                  key={index}
                  className={`${
                    index <= (hover || rating)
                      ? 'text-darkYellow'
                      : 'text-gray-500'
                  }  cursor-pointer text-[30px] outline-none `}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                />
              )
            })}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className=" my-[50px] flex w-auto justify-start  space-x-4 text-[14px] font-bold"
          >
              <div className="h-[40px] w-[120px] text-center text-white text-[20px]">{product.defaultProductVariant.Avol}% ALC. </div>
           
          </motion.div>
          <motion.button
         whileTap={{
          scale: 1.2,
       
        }}
            onClick={()=>dispatch(addToCart(product))}
            variants={fadeInUp}
            className=" h-[50px] w-[200px] bg-darkYellow text-center text-[19px] font-bold shadow-md shadow-darkYellow"
          >
            ADD TO CART
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default product

export const getServerSideProps = async ({ params }) => {
 
  const query = `*[_type =="product" && slug.current == $id][0]{
    _id,
    title,
    slug{
      current
    },
      defaultProductVariant{
      title,
      price,
      volume,
      Avol,
      images[0]{
        asset,
      },
    },
    "category":categories[]->title,
    "description":body{
      en[0]{
        children[0]{
          text
        }
      }
}
  }`

  const product = await sanityClient.fetch(query, { id: params?.id })

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product,
    },
  }
}
