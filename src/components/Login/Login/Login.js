import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { loginUsingGoogle, setUser, user, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'

    //handle google login
    const handleGoogleLogin = () => {
        loginUsingGoogle()
            .then((result) => {
                setIsLoading(true)
                setUser(result.user)
                history.push(redirect_uri);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-center my-10 font-mono">
                <div className="h-96 w-2/5 bg-white border border-gray-300 p-20 rounded">
                    <h2 className=" text-gray-800 font-bold text-center text-3xl">Login With</h2>

                    {/* google login button */}
                    <div className="flex justify-center py-5">
                        <button onClick={handleGoogleLogin} className="border border-gray-400 px-5 py-3  rounded-full flex items-center hover:bg-gray-100 transition">
                            <img className="w-8 mr-2" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google icon" />
                            Continue with Google
                        </button>
                    </div>

                    {/* register link */}
                    <p className="flex justify-center items-center">
                        Don't have an account?
                        <Link to="/register" className="ml-2 bg-green-500 hover:bg-green-600 transition text-white border border-gray-400 px-2 py-1 rounded-full">Create</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;