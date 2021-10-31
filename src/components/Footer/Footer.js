import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-400">
            <div className=" container mx-auto flex justify-between">
                <div>
                    <h2 className="text-2xl font-semibold pt-2">Contact Info</h2>
                    <div>
                        <h4 className="text-gray-800 text-lg my-4">Email : TravelBD@gmail.com</h4>
                        <h4 className="text-gray-800 text-lg my-4">Phone : +8801#########</h4>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold pt-2">Follow Us</h2>
                    <div className="flex justify-between my-5">
                        <p className="w-10 p-2 border-2 rounded-full bg-gray-300 mr-2 hover:bg-gray-400">
                            <img className="w-full" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook" />
                        </p>
                        <p className="w-10 p-2 border-2 rounded-full bg-gray-300 mr-2 hover:bg-gray-400">
                            <img className="w-full" src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt="google" />
                        </p>
                        <p className="w-10 p-2 border-2 rounded-full bg-gray-300 mr-2 hover:bg-gray-400">
                            <img className="w-full" src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
                        </p>
                        <p className="w-10 p-2 border-2 rounded-full bg-gray-300 mr-2 hover:bg-gray-400">
                            <img className="w-full" src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
                        </p>
                    </div>
                </div>
                {/* <div>
                    <h2 className="text-2xl font-semibold pt-2">About Us</h2>
                </div> */}
                <div>
                    <h2 className="text-2xl font-semibold pt-2">Terms &amp; Conditions</h2>
                    <div>
                        <h4 className="text-gray-800 text-lg my-4">Payment Method</h4>
                        <h4 className="text-gray-800 text-lg my-4">Booking &amp; Cancellatin Policy</h4>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 text-white py-4">
                <div className="container mx-auto flex justify-between">
                    <p>Copyright &copy; 2021 TravelBD Ltd.</p>
                    <p>Developed by Mamun Ar Roshid</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;