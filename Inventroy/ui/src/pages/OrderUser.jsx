import React from 'react'

function OrderUser() {
  return (
    <body className="bg-zinc-300">
    <div className="bg-zinc-500 ">
        <h1 className="text-3xl ml-5 pt-2 pb-2 font-extrabold text-white">CareWare</h1>
    </div>
    <div className="bg-zinc-500 mt-2 h-14 flex md:justify-between space-x-2 ">
        <h1 className="font-bold md:text-xl text-sm mt-3 md:ml-5 ml-2 text-white">List Of Iteams that you Ordered</h1>
        
        <div className="flex pt-2 md:space-x-6 space-x-1 pr-10">
            <a href="userpage.html"><img src="img/User.svg" className="md:size-9 size-6"></img></a>
            <a href="order.html"><img src="img/Shopping cart.svg" className="md:size-9 size-6"></img></a>
        </div>
    </div>
    <div className="grid md:grid-cols-3 gap-4 mt-20">
        <div className="bg-zinc-400 md:w-[350px] w-[230px] h-[300px] md:ml-10 ml-2 rounded-2xl drop-shadow-2xl shadow-gray-950">
            <div className="flex justify-between">
                <div className="pt-10 pl-5">
                    <h1 className="text-xl font-bold">ECG Machines</h1>
                    <h1>Eq Id :E.100</h1>
                    
                    <label> Issue Date :</label>
                    <input type="date" className=""> </input>
                </div>
                <div class="mr-10 mt-10">
                    <img src="img/ecg.jpeg" className="md:size-28 size-10"></img>
                </div>
            </div><br></br><br></br>
            <button class="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10">
                <a href="return.html">Return</a></button>
        </div>
        <div className="bg-zinc-400 md:w-[350px] w-[230px] h-[300px]  md:ml-10 ml-2 rounded-2xl drop-shadow-2xl shadow-gray-950">
            <div className="flex justify-between">
                <div className="pt-10 pl-5">
                    <h1 className="text-xl font-bold">Nebulizer</h1>
                    <h1>Eq Id :E.100</h1>
                    
                    <label> Issue Date :</label>
                    <input type="date" className=""></input>
                </div>
                <div className="mr-10 mt-10">
                    <img src="img/nedulizer.jpeg" className="md:size-28 size-10"></img>
                </div>
            </div><br></br><br></br>
            <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10">
                <a href="return.html">Return</a></button>
        </div>
        <div className="bg-zinc-400 md:w-[350px] w-[230px] h-[300px]  md:ml-10 ml-2 rounded-2xl drop-shadow-2xl shadow-gray-950">
            <div className="flex justify-between">
                <div className="pt-10 pl-5">
                    <h1 className="text-xl font-bold">oxygen concentrator</h1>
                    <h1>Eq Id :E.100</h1>
                    
                    <label>Date :</label>
                    <input type="date" className=""></input>
                </div>
                <div className="mr-10 mt-10">
                    <img src="img/oxygen.jpeg" className="md:size-28 size-10"></img>
                </div>
            </div><br></br><br></br>
            <button className="bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10">
                <a href="return.html">Return</a></button>
        </div>
    </div>
</body>
  )
}

export default OrderUser