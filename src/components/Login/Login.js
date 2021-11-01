import React from 'react';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const { loginUsingGoogle, setUser, setIsLoading } = useAuth();
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
            .finally(() => setIsLoading(false))
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-center my-10 font-mono">
                <div className="h-96 lg:w-2/4 xl:h-2/5 w-4/5 bg-white border border-gray-300 sm:p-20 px-5 py-20  rounded">
                    <h2 className=" text-gray-800 font-bold text-center text-3xl">Login With</h2>

                    {/* google login button */}
                    <div className="flex justify-center py-5">
                        <button onClick={handleGoogleLogin} className="border border-gray-400 px-5 py-3  rounded-full flex items-center hover:bg-gray-100 transition">
                            <img className="w-8 mr-2" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google icon" />
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;