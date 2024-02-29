import { useEffect } from 'react';
import img1 from '../../assets/images/about-us-1.jpg';
import img3 from '../../assets/images/about-us-3.jpg';
import img4 from '../../assets/images/about-us-4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';


const AboutUS = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
            <section className="mt-24">
                <div className="w-[80%] mx-auto">
                    <div className="-mx-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-12">

                        <div
                            data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500"
                            className="w-full px-4 lg:w-6/12 order-2 lg:order-1">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={img1}
                                            alt=""
                                            className="w-full rounded-2xl md:h-[350px] object-cover"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={img3}
                                            alt=""
                                            className="w-full rounded-2xl md:h-[350px] object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src={img4}
                                            alt=""
                                            className="w-full rounded-2xl md:h-[350px] object-cover"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500"
                            className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="text-[#Fff] mb-2 block text-lg font-semibold">
                                    Why Choose Us
                                </span>
                                <h2 className=" text-[#FBBD23] mb-8 text-3xl font-bold sm:text-4xl">
                                    Make our customers happy by giving services.
                                </h2>
                                <p className="text-gray-300 mb-6 text-base">
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem Ipsum is that it has a more-or-less.
                                </p>
                                <p className="text-gray-300 mb-12 text-base">
                                    A domain name is one of the first steps to establishing your brand.
                                    Secure a consistent brand image with a domain name that matches your
                                    business.
                                </p>

                                <Link to='/services'>
                                    <button
                                        className="btn bg-transparent text-white border-[#FBBD23] font-bold px-10 py-3 h-auto rounded-full text-base capitalize hover:bg-[#FBBD23] hover:border-[#FBBD23] hover:text-black"
                                    >
                                        Get Started
                                    </button>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUS;