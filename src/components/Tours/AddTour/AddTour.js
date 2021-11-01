import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddTour = () => {
    const { setTour } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        /* post the new added tour  */
        fetch('https://spooky-zombie-25747.herokuapp.com/addTour', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                /* reset the tour if admin add a new tour */
                if (result.insertedId) {
                    fetch('https://spooky-zombie-25747.herokuapp.com/tour')
                        .then(res => res.json())
                        .then(result => setTour(result))
                }
            })
        alert('Added the Tour Successfully')
        reset();
    };
    return (
        <div className="container mx-auto">
            <h1 className="text-center font-extrabold text-4xl text-indigo-500 pt-10">Add a New Tour</h1>
            <div className="flex justify-center">
                <form className="lg:w-2/4 xl:h-2/5 w-3/4 rounded bg-gray-200 sm:py-14  sm:px-20 p-4 my-10" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="block w-full my-4 py-4 outline-none px-3 rounded"
                        {...register("title", { required: true })} placeholder="Tour Title" />
                    {errors.title && <span className="text-red-500">This field is required</span>}

                    <input
                        className="block w-full my-4 py-4 outline-none px-3 rounded-md"
                        {...register("price", { required: true })} placeholder="Tour Cost" />
                    {errors.price && <span className="text-red-500">This field is required</span>}

                    <input
                        className="block w-full my-4 py-4 outline-none px-3 rounded"
                        {...register("day", { required: true })} placeholder="How many days?" />
                    {errors.day && <span className="text-red-500">This field is required</span>}

                    <input
                        className="block w-full my-4 py-4 outline-none px-3 rounded"
                        type="date" {...register("date", { required: true })} placeholder="When Go to Tour?" />
                    {errors.date && <span className="text-red-500">This field is required</span>}

                    <input
                        className="block w-full my-4 py-4 outline-none px-3 rounded"
                        {...register("image", { required: true })} placeholder="Image Link" />
                    {errors.image && <span className="text-red-500">This field is required</span>}

                    <textarea
                        className="block w-full my-4 py-4 outline-none px-3 rounded"
                        {...register("description", { required: true })} placeholder="Tour Description" />
                    {errors.description && <span className="text-red-500">This field is required</span>}

                    <input
                        className="block w-full my-4 py-4 outline-none px-3 rounded-md text-white bg-indigo-500 text-2xl font-semibold hover:bg-opacity-0 hover:text-indigo-500 border-2 hover:border-indigo-500 transition-all "
                        type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddTour;