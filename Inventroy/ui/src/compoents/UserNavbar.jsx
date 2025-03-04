import React from 'react'
import box from '../assets/images/Box.svg'
import cart from '../assets/images/ShoppingCart.svg'
import logout from '../assets/images/Share.svg'

function UserNavbar() {
  return (
    <nav>
    <div class="bg-zinc-500 drop-shadow-xl shadow-gray-950  ">
        <h1 class="md:text-3xl text-2xl md:ml-5 ml-3 pt-2 pb-2 font-extrabold text-white">CareWare</h1>
    </div>
    <div className="flex">
        <div className="bg-zinc-400 md:w-[250px]  h-[570px]">
            <Link to="inventoryuser.html" className="flex mt-10">
                <img src={box} className="md:size-9 size-6 pl-2"></img>
                <p className="md:text-xl text-sm md:pl-5 pl-1">Inventory</p></Link>
            <Link to="order.html" className="flex mt-10">
                <img src={cart} className="md:size-9 size-6 pl-2"></img>
                <p className="md:text-xl text-sm md:pl-5 pl-1">Order</p></Link>
            
            <Link to="login.html" className="flex mt-10">
                <img src={logout} className="md:size-9 size-6 pl-2"></img>
                <p className="md:text-xl text-sm md:pl-5 pl-1">LogOut</p></Link>
        </div>
    </div>
    </nav>
  )
}

export default UserNavbar