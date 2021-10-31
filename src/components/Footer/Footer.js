import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-400">
            {/* ============================
                    footer top
            ============================== */}
            <div className=" container mx-auto grid grid-cols-12 max-w-xs xl:max-w-5xl lg:max-w-4xl md:max-w-3xl">
                <div className="col-span-12 md:col-span-4 ">
                    <h2 className="text-2xl font-semibold pt-2">Contact Info</h2>
                    <div>
                        <h4 className="text-gray-800 text-lg my-4">Email : TravelBD@gmail.com</h4>
                        <h4 className="text-gray-800 text-lg my-4">Phone : +8801#########</h4>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4 ">
                    <h2 className="text-2xl font-semibold pt-2 ">Follow Us</h2>
                    <div className="grid grid-cols-12 my-5">
                        <p className="w-10 p-2 border-2 rounded-full bg-gray-300 mr-2 hover:bg-gray-400 col-span-2">
                            <img className="w-full" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook" />
                        </p>
                        <p className="w-10 p-2 border-2 rounded-full bg-gray-300 mr-2 hover:bg-gray-400 col-span-2">
                            <img className="w-full" src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt="google" />
                        </p>
                        <p className="w-10 p-2 border-2 rounded-full bg-gray-300 mr-2 hover:bg-gray-400 col-span-2">
                            <img className="w-full" src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
                        </p>
                        <p className="w-10 p-2 border-2 rounded-full bg-gray-300 mr-2 hover:bg-gray-400 col-span-2">
                            <img className="w-full" src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
                        </p>
                    </div>
                </div >
                <div className="col-span-12 md:col-span-4 ">
                    <h2 className="text-2xl font-semibold pt-2">Terms &amp; Conditions</h2>
                    <div>
                        <h4 className="text-gray-800 text-lg my-4">Payment Method</h4>
                        <h4 className="text-gray-800 text-lg my-4">Booking &amp; Cancellatin Policy</h4>
                    </div>
                </div>
            </div>
            {/* ============================
                    footer bottom
            ============================== */}
            <div className="bg-gray-700 text-white py-4">
                <div className="container mx-auto flex justify-around max-w-xs md:max-w-4xl">
                    <p>Copyright &copy; 2021 TravelBD Ltd.</p>
                    <p>Developed by Mamun Ar Roshid</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;