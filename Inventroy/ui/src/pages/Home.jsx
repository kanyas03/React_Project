// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import grid from '../assets/images/Grid.svg'
// import box from '../assets/images/Box.svg'
// import plus from '../assets/images/Plus.svg'
// import user from '../assets/images/Users.svg'
// import file from '../assets/images/File.svg'
// import share from '../assets/images/Share.svg'
// import image from '../assets/images/image.svg'
// import alertTriangle from '../assets/images/Alert.svg'
// import triangle from '../assets/images/AlertRed.svg'



// function Home() {
//     const navigate = useNavigate();
//     const handleLogout = async () => {
//         try {
//             const response = await fetch('/api/logout', {
//                 method: 'GET',
//                 credentials: 'include' // Ensure cookies are sent
//             });

//             if (response.ok) {
//                 navigate('/login'); // Redirect after successful logout
//             } else {
//                 console.error("Logout failed");
//             }
//         } catch (error) {
//             console.error("Error during logout:", error);
//         }
//     };
    
//   return (
//     <div className="bg-slate-200">
//     <div className="bg-zinc-500 drop-shadow-xl shadow-gray-950">
//         <h1 className="text-3xl ml-5 pt-2 pb-2 font-extrabold text-white">CareWare</h1>
        
//     </div>
//     <div className="flex md:space-x-4 space-x-1">
//     <div className="bg-zinc-500  md:w-[200px] w-[80px] md:h-[570px] h[700px] ">
//         <Link to={'/home'}className="md:text-xl  mt-5 mb-5   md:flex">
//             <img src={grid} className="md:size-8 size-4 md:pl-2 "/><p className="md:pl-5 md:text-lg text-sm">Dashboard</p></Link>

//         <Link to={'/products'} className="md:text-xl pt-2 md:pb-2  mb-5  md:flex">
//             <img src={box} className="md:size-8 size-6 md:pl-2"/><p className="md:pl-5 md:text-lg text-sm">Inventory</p></Link>
        
//         <Link to={'/addProduct'} className="md:text-xl pt-2 pb-2 mb-5   md:flex"> 
//             <img src={plus} className="md:size-8 size-6 md:pl-2"/><p className="md:pl-5 md:text-lg text-sm">Quick Add</p></Link>

//             <Link to={"/staff"} className="md:text-xl pt-2 pb-2 mb-5  md:flex">
//                 <img src={user} className="md:size-8 size-6 md:pl-2"/><p className="md:pl-5 md:text-lg text-sm">Staffs</p></Link>

//         <Link to="/Orderlist" className="md:text-xl pt-2 pb-2 mb-5  md:flex">
//             <img src={file} className="md:size-8 size-6 md:pl-2"/><p className="md:pl-5 md:text-lg text-sm">Orders</p></Link>

//             <button onClick={handleLogout} className="md:text-xl pt-2 pb-2 mb-5 md:flex w-full text-left">
//                         <img src={share} className="md:size-8 size-6 pl-2"/>
//                         <p className="md:pl-5 md:text-lg text-sm">Log Out</p>
//                     </button>
//     </div>
//     <div>
//         <div className="bg-zinc-400 md:flex h-[200px] md:w-[998px] w-[250px] rounded-2xl drop-shadow-2xl shadow-gray-950 md:mt-10 mt-5 md:mx-10 ">
//             <img src={image} className="md:w-[300px] w-[190px] md:pl-5 pl-2"/>
//             <h1 className="font-bold md:pt-12 text-xs pl-5 md:text-2xl">Never worry about  About Your Inventory
                
//                 <br></br>Inventory management is about balance:<br></br> too much ties up capital, too little stops progress.
//             </h1>
//         </div>
//         <div className="md:flex md:space-x-6 md:mx-32">
//             <div className="bg-zinc-400  h-[140px] md:w-[400px] w-[200px] rounded-2xl drop-shadow-2xl shadow-gray-950 mt-5">
//                 <h1 className="text-xl text-center pt-5">Out of Stocks Items</h1><br></br>
//                 <img src={alertTriangle}  className="md:size-9 size-6 md:mx-44 mx-20 "/>
//             </div>
//             <div className="bg-zinc-400  h-[140px] md:w-[400px] w-[200px] rounded-2xl drop-shadow-2xl shadow-gray-950 mt-5">
//                 <h1 className="text-xl text-center pt-5">Low Stocks Items</h1><br></br>
//                 <img src={triangle}  className="md:size-9 size-6 md:mx-44 mx-20"/>
//             </div>    
//         </div>
//         <div className="bg-zinc-400  h-[140px] md:w-[400px] w-[200px] rounded-2xl drop-shadow-xl shadow-gray-950 mt-5 md:mx-72 mx-2">
//            <h1 className="text-xl text-center pt-5">Stock Percentage</h1>
//            <h1 className="text-3xl md:px-44 px-20 pt-5">75%</h1>
//         </div>
//     </div>
//     </div>

       
// </div>
//   )
// }

// export default Home



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import grid from '../assets/images/Grid.svg';
import box from '../assets/images/Box.svg';
import plus from '../assets/images/Plus.svg';
import user from '../assets/images/Users.svg';
import file from '../assets/images/File.svg';
import share from '../assets/images/Share.svg';
import image from '../assets/images/image.svg';
import alertTriangle from '../assets/images/Alert.svg';
import triangle from '../assets/images/AlertRed.svg';

function Home() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const response = await fetch('/api/logout', {
                method: 'GET',
                credentials: 'include'
            });

            if (response.ok) {
                navigate('/login');
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <div className="bg-slate-200">
            {/* Navbar */}
            <div className="bg-zinc-500 drop-shadow-xl shadow-gray-950">
                <h1 className="text-3xl ml-5 pt-2 pb-2 font-extrabold text-white">CareWare</h1>
            </div>

            <div className="flex md:space-x-4 space-x-1">
                {/* Sidebar */}
                <div className="bg-zinc-500 md:w-[200px] w-[80px] md:h-[570px] h[700px] p-3">
                    <Link to={'/home'} className="md:text-xl  mt-5 mb-5   md:flex">
                        <img src={grid} className="md:size-8 size-6 pl-2" />
                        <p className="md:pl-5 md:text-lg text-sm">Dashboard</p>
                    </Link>

                    <Link to={'/products'} className="md:text-xl  mt-5 mb-5   md:flex">
                        <img src={box} className="md:size-8 size-6 pl-2" />
                        <p className="md:pl-5 md:text-lg text-sm">Inventory</p>
                    </Link>

                    <Link to={'/addProduct'} className="md:text-xl  mt-5 mb-5   md:flex">
                        <img src={plus} className="md:size-8 size-6 pl-2" />
                        <p className="md:pl-5 md:text-lg text-sm">Quick Add</p>
                    </Link>

                    <Link to={"/staff"} className="md:flex items-center space-x-2">
                        <img src={user} className="md:size-8 size-6 pl-2" />
                        <p className="md:pl-5 md:text-lg text-sm">Staffs</p>
                    </Link>

                    <Link to="/Orderlist" className="md:text-xl  mt-5 mb-5   md:flex">
                        <img src={file} className="md:size-8 size-6 pl-2" />
                        <p className="md:pl-5 md:text-lg text-sm">Orders</p>
                    </Link>

                    <button onClick={handleLogout} className="md:flex items-center space-x-2 w-full text-left">
                        <img src={share} className="md:size-8 size-6 pl-2" />
                        <p className="md:pl-5 md:text-lg text-sm">Log Out</p>
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    {/* Header Section */}
                    <div className="bg-zinc-400 flex md:w-[998px] w-[250px] rounded-2xl drop-shadow-2xl shadow-gray-950 md:mt-10 mt-5 md:mx-10 p-4">
                        <img src={image} className="md:w-[300px] w-[190px]" />
                        <h1 className="font-bold md:text-2xl text-xs">
                            Never worry about your inventory
                            <br /> Inventory management is about balance:
                            <br /> Too much ties up capital, too little stops progress.
                        </h1>
                    </div>

                    {/* Stock Notifications */}
                    <div className="md:flex md:space-x-6 md:mx-32">
                        {/* Out of Stock Items */}
                        <div className="bg-zinc-400 h-[140px] md:w-[400px] w-[200px] rounded-2xl drop-shadow-2xl shadow-gray-950 mt-5 p-4">
                            <h1 className="text-xl text-center">Out of Stock Items</h1>
                            <img src={alertTriangle} className="md:size-9 size-6 mx-auto mt-2" />
                           
                        </div>

                        {/* Low Stock Items */}
                        <div className="bg-zinc-400 h-[140px] md:w-[400px] w-[200px] rounded-2xl drop-shadow-2xl shadow-gray-950 mt-5 p-4">
                            <h1 className="text-xl text-center">Low Stock Items</h1>
                            <img src={triangle} className="md:size-9 size-6 mx-auto mt-2" />
                            
                           
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default Home;
