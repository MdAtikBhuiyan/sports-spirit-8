import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Aos from "aos";
import 'aos/dist/aos.css'

import SportSlide from "./SportSlide";
import { Link } from "react-router-dom";


const SportsCategory = () => {

    const [sportsCategory, setSportsCategory] = useState(null);

    const [currentBanner, setCurrentBanner] = useState(null);

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch('/sports_category.json')
            .then(res => res.json())
            .then(data => {
                setSportsCategory(data);
                setLoading(false);
                setCurrentBanner(data[0])
            })

    }, [loading])

    const handleSlideChange = (swiper) => {
        const currentSports = sportsCategory?.find(sport => sport.id == swiper.realIndex + 1)
        setCurrentBanner(currentSports);
        // console.log(currentSports);
    }

    // const { img } = currentBanner || {};

    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <>

            <div className="h-full bg-no-repeat bg-center bg-cover z-0" style={{
                backgroundImage: `url(${currentBanner ?
                    currentBanner.img
                    :
                    (sportsCategory && sportsCategory[0].img)
                    }`
            }}>

                <div className="bg-[#24293ebf] h-full">

                    <div className="w-[80%] mx-auto ">

                        <div className="space-y-4 text-center py-20">
                            <h4 className="text-3xl md:text-4xl font-bold text-[#FBBD23] text-center">Our Sports Segment</h4>
                            <p className="text-gray-300 md:w-3/5 mx-auto">At sport spirit, we excel in sports event management. Our services encompass event planning, sponsorship procurement, and seamless logistics, ensuring your sporting event runs flawlessly. With our expertise, we transform your vision into a victorious reality</p>
                        </div>

                        <div className="h-full flex flex-col md:flex-row gap-10 items-center justify-center">

                            <div
                                data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500"
                                className="lg:w-2/5 space-y-4">

                                <h4 className="text-3xl md:text-4xl font-bold text-[#FBBD23] capitalize">
                                    {
                                        currentBanner ?
                                            currentBanner.sports_title
                                            :
                                            (sportsCategory && sportsCategory[0].sports_title)
                                    }
                                </h4>
                                <p className="text-gray-300 md:w-3/5 pb-6">
                                    {
                                        currentBanner ?
                                            currentBanner.description
                                            :
                                            (sportsCategory && sportsCategory[0].description)
                                    }
                                </p>

                                <Link to='/services'>
                                    <button
                                        className="btn bg-transparent text-white border-[#FBBD23] font-bold px-10 py-3 h-auto rounded-full text-base capitalize hover:bg-[#FBBD23] hover:border-[#FBBD23] hover:text-black mt-8">Get Started</button>
                                </Link>

                            </div>

                            <div
                                data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500"
                                className='w-full md:w-1/2 lg:w-3/5 h-[500px]'>
                                <Swiper

                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        }

                                    }}
                                    modules={[Navigation, Autoplay]}
                                    navigation={true}
                                    loop={true}
                                    // reversedirection={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                        reverseDirection: true
                                    }}
                                    slideToClickedSlide={true}
                                    onSlideChange={handleSlideChange}
                                    // onSwiper={(swiper) => console.log(swiper)}
                                    className="h-full"
                                >

                                    {
                                        sportsCategory?.map(sport => (
                                            <SwiperSlide key={sport.id}>
                                                <SportSlide sport={sport} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>

                        </div>

                    </div>



                </div>

            </div>

        </>
    );
};

export default SportsCategory;