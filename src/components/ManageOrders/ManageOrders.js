import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';

const ManageOrders = () => {
    const [orders, setOrders] = useState();
    const [order, setOrder] = useState();
    const { user } = useAuth();
    // const [status, setStatus] = useState('pending');
    const email = user.email;
    console.log('email', email)

    //load all orders
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(result => {
                setOrders(result)
            })
    }, [email])
    //confirm update and load all orders
    if (order?.modifiedCount > 0) {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(result => setOrders(result))
    }


    /* ====================================
            handle the delete button
    ====================================== */
    const handleDelete = (id) => {

        if (window.confirm('Are sure to delete?')) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
        fetch(`http://localhost:5000/orders/update/${e}`, {
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
                console.log(result)
            })

    }
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold tracking-wide text-gray-700 py-8">MANAGE ALL ORDERS</h1>
            <div className="grid grid-cols-12 gap-7">
                {orders?.map(c => <div key={c._id} className="col-span-4 grid grid-cols-12  gap-5 border border-gray-400 rounded hover:bg-gray-200 transition-all my-10 h-52">
                    <div className="col-span-5 h-52">
                        <img className="w-full h-full rounded-l" src={c.order.image} alt="" />
                    </div>

                    <div className="col-span-7 ">
                        <h3 className="text-2xl font-bold text-gray-800">{c.order.title}</h3>

                        <span className="font-medium">Tour: {c.order.day} Day</span>
                        <span className="ml-5 font-medium">Cost: {c.order.price} BDT</span>
                        <span className="ml-5 font-medium"> {c.status} </span>
                        <br /><br />

                        {/* status button */}
                        <button onClick={() => handleStatus(c._id)} className="bg-indigo-500 text-white py-2 px-3 rounded-xl hover:bg-indigo-600 mr-5">Update
                        </button>

                        {/* delete button */}
                        <button className="bg-indigo-500 text-white py-2 px-3 rounded-xl hover:bg-indigo-600" onClick={() => handleDelete(c._id)}>Delete
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default ManageOrders;