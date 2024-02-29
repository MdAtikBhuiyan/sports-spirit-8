import { useEffect } from 'react';
import bg from '../../assets/images/cricket-bg.jpg'
import stadium from '../../assets/images/stadium-logo.png'
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Header = () => {

    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className="h-[100vh] bg-no-repeat bg-center bg-cover bg-fixed -mt-20" style={{ backgroundImage: `url(${bg})` }}>
            <div className="bg-[#070101af] h-full">

                <div
                    data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500"
                    className='h-full w-[90%] mx-auto pt-12 md:pt-0 text-center flex flex-col items-center justify-center gap-6'>
                    <img src={stadium} alt="stadium img" />
                    <h2 className='text-2xl md:text-4xl font-bold text-white'>Turning Sports Dreams into Reality</h2>
                    <p className='text-base text-gray-300 lg:w-3/5'>Mastering sports event orchestration, we blend precision and passion to create unforgettable athletic spectacles. From concept to execution, we ensure every moment on the field is a masterpiece. Elevate your sporting experience with our expert touch.</p>

                    <div className='flex flex-wrap gap-4 mt-4 justify-center'>

                        <Link to='/services'>
                            <button className="btn bg-transparent text-white border-[#FBBD23] font-bold px-10 py-3 h-auto rounded-full text-base capitalize hover:bg-[#FBBD23] hover:border-[#FBBD23] hover:text-black">Learn More</button>
                        </Link>
                        <Link to='/services'>
                            <button className="btn bg-transparent text-white border-[#FBBD23] font-bold px-10 py-3 h-auto rounded-full text-base capitalize hover:bg-[#FBBD23] hover:border-[#FBBD23] hover:text-black">Get Started</button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;