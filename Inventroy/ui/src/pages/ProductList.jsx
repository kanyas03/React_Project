import React from 'react'
import Navbar from '../compoents/Navbar'
function ProductList() {
  return (
    <>
    <Navbar/>
    <div className="bg-zinc-300">
            <h1 className="font-extrabold mt-5 md:ml-[500px] text-xl">MEDICAL PRODUCTS</h1><br></br>

            <div className="mx-32">
                <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10">
                    <a href="inventory.html">All</a></button>
                <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10">
                    <a href="d_inventory.html">Disposible Product</a></button>
                <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10">
                    <a href="non_d.html">Non-diposible Product</a></button>
            </div><br></br>
            <table className=" border-collapse border border-black md:w-[1250px] w-[150px] md:ml-5 md:mr-5">
                <thead>
                <tr className=" border-black border-2 bg-zinc-400 h-10">
                    <th className="md:pl-2 border border-black md:text-lg text-xs">SINo</th>
                    <th className="md:pr-3 border border-black md:text-lg text-xs">Product Id</th>
                    <th className="md:pr-5 border border-black md:text-lg text-xs">Product Name</th>
                
                    <th className="md:pl-2 border border-black md:text-lg text-xs">Stocks</th>
                
                    <th className="md:pl-2 border border-black md:text-lg text-xs">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr className=" border-black border-2 h-10">
                    <td className="md:pl-8 border border-black md:text-lg text-xs">1</td>
                    <td className="md:pl-8 border border-black md:text-lg text-xs">PI.105</td>
                    <td className="md:pl-32 border border-black md:text-lg text-xs">Needles</td>
              
                    <td className="md:pl-8 border border-black md:text-lg text-xs">105</td>
               
                    <td className="md:pl-8 border border-black md:text-lg text-xs">
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">
                            <a href="addstock.html">Update</a></button>
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">Delete</button></td>
                </tr >
                <tr className=" border-black border-2 h-10">
                    <td className="md:pl-8 border border-black md:text-lg text-xs">2</td>
                    <td className="md:pl-8 border border-black md:text-lg text-xs">PI.107</td>
                    <td className="md:pl-32 border border-black md:text-lg text-xs">Cotten</td>

                    <td className="md:pl-8 border border-black md:text-lg text-xs">100</td>
               
                    <td className="md:pl-8 border border-black md:text-lg text-xs">
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">
                            <a href="addstock.html">Update</a></button>
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">Delete</button></td>
                </tr>
            
                    
                <tr className=" border-black border-2 h-10">
                    <td className="md:pl-8 border border-black md:text-lg text-xs">3</td>
                    <td className="md:pl-8 border border-black md:text-lg text-xs">PI.108</td>
                    <td className="md:pl-32 border border-black md:text-lg text-xs">Iv.Bags</td>
                      
                    <td className="md:pl-8 border border-black md:text-lg text-xs">102</td>
                       
                    <td className="md:pl-8 border border-black md:text-lg text-xs">
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">
                            <a href="addstock.html">Update</a></button>
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">Delete</button></td>
                </tr>
                <tr className=" border-black border-2 h-10">
                    <td className="md:pl-8 border border-black md:text-lg text-xs">4</td>
                    <td className="md:pl-8 border border-black md:text-lg text-xs">PI.107</td>
                    <td className="md:pl-32 border border-black md:text-lg text-xs">Oximeter</td>
              
                    <td className="md:pl-8 border border-black md:text-lg text-xs">25</td>
               
                    <td className="md:pl-8 border border-black md:text-lg text-xs">
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">
                            <a href="addstock.html">Update</a></button>
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">Delete</button></td>
                </tr >
                <tr className=" border-black border-2 h-10">
                    <td className="md:pl-8 border border-black md:text-lg text-xs">5</td>
                    <td className="md:pl-8 border border-black md:text-lg text-xs">PI.108</td>
                    <td className="md:pl-32 border border-black md:text-lg text-xs">Patient Monitor</td>
              
                    <td className="md:pl-8 border border-black md:text-lg text-xs">12</td>
               
                    <td className="md:pl-8 border border-black md:text-lg text-xs">
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">
                            <a href="addstock.html">Update</a></button>
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">Delete</button></td>
                </tr>
            
                    
                <tr className=" border-black border-2 h-10">
                    <td className="md:pl-8 border border-black md:text-lg text-xs">6</td>
                    <td className="md:pl-8 border border-black md:text-lg text-xs">PI.109</td>
                    <td className="md:pl-32 border border-black md:text-lg text-xs">Blood Pressure Cuff</td>
                      
                    <td className="md:pl-8 border border-black md:text-lg text-xs">50</td>
                       
                    <td className="md:pl-8 border border-black md:text-lg text-xs">
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">
                            <a href="addstock.html">Update</a></button>
                        <button className="bg-slate-600 text-white w-[70px] rounded-xl">Delete</button></td>
                </tr>
                </tbody>
        </table>
    </div>
    </>
  )
}

export default ProductList    
