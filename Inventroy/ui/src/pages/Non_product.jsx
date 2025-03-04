import React from 'react'
import Navbar from '../compoents/Navbar'

function Non_product() {
  return (
    <>
    <Navbar/>
    <h1 className="font-extrabold mt-5 md:ml-[500px] text-xl">NON-DISPOSIBLE PRODUCTS</h1><br></br>
        <table className=" border-collapse border border-black md:w-[1250px] w-[150px] md:ml-5 md:mr-5">
            <tr className=" border-black border-2 bg-zinc-400 h-10">
                <th className="md:pl-2 border border-black md:text-lg text-xs">SINo</th>
                <th className="md:pr-3 border border-black md:text-lg text-xs">Eq Id</th>
                <th className="md:pr-5 border border-black md:text-lg text-xs">Equipments Name</th>
                
                <th className="md:pl-2 border border-black md:text-lg text-xs">Stocks</th>
                
                <th className="md:pl-2 border border-black md:text-lg text-xs">Action</th>
            </tr>
            <tr className=" border-black border-2 h-10">
                <td className="md:pl-8 border border-black md:text-lg text-xs">1</td>
                <td className="md:pl-8 border border-black md:text-lg text-xs">PI.107</td>
                <td className="md:pl-32 border border-black md:text-lg text-xs">Oxymeter</td>
              
                <td className="md:pl-8 border border-black md:text-lg text-xs">25</td>
               
                <td className="md:pl-8 border border-black md:text-lg text-xs"><button className="bg-slate-600 text-white w-[70px] rounded-xl"><a href="addstock.html">Update</a></button>
                    <button className="bg-slate-600 text-white w-[70px] rounded-xl">Delete</button></td>
            </tr >
            <tr className=" border-black border-2 h-10">
                <td className="md:pl-8 border border-black md:text-lg text-xs">2</td>
                <td className="md:pl-8 border border-black md:text-lg text-xs">PI.108</td>
                <td className="md:pl-32 border border-black md:text-lg text-xs">oxygen tanks</td>
              
                <td className="md:pl-8 border border-black md:text-lg text-xs">12</td>
               
                <td className="md:pl-8 border border-black md:text-lg text-xs"><button className="bg-slate-600 text-white w-[70px] rounded-xl"><a href="addstock.html">Update</a></button>
                    <button class="bg-slate-600 text-white w-[70px] rounded-xl">Delete</button></td>
            </tr>
            
                    
            <tr className=" border-black border-2 h-10">
                <td className="md:pl-8 border border-black md:text-lg text-xs">3</td>
                <td className="md:pl-8 border border-black md:text-lg text-xs">PI.109</td>
                <td className="md:pl-32 border border-black md:text-lg text-xs">blood pressure cuffs</td>
                      
                <td className="md:pl-8 border border-black md:text-lg text-xs">50</td>
                       
                <td className="md:pl-8 border border-black md:text-lg text-xs"><button className="bg-slate-600 text-white w-[70px] rounded-xl"><a href="addstock.html">Update</a></button>
                    <button className="bg-slate-600 text-white w-[70px] rounded-xl">Delete</button></td>
            </tr>
        </table>
    </>
  )
}

export default Non_product