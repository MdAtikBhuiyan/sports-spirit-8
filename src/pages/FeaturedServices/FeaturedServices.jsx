
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const FeaturedServices = () => {

    const [services, setServices] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])
    // console.log(services);

    return (
        <div id="service" className="w-[80%] mx-auto py-10">

            {
                loading ?
                    <div className="flex items-center justify-center mt-10 py-20">
                        <span className="loading loading-spinner w-14 text-white"></span>
                    </div>
                    :

                    <>
                        <div className="space-y-4 text-center my-14">
                            <h4 className="text-3xl md:text-4xl font-bold text-[#FBBD23] text-center">Our Provide Services</h4>
                            <p className="text-gray-300 md:w-3/5 mx-auto">At sport spirit, we excel in sports event management. Our services encompass event planning, sponsorship procurement, and seamless logistics, ensuring your sporting event runs flawlessly. With our expertise, we transform your vision into a victorious reality</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                            {
                                services?.map(service => (
                                    <ServiceCard key={service.id} service={service} />
                                ))
                            }
                        </div>
                    </>
            }


        </div>
    );
};

export default FeaturedServices;