import { useRef, useEffect } from 'react'
import Head from 'next/head'

import { motion } from 'framer-motion'

import { sanityClient} from '../sanity'
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,

} from 'react-icons/bs'
import Header from '../components/Header'
import Category from '../components/Category'


const Home = ({ products }) => {
  const drinksRef = useRef < HTMLDivElement > null
  const aboutRef = useRef < HTMLDivElement > null
  const contactRef = useRef < HTMLDivElement > null
  const arrowRef = useRef < HTMLDivElement > null

  const Categories = [
    { name: 'Wisky', color: '#8E8E20' },
    { name: 'Vodka', color: '#F60404' },
    { name: 'Gin', color: '#58A9E6' },
    { name: 'Champagne', color: '#F635F0' },
  ]

  const getProducts = (name) => products.filter((p) => p.category[0] == name)

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="relative h-auto overflow-hidden bg-black"
    >
      <Head>
        <title>home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute w-full ">
        <Header
          drinksRef={drinksRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
      </div>

      <div className="relative ">
        <img
          src="/bar.jpg"
          alt="bar"
          className=" object-cover object-bottom lg:w-full xl:h-[1000px] "
        />
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          className="absolute bottom-[60px] left-0  flex h-[40%] w-[40%] items-center justify-center bg-black/70 md:bottom-[150px] xl:bottom-[360px]"
        >
          <p className="text-center text-[22px] text-darkYellow text-shadow-yellow lg:text-[40px] 2xl:text-[90px] ">
            EXPLORE. DREAM. DESCOVER. TASTE.
          </p>
        </motion.div>
        {/* bottels */}

        <motion.img
          whileInView={{ rotate: 115, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
          initial={{ rotate: 90, opacity: 0 }}
          src="/jd.png"
          alt="jack-daniels"
          className="absolute -left-[45px] top-[180px] z-10  w-[70%] rotate-90 md:top-[280px] lg:top-[380px] xl:-left-[195px] xl:top-[480px] 2xl:top-[380px]"
        />
        <motion.img
          animate={{ rotate: -115, opacity: 1 }}
          transition={{ duration: 3 }}
          initial={{ rotate: -90, opacity: 0 }}
          src="/jb.png"
          alt="jb"
          className="absolute   -right-[45px]  top-[180px] w-[70%] -rotate-90 md:top-[280px] lg:top-[380px] xl:top-[480px] 2xl:top-[230px]"
        />
      </div>

      <div ref={drinksRef}>
        <h1 className=" z-50 my-[60px] mt-[100px]  text-center text-[19px] text-darkYellow text-shadow-yellow  md:mt-[200px] md:text-[90px]">
          Choose from a variety of drinks
        </h1>
        <div>
          {Categories.map((c, i) => (
            <Category
              key={i}
              title={c.name}
              color={c.color}
              products={getProducts(c.name)}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        ref={aboutRef}
      >
        <h1 className="text-center text-[43px] text-darkYellow text-shadow-yellow lg:mt-[100px] lg:text-[108px]">
          ABOUT US
        </h1>
        <p className="  my-[30px]  mx-auto h-[367px] w-[256px] overflow-scroll text-center text-darkYellow scrollbar-hide lg:h-[614px] lg:w-[930px] lg:text-[30px]">
          Welcome to BAR STATION, your number one source for alcoholic
          beverages. Founded in 2014 , Bar station has come a long way from its
          beginnings in a [starting location, ie: home office, toolshed,
          Houston, TX.]. When [store founder] first started out, his/her passion
          for [passion of founder, ie: helping other parents be more
          eco-friendly, providing the best equipment for his fellow musicians]
          drove him to [action, ie: do intense research, quit her day job], and
          gave him the impetus to turn hard work and inspiration into to a
          booming online store. We now serve customers all over [place, ie: the
          US, the world, the Austin area], and are thrilled to be a part of the
          [adjective, ie: quirky, eco- friendly, fair trade] wing of the
          [industry type, ie: fashion, baked goods, watches] industry.
        </p>
      </motion.div>

      <div ref={contactRef}>
        <h1 className="text-center text-[43px] text-darkYellow text-shadow-yellow lg:mt-[100px] lg:text-[108px]">
          FIND US
        </h1>
        <div className="my-[50px] flex justify-center space-x-4 lg:text-[108px]">
          <BsInstagram className="text-[40px] text-darkYellow text-shadow-yellow" />
          <BsTwitter className="text-[40px] text-darkYellow text-shadow-yellow" />
          <BsFacebook className="text-[40px] text-darkYellow text-shadow-yellow" />
        </div>
      </div>
    </motion.div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type =="product" ]{
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
    "category":categories[]->title
}`

  const products = await sanityClient.fetch(query)

  return {
    props: {
      products,
    },
  }
}

export default Home
