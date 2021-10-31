import React from 'react';
import { Link } from 'react-router-dom';

const Tour = ({ tour }) => {
    const { title, image, price, description, day, _id } = tour;


    return (
        <div className="md:grid md:grid-cols-12 lg:col-span-6 md:col-span-12 md:gap-5 border border-gray-400 rounded hover:bg-gray-200 transition-all md:h-60 mx-auto max-w-sm md:max-w-2xl sm:max-w-xl lg:max-w-3xl pb-4">
            {/* tour banner */}
            <div className="col-span-5 h-60">
                <img className="w-full h-full rounded-l" src={image} alt="" />
            </div>

            {/* tour details */}
            <div className="col-span-7 px-2">
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                <p className="mt-3 mb-1 text-gray-600">{description.slice(0, 100)}...
                    <Link to={`/tour/${_id}`} className="text-indigo-500 font-bold cursor-pointer "> More</Link>
                </p>
                <span className="font-medium">Tour: {day} Day</span>
                <span className="ml-5 font-medium">Cost: {price} BDT</span>
                <br /><br />
                <Link to={`/tour/${_id}`} className="bg-indigo-500 text-white py-2 px-3 rounded-xl hover:bg-indigo-600">Book Now
                </Link>
            </div>
        </div>
    );
};

export default Tour;