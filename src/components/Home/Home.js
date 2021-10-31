import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Home.css';
import Tour from '../Tours/Tour/Tour';

const Home = () => {
    /* ==========================
            slider images
    ============================= */
    const slideImages = [
        {
            url: 'https://i.ibb.co/2WC74g3/banner-1.png',
            title: 'Best guid for your Adventure',
            caption: 'Make life enjoyable , Make something adventure.'
        },
        {
            url: 'https://i.ibb.co/9q6hnpC/banner-2.png',
            title: 'Best choice for your experience',
            caption: 'Gather experience to lead a happy life.'
        },
        {
            url: 'https://i.ibb.co/3rCfpyz/banner-3.png',
            title: 'Best for making tour',
            caption: 'See the nature , See our beautiful world.'
        },
    ];

    /* ==================================
            Top Attraction
    ===================================== */
    const [tour, setTour] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/tour')
            .then(res => res.json())
            .then(result => setTour(result))
    }, [])
    return (
        <div>
            { /* ==========================
                    banner slider
                ============================= */}
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <div className="banner relative "
                                style={{ 'backgroundImage': `linear-gradient(rgba(53, 51, 58, 0.7), rgba(53, 51, 58, 0.7)) ,url(${slideImage.url})` }}>
                                <h2 className=" text-indigo-200 text-4xl text-center absolute font-bold py-9">{slideImage.title}</h2>
                                <h4 className=" text-indigo-200 text-2xl text-center absolute font-semibold py-7">{slideImage.caption}</h4>
                                <button className="absolute bottom-0 text-white my-10 bg-indigo-500 py-2 px-6 font-medium rounded-full border border-indigo-500  hover:border-white hover:bg-opacity-0">Go to Tour</button>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>

            {/* ==================================
                       Top Attraction
            =====================================*/}
            <div className="my-6">
                <h1 className="container mx-auto text-center text-4xl text-indigo-700 font-extrabold">Top Attractions in Bangladesh </h1>
                <p className="container mx-auto text-center text-base text-gray-600 font-medium">People like this place very much. You can try it..</p>
                <div className="container mx-auto grid grid-cols-2 gap-4 my-10">
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
                <div className="container mx-auto py-8">
                    <h2 className="text-gray-100 text-4xl font-bold text-center pt-4 tracking-wider">Your Adventure Partner</h2>
                    <p className="text-gray-100 text-medium font-semibold text-center py-4 tracking-wider">Anything You Like.There hava a lot of thing to choice.</p>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-4 bg-white py-6 rounded text-center">
                            <h3 className="text-gray-800 text-xl font-semibold py-1">Family Packs</h3>
                            <p className="text-gray-500 font-medium">Best Moment Wait</p>
                        </div>
                        <div className="col-span-4 bg-white py-6 rounded text-center">
                            <h3 className="text-gray-800 text-xl font-semibold py-1">Honeymoon Packs</h3>
                            <p className="text-gray-500 font-medium">Love After Marriage</p>
                        </div>
                        <div className="col-span-4 bg-white py-6 rounded text-center">
                            <h3 className="text-gray-800 text-xl font-semibold py-1">Special Packs</h3>
                            <p className="text-gray-500 font-medium">Holiday Special</p>
                        </div>
                        <div className="col-span-4 bg-white py-6 rounded text-center">
                            <h3 className="text-gray-800 text-xl font-semibold py-1">Adventure Activity</h3>
                            <p className="text-gray-500 font-medium">In Premium Plans</p>
                        </div>
                        <div className="col-span-4 bg-white py-6 rounded text-center">
                            <h3 className="text-gray-800 text-xl font-semibold py-1">Beach Activity</h3>
                            <p className="text-gray-500 font-medium">Day &amp; Night Activities</p>
                        </div>
                        <div className="col-span-4 bg-white py-6 rounded text-center">
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
                <div className="flex justify-center gap-6">
                    <div>
                        <img className=" " src="https://i.ibb.co/nQw8kyr/guide-1.png" alt="" />
                        <h4 className="text-center text-2xl text-gray-600 font-bold bg-gray-300 py-3 mb-3">Abdul Alim</h4>

                    </div>
                    <div>
                        <img className=" " src="https://i.ibb.co/j3GWQKQ/guide-2.png" alt="" />
                        <h4 className="text-center text-2xl text-gray-600 font-bold bg-gray-300 py-3 mb-3">Md Ibrahim</h4>
                    </div>
                    <div>
                        <img className=" " src="https://i.ibb.co/TKKXRrT/guide-3.png" alt="" />
                        <h4 className="text-center text-2xl text-gray-600 font-bold bg-gray-300 py-3 mb-3">Md Mosaddek</h4>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;