import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <form className="w-2/4 rounded bg-gray-200 py-14 px-20">
                    <h2
                        className="flex justify-center font-bold text-green-500 text-3xl pb-4"
                    >Please Register</h2>
                    <input
                        className="block w-full my-4 py-4 outline-none px-3 rounded"
                        type="text" placeholder="Full Name"
                    />
                    <input
                        className="block w-full my-4 py-4 outline-none px-3 rounded"
                        type="email" name="" id="" placeholder="Email"
                    />
                    <input
                        className="block w-full my-4 py-4 outline-none px-3 rounded"
                        type="date" name="" id="" placeholder="Date"
                    />
                    <input
                        className="block w-full my-4 py-4 outline-none px-3 rounded bg-green-500 text-white text-lg font-bold transition hover:bg-green-600"
                        type="submit" value="Register"
                    />
                    <h2 className="flex justify-center items-center text-gray-500">
                        Already have an account?
                        <Link
                            className="ml-3 border border-gray-500 rounded-full py-1 px-2 hover:bg-green-500 hover:text-white hover:border-transparent transition-all"
                            to="/login">Login
                        </Link>
                    </h2>
                </form>
            </div>
        </div>
    );
};

export default Register;