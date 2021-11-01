import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [tourDetails, setTourDetails] = useState();
    const { user, } = useAuth();

    /* ====================
        load single tour
    ======================== */
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://spooky-zombie-25747.herokuapp.com/tour/${id}`)
            .then(res => res.json())
            .then(result => setTourDetails(result))
    }, [id])


    /* ====================
               place order
       ======================== */

    const onSubmit = data => {
        data.order = tourDetails;
        data.status = 'pending';
        fetch('https://spooky-zombie-25747.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Placed Successflly');
                    reset();
                }
            })
    };
    return (
        <div>
            {/* ====================
                    tour details
                ======================== */}
            <div className="md:grid grid-cols-12  gap-5 my-10 ">

                <div className="col-span-5 h-full">
                    <img className="w-full h-full rounded-l" src={tourDetails?.image} alt="" />
                </div>

                <div className="col-span-7 bg-gray-200 p-8 ">
                    <h3 className="text-2xl font-bold text-gray-800">{tourDetails?.title}</h3>

                    <p className="mt-3 mb-2 text-gray-600 leading-8 tracking-wide">{tourDetails?.description}</p>

                    <p>Time: {tourDetails?.day} Day</p>
                    <p>Cost: {tourDetails?.price} BDT</p>

                    <Link to="/tour">
                        <button className=" bg-purple-500 text-white py-2 px-3 rounded-xl hover:bg-purple-600 mt-10">Go Back
                        </button>
                    </Link>
                    <span className="ml-10 mr-5 text-lg font-bold text-gray-600">Go back for choosing another place .</span>
                </div>
            </div>

            {/* ====================
                    place order
                ======================== */}
            <div className="container mx-auto">
                <h2 className="text-center text-2xl font-bold text-gray-600">Please add the information to confirm the order.</h2>
                <div className="flex justify-center my-10">
                    <form className="lg:w-2/4 xl:h-2/5 w-4/5 rounded bg-gray-200 py-14 md:px-20 px-5" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="block w-full my-4 py-4 outline-none px-3 rounded"
                            defaultValue={user.displayName} {...register("name")} />

                        <input
                            className="block w-full my-4 py-4 outline-none px-3 rounded"
                            defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}

                        <input
                            className="block w-full my-4 py-4 outline-none px-3 rounded"
                            placeholder="Address" defaultValue="" {...register("address")} />
                        <input
                            className="block w-full my-4 py-4 outline-none px-3 rounded"
                            placeholder="City" defaultValue="" {...register("city")} />
                        <input
                            className="block w-full my-4 py-4 outline-none px-3 rounded"
                            placeholder="phone number" defaultValue="" {...register("phone")} />

                        <input
                            className="bg-indigo-500 block w-full my-4 py-4 outline-none px-3 rounded text-white font-semibold hover:bg-indigo-600"
                            type="submit" value="Place The Order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;