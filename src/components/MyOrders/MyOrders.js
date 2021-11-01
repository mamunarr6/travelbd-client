import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState();
    const { user } = useAuth();
    const email = user.email;

    useEffect(() => {
        fetch(`https://spooky-zombie-25747.herokuapp.com/myOrders?email=${email}`)
            .then(res => res.json())
            .then(result => {
                setMyOrders(result)
            })
    }, [email])

    const handleDelete = (id) => {
        if (window.confirm('Are sure to delete?')) {
            fetch(`https://spooky-zombie-25747.herokuapp.com/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        const newOrder = myOrders.filter(c => c._id !== id)
                        setMyOrders(newOrder)
                    }
                })
        }
    };
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold tracking-wide text-gray-700 py-8">MY ORDERS : {myOrders?.length}</h1>
            <div className="container mx-auto grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-2 lg:gap-6 max-w-xs lg:max-w-full md:max-w-4xl">
                {myOrders?.map(c => <div key={c._id} className="col-span-4 md:col-span-6 grid grid-cols-12  gap-5 border border-gray-400 rounded hover:bg-gray-200 transition-all my-4 h-48">
                    <div className="col-span-5 h-48">
                        <img className="w-full h-full rounded-l" src={c.order.image} alt="" />
                    </div>

                    <div className="col-span-7 ">
                        <h3 className="text-2xl font-bold text-gray-800">{c.order.title}</h3>

                        <span className="font-medium">Tour: {c.order.day} Day</span>
                        <span className="ml-5 font-medium">Cost: {c.order.price} BDT</span>
                        <br /><br />

                        <button className="bg-indigo-500 text-white py-2 px-3 rounded-xl hover:bg-indigo-600" onClick={() => handleDelete(c._id)}>Delete
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyOrders;