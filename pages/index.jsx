import { useRef, useEffect } from 'react'
import Head from 'next/head'

import { motion } from 'framer-motion'

import { sanityClient } from '../sanity'
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'
import Header from '../components/Header'
import Category from '../components/Category'

const Home = ({ products }) => {
  const drinksRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

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
          DrinkBar is the online store that offers its customers a foray into
          the world of varied flavors and unique experiences, thanks to an
          extensive range of spirits, gin and champagne high quality. DrinkStore
          is the online store of Alexandrion Group, a leader in the production
          and distribution of wines and alcoholic beverages in Europe and since
          2017 the only producer of single malt from the country. The DrinkStore
          offer includes all categories of spirits and the most popular brands
          in the world, such as Jack Daniel's, Johnnie Walker, Glenfiddich,
          Absolut, Amuerte, Bottegea, Don Perignon and many more. Also through
          DrinkStore, wine lovers can select their favorite champagne for any
          occasion, thanks to the wide range of still and sparkling wines,
          white, red and pink, suitable for all tastes, produced at The Iconic
          Estate (Hyperion, Rhea, Thea, Kronos, Neptunus, White Stone Hill,
          Byzantium, Prahova Valley, La Crama, Rhein Extra, Millennium etc), as
          well as imported from famous international wineries, such as Concha Y
          Toro, Bodegas Vega Sicilia, Trapiche, Villa Maria, Gancia, Bottega
          etc. DrinkStore also welcomes those who looking for a special gift to
          give to your loved ones, consistently in a variety of accessories for
          serving alcoholic beverages, as well as sets that include a variety of
          alcoholic beverages.
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
