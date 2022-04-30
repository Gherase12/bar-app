import React from 'react'
import Item from './Item'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { motion } from 'framer-motion'

const Category = ({title , products , color }) => {

  
  

  
 

  return (
    <div className="mt-[10px] h-[364px]  w-full text-white  lg:h-[653px]">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        className={`text-center text-[39px]  text-shadow-yellow md:text-[60px] `}
        // style={{textColor: "lightblue"}}
      >
        {title.toUpperCase()}
      </motion.h1>
      {/* <div className='flex mt-[70px] overflow-x-scroll overflow-y-hidden h-auto'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        </div> */}
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        >
        <Swiper
        spaceBetween={4}
        slidesPerView={3}
        breakpoints={{
          // when window width is >= 640px
          //md
          100: {
            //   width: 640,
            spaceBetween: 4,
            slidesPerView: 3,
          },
          667: {
            //   width: 640,
            spaceBetween: 20,
            slidesPerView: 5,
          },
          // when window width is >= 768px
          1024: {
            //   width: 768,
            spaceBetween: 30,

            slidesPerView: 3,
          },
          1280: {
            //   width: 768,
            spaceBetween: 10,

            slidesPerView: 4,
          },
        }}
        
        className="mt-[70px]  w-[355px] md:w-[600px] lg:w-[1100px] xl:w-[1500px]"
      >
        {products.map((p ,i)=>(
        <SwiperSlide key={i}>
          <Item key={i} title={p.title} price={p.defaultProductVariant.price} img={p.defaultProductVariant.images} color={color}  slug={p?.slug?.current} />
        </SwiperSlide>
        ))}
   
      </Swiper>
        </motion.div>
      
    </div>
  )
}




export default Category
