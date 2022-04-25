import React from 'react'

function CartItem() {
    const product = {
        name: "JACK DANIEL'S",
    
        img: '/don-perignon.png',
        description:
          ' Born a clear whiskey the iconic spirit owes its rich colour to the charred oak barrels it matures in. The nose is very smooth with woody and a hint of a fruity undertone before the flavour launches into a mingling of caramel, vanilla and of course the signature notes of oak and fruit.Born a clear whiskey the iconic spirit owes its rich colour to the charred oak barrels it matures in. The nose is very smooth with woody and a hint of a fruity undertone before the flavour launches into a mingling of caramel, vanilla and of course the signature notes of oak and fruit.Born a clear whiskey the iconic spirit owes its rich colour to the charred oak barrels it matures in. The nose is very smooth with woody and a hint of a fruity undertone before the flavour launches into a mingling of caramel, vanilla and of course the signature notes of oak and fruit.',
        rating: 5,
        quantities: [
          { vol: '500 ml', price: 16.25 },
          { vol: '1L', price: 32.5 },
          { vol: '1.5L', price: 42.5 },
        ],
      }
  return (
    <div className=" w-[285px] h-[80px]  flex space-x-[35px] lg:w-[600px] lg:text-darkYellow lg:items-center lg:justify-around lg:text-[25px]">
      
        <div className="p-[6px] w-[62px] h-[79px] lg:w-[92px] lg:h-[109px] border-darkYellow border-2 rounded-lg flex items-center justify-center lg:border-none">

            <img src={product.img} alt={product.name} className="object-contain" />

        </div>
        {/* mobile title + price */}
        <div className="flex flex-col justify-between py-[10px] lg:hidden " >
            <h1 className="text-darkYellow text-[14px]">{product.name}</h1>
            <h1 className="text-white text-[17px]">${product.quantities[1].price}</h1>
        </div>
        {/* Desktop title + price  */}
        <h1 className='hidden lg:flex'>{product.name}</h1>
        <h1 className='hidden lg:flex'>{product.quantities[1].price}$</h1>
        <div className="flex items-center text-white space-x-[10px]">
          <button>-</button>
          <div>1</div>
          <button>+</button>
        </div>
        <div className="hidden lg:flex"> 20$</div>
    </div>
  )
}

export default CartItem