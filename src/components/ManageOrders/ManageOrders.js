import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { IoTrash } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";

const ManageOrders = () => {
    const [orders, setOrders] = useState();
    const [order, setOrder] = useState();
    const { user } = useAuth();
    const email = user.email;

    //load all orders
    useEffect(() => {
        fetch(`https://spooky-zombie-25747.herokuapp.com/orders`)
            .then(res => res.json())
            .then(result => {
                setOrders(result)
            })
    }, [email])
    //confirm update and load all orders
    if (order?.modifiedCount > 0) {
        fetch(`https://spooky-zombie-25747.herokuapp.com/orders`)
            .then(res => res.json())
            .then(result => setOrders(result))
    }


    /* ====================================
            handle the delete button
    ====================================== */
    const handleDelete = (id) => {

        if (window.confirm('Are sure to delete?')) {
            fetch(`https://spooky-zombie-25747.herokuapp.com/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        const newOrder = orders.filter(c => c._id !== id)
                        setOrders(newOrder)
                    }
                });
        }
    };

    /* ====================================
           handle the status
   ====================================== */
    const handleStatus = e => {
        const order = orders.filter(odr => odr._id === e)
        //update single order
        fetch(`https://spooky-zombie-25747.herokuapp.com/orders/update/${e}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                setOrder(result)
                if (result.modifiedCount > 0) {
                    alert('update successfully')
                }
                if (result.modifiedCount === 0) {
                    alert('already updated')
                }
            })

    }
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold tracking-wide text-gray-600 py-8">MANAGE ALL ORDERS : {orders?.length}</h1>


            {orders?.map((order, index) => <div key={order._id} className="grid grid-cols-12 border-b-4 border-indigo-400 mb-4 pb-2">


                <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium col-span-12 md:col-span-1">
                    <div>{index + 1}</div>
                </div>
                <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium  col-span-12 md:col-span-3">
                    <div>{order?.name}</div>
                </div>
                <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium  col-span-12 md:col-span-3">
                    <div>{order?.email}</div>
                </div>
                <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium  col-span-12 md:col-span-3">
                    <div>{order?.order.title}</div>
                </div>
                <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium  col-span-12 md:col-span-2">
                    <div className="gird grid-cols-12">
                        <div className="col-span-6">
                            {order?.status}
                        </div>
                        <div className="col-span-6">
                            <button onClick={() => handleStatus(order._id)} className=" bg-green-500 ml-5 text-white py-2 px-3 rounded-xl hover:bg-green-600 mr-5"><IoCheckmarkSharp />
                            </button>
                            <button
                                className="bg-red-500 text-white py-2 px-3 rounded-xl hover:bg-red-400" onClick={() => handleDelete(order._id)}><IoTrash />
                            </button>
                        </div>
                    </div>
                </div>

            </div>)}


        </div >
    );
};

export default ManageOrders;