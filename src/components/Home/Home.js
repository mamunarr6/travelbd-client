import React, { useEffect, useState } from 'react';
import './Home.css';
import Tour from '../Tours/Tour/Tour';
import useAuth from '../../hooks/useAuth';
import Spinner from '../Spinner';

const Home = () => {
    const { isLoading, setIsLoading } = useAuth();
    /* ==================================
            Top Attraction
    ===================================== */
    const [tour, setTour] = useState();
    useEffect(() => {
        setIsLoading(true)
        fetch('https://spooky-zombie-25747.herokuapp.com/tour')
            .then(res => res.json())
            .then(result => {
                setTour(result)
                setIsLoading(false)
            })
    }, [])
    return (
        <div>
            { /* ==========================
                            spinner
            ============================= */}
            {isLoading ? <div className="flex justify-center h-screen items-center">
                <Spinner />
            </div>
                :
                <div>
                    { /* ==========================
                         banner slider
                    ============================= */}
                    <div className="banner-container py-20">
                        <h1 className="text-center text-indigo-200 font-extrabold text-4xl leading-10 tracking-wider mt-10">WELCOME TO THE NATURE</h1>
                        <div className="container mx-auto text-center grid grid-cols-12 py-20">
                            <div className="sm:col-span-6 col-span-12 text-2xl text-center text-indigo-100 font-bold">
                                <h1 className="text-center py-3">Best guid for your Adventure</h1>
                                <h1 className="text-center py-3">Best for making tour</h1>
                            </div>
                            <div className="sm:col-span-6 col-span-12 text-2xl text-center text-indigo-100 font-bold">
                                <p className="text-center py-3">Make life enjoyable , Make something adventure.</p>
                                <p className="text-center py-3">See the nature , See our beautiful world.</p>
                            </div>
                        </div>
                        <h1 className="text-center text-indigo-200 font-extrabold text-4xl leading-10 tracking-wider mb-20">THANKS FOR VISITING US</h1>
                    </div>

                    {/* ==================================
                            Top Attraction
                    =====================================*/}
                    <div className="my-6">
                        <h1 className="container mx-auto text-center text-4xl text-indigo-700 font-extrabold">Top Attractions in Bangladesh </h1>
                        <p className="container mx-auto text-center text-base text-gray-600 font-medium">People like this place very much. You can try it..</p>
                        <div className="container mx-auto grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-4 my-10 max-w-xs lg:max-w-full md:max-w-4xl">
                            {
                                tour?.slice(0, 6).map(t => <Tour
                                    key={t._id}
                                    tour={t}
                                ></Tour>)
                            }
                        </div>
                    </div>

                    {/* ==================================
                                Packeges 
                    =====================================*/}
                    <div className="packeges">
                        <div className="container mx-auto py-8 max-w-xs lg:max-w-5xl md:max-w-3xl sm:max-w-xl">
                            <h2 className="text-gray-100 text-4xl font-bold text-center pt-4 tracking-wider">Your Adventure Partner</h2>
                            <p className="text-gray-100 text-medium font-semibold text-center py-4 tracking-wider">Anything You Like.There hava a lot of thing to choice.</p>
                            <div className="grid grid-cols-12 gap-5">
                                <div className="lg:col-span-4 sm:col-span-6 col-span-full bg-white py-6 rounded text-center">
                                    <h3 className="text-gray-800 text-xl font-semibold py-1">Family Packs</h3>
                                    <p className="text-gray-500 font-medium">Best Moment Wait</p>
                                </div>
                                <div className="lg:col-span-4 sm:col-span-6 col-span-full bg-white py-6 rounded text-center">
                                    <h3 className="text-gray-800 text-xl font-semibold py-1">Honeymoon Packs</h3>
                                    <p className="text-gray-500 font-medium">Love After Marriage</p>
                                </div>
                                <div className="lg:col-span-4 sm:col-span-6 col-span-full bg-white py-6 rounded text-center">
                                    <h3 className="text-gray-800 text-xl font-semibold py-1">Special Packs</h3>
                                    <p className="text-gray-500 font-medium">Holiday Special</p>
                                </div>
                                <div className="lg:col-span-4 sm:col-span-6 col-span-full bg-white py-6 rounded text-center">
                                    <h3 className="text-gray-800 text-xl font-semibold py-1">Adventure Activity</h3>
                                    <p className="text-gray-500 font-medium">In Premium Plans</p>
                                </div>
                                <div className="lg:col-span-4 sm:col-span-6 col-span-full bg-white py-6 rounded text-center">
                                    <h3 className="text-gray-800 text-xl font-semibold py-1">Beach Activity</h3>
                                    <p className="text-gray-500 font-medium">Day &amp; Night Activities</p>
                                </div>
                                <div className="lg:col-span-4 sm:col-span-6 col-span-full bg-white py-6 rounded text-center">
                                    <h3 className="text-gray-800 text-xl font-semibold py-1">Camping Activities</h3>
                                    <p className="text-gray-500 font-medium">Comes With Personal Trainers</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ==================================
                                Tour Guides 
                    =====================================*/}
                    <div className="container mx-auto">
                        <h2 className="text-center text-4xl font-bold text-gray-700 mt-10">Tour Guides</h2>
                        <p className="text-center text-lg font-medium text-gray-500 py-3">Our highly trained efficient tour guides</p>
                        <div className="flex justify-center flex-col md:flex-row md:gap-5 items-center ">
                            <div className=" max-w-xs sm:max-w-md ">
                                <img className=" w-full" src="https://i.ibb.co/19mYM1h/guide-1.png" alt="" />
                                <h4 className="text-center text-2xl text-gray-600 font-bold bg-gray-300 py-3 mb-3 w-full">Alamin</h4>

                            </div>
                            <div className=" max-w-xs sm:max-w-md ">
                                <img className=" w-full" src="https://i.ibb.co/s1PrcTV/guide-2.png" alt="" />
                                <h4 className="text-center text-2xl text-gray-600 font-bold bg-gray-300 py-3 mb-3 w-full">Ibrahim</h4>
                            </div>
                            <div className=" max-w-xs sm:max-w-md">
                                <img className="w-full" src="https://i.ibb.co/pjW3G2H/guide-3.png" alt="" />
                                <h4 className="text-center text-2xl text-gray-600 font-bold bg-gray-300 py-3 mb-3 w-full">Mosaddek</h4>
                            </div>
                            <div className=" max-w-xs sm:max-w-md">
                                <img className="w-full" src="https://i.ibb.co/j8yjjw8/guide-4.png" alt="" />
                                <h4 className="text-center text-2xl text-gray-600 font-bold bg-gray-300 py-3 mb-3 w-full">Mosaddek</h4>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    );
};

export default Home;
// col-span-12 md:col-span-6 lg:col-span-3 mx-auto
// grid grid-cols-12  max-w-2xl  xl:ml-32 lg:max-w-5xl xl:max-w-7xl