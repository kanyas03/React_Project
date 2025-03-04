import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className="bg-zinc-500 ">
        <h1 className="text-3xl ml-5 pt-2 pb-2 font-extrabold text-white">CareWare</h1></div>
        <div className="bg-zinc-500 mt-2 h-10 flex md:space-x-32 space-x-2 md:w-full drop-shadow-xl shadow-gray-950 ">
            <Link to={'/home'}className="md:text-xl text-sm md:pl-10 text-white pt-2 pb-2 hover:text-black">Dashboard</Link>
            <Link to={'/inventory'} className="md:text-xl text-sm pt-2 pb-2 text-white hover:text-black">Inventory</Link>
            <Link to={'/staff'} className="md:text-xl text-sm pt-2 pb-2 text-white hover:text-black">Staffs</Link>
            <Link to={'/addstock'} className="md:text-xl text-sm pt-2 pb-2 text-white hover:text-black">Add stock</Link>
            <Link to={'/Orders'} className="md:text-xl text-sm pt-2 pb-2 text-white hover:text-black">Orders</Link>
            <Link to={'/logout'} className="md:text-xl text-sm  pt-2 pb-2 text-white hover:text-black">LogOut</Link>
        </div>

    </nav>
  )
}

export default Navbar