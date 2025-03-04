import React from 'react'
import User from '../assets/images/User.svg'
import cart from '../assets/images/ShoppingCart.svg'

function Unavbar() {
  return (
    <nav>
        <div className="bg-zinc-500 ">
        <h1 className="text-3xl ml-5 pt-2 pb-2 font-extrabold text-white">CareWare</h1>
        </div>
        <div className="bg-zinc-500 mt-2 h-14 flex md:justify-between  space-x-2">
            <div className="flex justify-between border-black border-2 rounded-full overflow-hidden md:h-9 h-6 mt-3 md:mx-28">
                <input type="text" placeholder="search" className="md:w-[450px] w-[150px] pl-5"></input>
                <button className="bg-white border md:w-20">
                    <img src="img/Search.svg" class=" md:ml-5 md:w-6 w-4"></img>
                </button>
            </div>
            <div className="flex pt-2 md:space-x-6 space-x-1 pr-10"> 
                <a href="userpage.html"><img src={User}className="md:size-9 size-6"></img></a>
                <a href="order.html"><img src={cart} className="md:size-9 size-6"></img></a>
            </div>
        </div>
    
    </nav>
  )
}

export default Unavbar