import React from 'react'
import Navbar from '../compoents/Navbar'

function OrderList() {
  return (
   <>
   <Navbar/>
   <h1 className="font-extrabold mt-5 md:ml-[500px] text-xl">Orders</h1><br></br>
    <table className=" border-collapse border border-black md:w-[1250px] w-[150px] md:ml-5 md:mr-5">
        <tr className=" border-black border-2 bg-zinc-400 h-10">
            <th className="md:pl-2 border border-black md:text-lg text-xs">Order Id</th>
            <th className="md:pr-3 border border-black md:text-lg text-xs">Staff Id</th>
            <th className="md:pr-5 border border-black md:text-lg text-xs">Staff Name</th>
            <th className="md:pr-5 border border-black md:text-lg text-xs">Department</th>
            <th className="md:pl-2 border border-black md:text-lg text-xs">No of Iteams Orded</th>
            <th className="md:pr-10 border border-black md:text-lg text-xs">Order Date</th>
            <th className="md:pr-10 border border-black md:text-lg text-xs">Status</th>
            <th className="md:pl-2 border border-black md:text-lg text-xs">Action</th>
        </tr>
        <tr className=" border-black border-2 h-10">
            <td className="md:pl-8 border border-black md:text-lg text-xs">1</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">S.100</td>
            <td className="md:pl-32 border border-black md:text-lg text-xs">Anjitha</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">Emergency</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">4</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">03/04/25</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">
                <button className="bg-slate-600 text-white w-[85px] rounded-xl">Delivered</button></td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">
                <button className="bg-slate-600 text-white w-[70px] rounded-xl">View</button></td>
               
        </tr >
        <tr className=" border-black border-2 h-10">
            <td className="md:pl-8 border border-black md:text-lg text-xs">2</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">S.101</td>
            <td className="md:pl-32 border border-black md:text-lg text-xs">Anamika</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">General Medicine</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">10</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">13/02/25</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">
                <button className="bg-slate-600 text-white w-[85px] rounded-xl">Delivered</button></td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">
                <button className="bg-slate-600 text-white w-[70px] rounded-xl">View</button></td>
               
        </tr >
        <tr className=" border-black border-2 h-10">
            <td className="md:pl-8 border border-black md:text-lg text-xs">3</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">S.102</td>
            <td className="md:pl-32 border border-black md:text-lg text-xs">Krishna</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">Paediatric </td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">4</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">10/05/25</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">
                <button className="bg-slate-600 text-white w-[85px] rounded-xl">Penting</button></td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">
                <button className="bg-slate-600 text-white w-[70px] rounded-xl">View</button></td>
                
        </tr >
        <tr className=" border-black border-2 h-10">
            <td className="md:pl-8 border border-black md:text-lg text-xs">4</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">S.104</td>
            <td className="md:pl-32 border border-black md:text-lg text-xs">Anna</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">Gynecology</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">3</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">01/07/25</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">
                <button className="bg-slate-600 text-white w-[85px] rounded-xl">Delivered</button></td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">
                <button className="bg-slate-600 text-white w-[70px] rounded-xl">View</button></td>
                
        </tr >
        <tr className=" border-black border-2 h-10">
            <td className="md:pl-8 border border-black md:text-lg text-xs">5</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">S.105</td>
            <td className="md:pl-32 border border-black md:text-lg text-xs">Ranjana</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs"></td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">4</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">03/04/25</td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">
                <button className="bg-slate-600 text-white w-[85px] rounded-xl">Delivered</button></td>
            <td className="md:pl-8 border border-black md:text-lg text-xs">
                <button className="bg-slate-600 text-white w-[70px] rounded-xl">View</button></td>
            </tr >
        


    </table>
   </>
  )
}

export default OrderList