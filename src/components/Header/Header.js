import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto flex justify-between items-center py-3">
                <div>
                    <h1 className="text-2xl text-indigo-500 font-bold">TravelBd</h1>
                </div>
                <div>
                    <Link className="ml-5 text-xl" to="/home">Home</Link>
                    <Link className="ml-5 text-xl" to="/home">Destination</Link>
                    <Link className="ml-5 text-xl" to="/tour">Tour</Link>
                    {
                        user.email &&
                        <span>
                            <Link className="ml-5 text-xl" to="/myOrders">My Orders</Link>
                            <Link className="ml-5 text-xl" to="/manageOrders">Manage Orders</Link>
                            <Link className="ml-5 text-xl" to="/addTour">Add a Tour</Link>
                        </span>
                    }
                    <Link className="ml-5 text-xl" to="/profile">Profile</Link>
                    {
                        user.email ?
                            <Link onClick={logOut} className="ml-5 text-xl" to="/login">Logout</Link>
                            :
                            <Link className="ml-5 text-xl" to="/login">Login</Link>
                    }



                </div>
            </div>
        </div>
    );
};

export default Header;