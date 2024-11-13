import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div><br/>
           
            <h1 class="text-center text-3xl text-black font-semibold ">
                <a href="#" class="font-semibold text-black-900"><i>MUSICALLY</i></a>
                </h1><br/>
                <center>
           <h1 class="hover:shadow-md h-14 max-w-96 bg-gray-400 rounded-2xl text-right p-3 ">🔍&nbsp;</h1>
           </center>
            <nav class="text-blue-900 p-12 space-x-64 font-bold text-3xl">
                <Link to="/" class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#" className="hover:text-blue-500 hover:shadow-md">Home</a></Link> 
                <Link to="/playlist"><a href="#" className="hover:text-blue-500 hover:shadow-md">Playlist</a></Link>
                <Link to="/about"> <a href="#" className="hover:text-blue-500 hover:shadow-md">About Us</a></Link>
                <Link to="/contact"><a href="#" className="hover:text-blue-500 hover:shadow-md">Contact Us</a></Link>
               <br/><br/> <br/>
            </nav>
            
        </div>
    );
};

export default Navbar;

