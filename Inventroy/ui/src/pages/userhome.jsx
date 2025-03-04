import React from 'react'
import Unavbar from '../compoents/Unavbar'

function userhome() {
  return (
   <> 
   <Unavbar/>
   <body className="bg-zinc-300">

   <h1 className="font-extrabold mt-10 md:ml-[500px] ml-2 text-xl">MEDICAL PRODUCTS</h1><br></br><br></br>
   <div className="mx-32">
       <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10"><a href="inventoryuser.html">All</a></button>
       <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10"><a href="dis_Product.html">Disposible Product</a></button>
       <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10"><a href="nondis_product.html">Non-diposible Product</a></button>
   </div><br></br>
   <div className="grid md:grid-cols-3 gap-4 md:mt-20 mt-5 mr-2">
       <div className="bg-zinc-400 md:w-[350px] w-[230px] h-[300px] md:ml-10 ml-2 rounded-2xl drop-shadow-2xl shadow-gray-950">
           <div className="flex justify-between">
               <div className="pt-10 pl-5">
                   <h1 className="text-xl font-bold">ECG Machines</h1>
                   <h1>Eq Id :E.100</h1>
                   <label>Qty :</label>
                   <input type="number" className="w-32"></input><br></br><br></br>
                   <label>Date :</label>
                   <input type="date" className=""> </input>
               </div>
               <div className="mr-10 mt-10">
                   <img src="/img/ecg.jpeg" className="md:size-28 size-10"></img>
               </div>
           </div><br></br><br></br>
           <button className="bg-indigo-950 md:w-[250px] w-[150px] text-white font-bold rounded-2xl md:ml-10 ml-5">Order</button>
       </div>
       <div className="bg-zinc-400 md:w-[350px] w-[230px] h-[300px]  md:ml-10 ml-2 rounded-2xl drop-shadow-2xl shadow-gray-950">
           <div className="flex justify-between ">
               <div className="pt-10 pl-5">
                   <h1 className="text-xl font-bold">Oxygen cylinders</h1>
                   <h1>Eq Id :E.100</h1>
                   <label>Qty :</label>
                   <input type="number" className="md:w-32 size-10"></input><br></br><br></br>
                   <label>Date :</label>
                   <input type="date" className=""></input>
               </div>
               <div className="mr-10 mt-10">
                   <img src="img/oxygen.jpeg" className="md:size-28 size-14"></img>
               </div>
           </div><br></br>
           <button className="bg-indigo-950 md:w-[250px] w-[180px]  text-white font-bold rounded-2xl md:ml-10 ml-5">Order</button>
       </div>
       <div className="bg-zinc-400 md:w-[350px] w-[230px] h-[300px]  md:ml-10 ml-2 rounded-2xl drop-shadow-2xl shadow-gray-950">
           <div className="flex justify-between">
               <div className="pt-10 pl-5">
                   <h1 className="text-xl font-bold">Patient monitors</h1>
                   <h1>Eq Id :E.100</h1>
                   <label>Qty :</label>
                   <input type="number" className="w-32"></input><br></br><br></br>
                   <label>Date :</label>
                   <input type="date" className=""></input>
               </div>
           
               <div className="mr-10 mt-10">
                   <img src="img/patient.jpeg" className="md:size-28 size-10"></img>
               </div>
           </div><br></br>
           <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl md:ml-10 ml-5" >Order</button>
       </div>
       <div className="bg-zinc-400 md:w-[350px] w-[230px] h-[300px]  md:ml-10 ml-2 rounded-2xl drop-shadow-2xl shadow-gray-950">
           <div className="flex justify-between">
               <div className="pt-10 pl-5">
                   <h1 className="text-xl font-bold">Needles</h1>
                   <h1>Eq Id :E.100</h1>
                   <label>Qty :</label>
                   <input type="number" className="w-32"></input><br></br><br></br>
                   <label>Date :</label>
                   <input type="date" className=""></input>
               </div>
               <div className="mr-10 mt-10">
                   <img src="img/needles.jpeg" className="md:size-28 size-10"></img>
               </div>
           </div><br></br>
           <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl md:ml-10 ml-5">Order</button>
       </div>
       <div className="bg-zinc-400 md:w-[350px] w-[230px] h-[300px]  md:ml-10 ml-2 rounded-2xl drop-shadow-2xl shadow-gray-950">
           <div className="flex justify-between">
               <div className="pt-10 pl-5">
                   <h1 className="text-xl font-bold">Nebulizer</h1>
                   <h1>Eq Id :E.100</h1>
                   <label>Qty :</label>
                   <input type="number" className="w-32"></input><br></br><br></br>
                   <label>Date :</label>
                   <input type="date" className=""></input>
               </div>
               <div className="mr-10 mt-10">
                   <img src="/img/nedulizer.jpeg" className="md:size-28 size-10"></img>
               </div>
           </div><br></br><br></br>
           <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10">Order</button>
       </div>
       <div className="bg-zinc-400 md:w-[350px] w-[230px] h-[300px] md:ml-10 ml-2 rounded-2xl drop-shadow-2xl shadow-gray-950">
           <div className="flex justify-between">
               <div className="pt-10 pl-5">
                   <h1 className="text-xl font-bold">oxygen concentrator</h1>
                   <h1>Eq Id :E.100</h1>
                   <label>Qty :</label>
                   <input type="number" className="w-32"></input><br></br><br></br>
                   <label>Date :</label>
                   <input type="date" className=""></input>
               </div>
               <div className="mr-10 mt-10">
                   <img src="/img/oxygen2.jpeg" className="md:size-28 size-10"></img>
               </div>
           </div><br></br>
           <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10">Order</button>
       </div>
    </div>
    </body>
    </>
  )
}

export default userhome