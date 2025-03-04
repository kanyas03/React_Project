import React from 'react'
import Navbar from '../compoents/Navbar'

function Staff() {
  return (
    <>
    <Navbar/>
    <h1 className="font-extrabold mt-5 md:ml-[600px] text-xl">STAFFS</h1><br></br>
        <table className=" border-collapse border border-black md:w-[1250px] w-[260px] md:ml-5 mr-5">
            <tr className=" border-black border-2 bg-zinc-400 h-10">
                <th className="md:pl-2 border border-black md:text-lg text-xs">SINo</th>
                <th className="md:pl-2 border border-black md:text-lg text-xs">Staff Id</th>
                <th className="md:pl-2 border border-black md:text-lg text-xs">Staff Name</th>
                <th className="md:pl-2 border border-black md:text-lg text-xs">Depmartment</th>
                <th className="md:pl-2 border border-black md:text-lg text-xs">Ph No</th>
                <th className="md:pl-2 border border-black md:text-lg text-xs">Action</th>
            </tr>
            <tr className=" border-black border-2 h-10">
                <td className="md:pl-2 border border-black md:text-lg text-xs">1</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">S.100</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">Anjitha T v</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">Neurology</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">9988765321</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">
                    <button className="bg-slate-600 text-white w-[70px] rounded-xl">Remove</button>
                    <button className="bg-slate-600 text-white w-[70px] rounded-xl">Edit</button></td>
            </tr>
            <tr className=" border-black border-2 h-10">
                <td className="md:pl-2 border border-black md:text-lg text-xs">2</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">S.102</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">Anamika</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">Dermatology</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">9988125321</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">
                    <button className="bg-slate-600 text-white w-[70px] rounded-xl">Remove</button>
                    <button className="bg-slate-600 text-white w-[70px] rounded-xl">Edit</button></td>
            </tr>
            <tr className=" border-black border-2 h-10">
                <td className="md:pl-2 border border-black md:text-lg text-xs">3</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">S.103</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">Anna</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">Cardiology </td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">9384129321</td>
                <td className="md:pl-2 border border-black md:text-lg text-xs">
                    <button className="bg-slate-600 text-white w-[70px] rounded-xl">Remove</button>
                    <button className="bg-slate-600 text-white w-[70px] rounded-xl">Edit</button></td>
            </tr>
            <tr class=" border-black border-2 h-10">
                <td class="md:pl-2 border border-black md:text-lg text-xs">4</td>
                <td class="md:pl-2 border border-black md:text-lg text-xs">S.103</td>
                <td class="md:pl-2 border border-black md:text-lg text-xs">Krishna S</td>
                <td class="md:pl-2 border border-black md:text-lg text-xs">Cardiology </td>
                <td class="md:pl-2 border border-black md:text-lg text-xs">8394929323</td>
                <td class="md:pl-2 border border-black md:text-lg text-xs">
                    <button class="bg-slate-600 text-white w-[70px] rounded-xl">Remove</button>
                    <button class="bg-slate-600 text-white w-[70px] rounded-xl">Edit</button></td>
            </tr>
        </table>
    </>
  )
}

export default Staff