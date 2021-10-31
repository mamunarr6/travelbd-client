import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';
import Tour from './Tour/Tour';

const Tours = () => {
    const { tour } = useAuth();

    return (
        <div className="container mx-auto grid grid-cols-2 gap-4 my-10">
            {
                tour?.map(t => <Tour
                    key={t._id}
                    tour={t}
                ></Tour>)
            }
        </div>
    );
};

export default Tours;


// https://i.ibb.co/x5mQ6Tp/Sonargaon.jpg
// https://i.ibb.co/T07gFt9/Khagrachari-768x484.png
// https://i.ibb.co/BscBHPx/ahsan-manzil.png
