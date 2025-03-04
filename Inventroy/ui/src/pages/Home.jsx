import React from 'react'

function Home() {
  return (
    <body className="bg-slate-200">
    <div className="bg-zinc-500 drop-shadow-xl shadow-gray-950">
        <h1 className="text-3xl ml-5 pt-2 pb-2 font-extrabold text-white">CareWare</h1>
        
    </div>
    <div className="flex md:space-x-4 space-x-1">
    <div className="bg-zinc-500  md:w-[200px] w-[80px] md:h-[570px] h[700px] ">
        <a href="home.html"className="md:text-xl  mt-5 mb-5   md:flex">
            <img src="img/Grid.svg" className="md:size-8 size-4 md:pl-2 "></img><p className="md:pl-5 md:text-lg text-sm">Dashboard</p></a>

        <a href="inventory.html" className="md:text-xl pt-2 md:pb-2  mb-5  md:flex">
            <img src="img/Box.svg" className="md:size-8 size-6 md:pl-2"></img><p className="md:pl-5 md:text-lg text-sm">Inventory</p></a>
        
        <a href="addstock.html" className="md:text-xl pt-2 pb-2 mb-5   md:flex"> 
            <img src="img/Plus.svg" className="md:size-8 size-6 md:pl-2"></img><p className="md:pl-5 md:text-lg text-sm">Quick Add</p></a>

            <a href="staff.html" className="md:text-xl pt-2 pb-2 mb-5  md:flex">
                <img src="img/Users.svg" className="md:size-8 size-6 md:pl-2"></img><p className="md:pl-5 md:text-lg text-sm">Staffs</p></a>

        <a href="Orders.html" className="md:text-xl pt-2 pb-2 mb-5  md:flex">
            <img src="img/File text.svg" className="md:size-8 size-6 md:pl-2"></img><p className="md:pl-5 md:text-lg text-sm">Orders</p></a>

        <a href="login.html" className="md:text-xl  pt-2 pb-2 mb-5  md:flex">
            <img src="img/Share.svg" className="md:size-8 size-6 pl-2"></img><p className="md:pl-5 md:text-lg text-sm">LogOut</p></a>
    </div>
    <div>
        <div className="bg-zinc-400 md:flex h-[200px] md:w-[998px] w-[250px] rounded-2xl drop-shadow-2xl shadow-gray-950 md:mt-10 mt-5 md:mx-10 ">
            <img src="img/image 1.svg" className="md:w-[300px] w-[190px] md:pl-5 pl-2"></img>
            <h1 className="font-bold md:pt-12 text-xs pl-5 md:text-2xl">Never worry about  About Your Inventory
                
                <br></br>Inventory management is about balance:<br></br> too much ties up capital, too little stops progress.
            </h1>
        </div>
        <div className="md:flex md:space-x-6 md:mx-32">
            <div className="bg-zinc-400  h-[140px] md:w-[400px] w-[200px] rounded-2xl drop-shadow-2xl shadow-gray-950 mt-5">
                <h1 className="text-xl text-center pt-5">Out of Stocks Items</h1><br></br>
                <img src="/img/Alert triangle.svg"className="md:size-9 size-6 md:mx-44 mx-20 "></img>
            </div>
            <div className="bg-zinc-400  h-[140px] md:w-[400px] w-[200px] rounded-2xl drop-shadow-2xl shadow-gray-950 mt-5">
                <h1 className="text-xl text-center pt-5">Low Stocks Items</h1><br></br>
                <img src="/img/Alert triangle (1).svg"className="md:size-9 size-6 md:mx-44 mx-20"></img>
            </div>    
        </div>
        <div className="bg-zinc-400  h-[140px] md:w-[400px] w-[200px] rounded-2xl drop-shadow-xl shadow-gray-950 mt-5 md:mx-72 mx-2">
           <h1 className="text-xl text-center pt-5">Stock Percentage</h1>
           <h1 className="text-3xl md:px-44 px-20 pt-5">75%</h1>
        </div>
    </div>
    </div>

       
</body>
  )
}

export default Home