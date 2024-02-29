import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import PropTypes from 'prop-types'


const ServiceCard = ({ service }) => {
    const { id, service_name, image, price, description } = service;

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div
            data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500"
            className="card bg-[#0a0905] shadow-2xl">
            <figure className="p-4 lg:p-6">
                <img src={image} className="rounded-xl h-48 lg:h-60 w-full" />
            </figure>
            <div className="card-body items-center text-center px-4 xl:px-8 pt-0">
                <h2 className="card-title text-xl xl:text-2xl font-bold text-[#FBBD23] mt-4">{service_name}</h2>
                <p className='text-gray-300 text-sm pt-3 pb-2'>
                    {
                        description.slice(0, 130)
                    }
                    <Link to={`/service/${id}`} className="ml-2 font-bold">
                        ... Read more
                    </Link>
                </p>

                <p className="text-white text-xl pb-3 md:pb-6">
                    <span className="text-[#FBBD23] font-bold">Price: </span> {price}$
                </p>


                <Link to={`/service/${id}`}>
                    <button className="btn bg-transparent text-white bg-[#FFF] px-6 py-2 h-auto rounded-full text-base capitalize hover:bg-[#FBBD23] hover:border-[#FBBD23] hover:text-black shadow-2xl">Service Details</button>
                </Link>
            </div>
        </div>
    );
};


ServiceCard.propTypes = {
    id: PropTypes.string.isRequired,
    service_name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ServiceCard;