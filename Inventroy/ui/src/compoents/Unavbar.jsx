import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../assets/images/User.svg';
import cart from '../assets/images/ShoppingCart.svg';
import searchIcon from '../assets/images/Search.svg';
import home from '../assets/images/Grid.svg';

function Unavbar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            console.log('Searching for:', searchTerm);
            // Implement search logic here, e.g., navigate to a search results page
        }
    };

    return (
        <div className="bg-zinc-300">
            <div className="bg-zinc-500">
                <h1 className="text-3xl ml-5 pt-2 pb-2 font-extrabold text-white">CareWare</h1>
            </div>
            <div className="bg-zinc-500 mt-2 h-14 flex md:justify-between space-x-2">
                <div className="flex justify-between border-black border-2 rounded-full overflow-hidden md:h-9 h-6 mt-3 md:mx-28">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="md:w-[450px] w-[150px] pl-5"
                    />
                    <button onClick={handleSearch} className="bg-zinc-300 md:w-20 flex justify-center items-center">
                        <img src={searchIcon} className="md:w-6 w-4" alt="Search" />
                    </button>
                </div>
                <div className="flex pt-5 md:space-x-6 space-x-1 pr-10"> 
                    <Link to={'/userhome'}><img src={home} className="md:size-6 size-4" alt="Home" /></Link>
                    <Link to={'/userprofile'}><img src={User} className="md:size-6 size-4" alt="User" /></Link>
                    <Link to={'/cart'}><img src={cart} className="md:size-6 size-6" alt="Cart" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Unavbar;
