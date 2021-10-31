import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto lg:flex md:flex sm:flex justify-between items-center py-3 max-w-xs md:max-w-3xl lg:max-w-4xl sm:max-w-lg sm:gap-6">
                <div className="mb-3 md:mb-0">
                    <h1 className="text-2xl text-indigo-500 font-bold">TravelBd</h1>
                </div>
                <div className="sm:max-w-full max-w-lg">
                    <Link className=" px-2 text-xl" to="/home">Home</Link>
                    <Link className=" px-2 text-xl" to="/tour">Tour</Link>
                    {
                        user.email &&
                        <span>
                            <Link className=" px-2 text-xl" to="/myOrders">My Orders</Link>
                            <Link className=" px-2 text-xl" to="/manageOrders">Manage Orders</Link>
                            <Link className=" px-2 text-xl" to="/addTour">Add Tour</Link>
                        </span>
                    }
                    {
                        user.email ?
                            <Link onClick={logOut} className=" px-2 text-xl" to="/login">Logout</Link>
                            :
                            <Link className=" px-2 text-xl" to="/login">Login</Link>
                    }



                </div>
            </div>
        </div>
    );
};

export default Header;
