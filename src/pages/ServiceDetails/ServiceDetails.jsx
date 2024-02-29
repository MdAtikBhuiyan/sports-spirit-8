import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getItemFromStorage, saveItemAtStorage } from "../../utilities/localStorage";
import { toast } from "react-toastify";


const ServiceDetails = () => {

    const { id } = useParams();
    const services = useLoaderData();

    const [singleService, setSingleService] = useState(null)

    useEffect(() => {
        const getService = services?.find(service => service.id == id)
        setSingleService(getService);
    }, [id, services])

    const { service_name, image, price, description } = singleService || {};


    // add cart item at local storage
    const handleCart = (serviceItem) => {
        const getItem = getItemFromStorage();
        const exist = getItem.find(item => item.id == id)

        if (!exist) {
            saveItemAtStorage(serviceItem);
            toast.success("Service item is successfully added in cart")
        }
        else {
            toast.error("Already this service item is exist")
        }
        // console.log('carts', serviceItem);
    }


    return (
        <div className="w-[80%] h-[80vh] mx-auto my-36">
            {
                singleService &&
                <div className="card md:w-3/5 mx-auto lg:card-side bg-[#0a0905] shadow-xl">
                    <figure className="lg:w-[100%]"><img src={image} className="h-full" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#FBBD23] text-3xl font-bold">{service_name}</h2>
                        <p className="text-gray-300">{description}</p>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg className="w-6 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-6 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-6 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-6 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-6 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>

                        <div className="flex items-center justify-between mt-10">
                            <h3 className="text-[#FBBD23] text-xl font-bold">Price: {price}$</h3>
                            <button
                                onClick={() => handleCart(singleService)}
                                className="btn bg-[#FBBD23] text-black border-[#FBBD23] font-bold px-10 py-3 h-auto rounded-full text-lg capitalize hover:bg-transparent hover:border-[#FBBD23] hover:text-white">Buy</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ServiceDetails;