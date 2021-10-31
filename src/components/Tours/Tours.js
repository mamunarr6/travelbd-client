import React from 'react';
import useAuth from '../../hooks/useAuth';
import Tour from './Tour/Tour';

const Tours = () => {
    const { tour } = useAuth();

    return (
        <div className="container mx-auto grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-4 my-10 max-w-xs lg:max-w-full md:max-w-4xl">
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
