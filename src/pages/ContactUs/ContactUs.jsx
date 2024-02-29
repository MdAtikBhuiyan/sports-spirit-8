import { MdSportsSoccer } from "react-icons/md";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const ContactUs = () => {

    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className="bg-black py-14">

            <div className="w-[80%] mx-auto my-14">
                <div className="text-center">
                    <h4 className="text-3xl md:text-4xl font-bold text-[#FBBD23] text-center">Get In Touch With Us</h4>
                </div>

                <div className="flex flex-wrap mt-20">
                    <div
                        data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500"
                        className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 order-2 md:order-1">
                        <div className="mb-6">
                            <Link to='/'>
                                <p className="flex gap-1 items-center">
                                    <MdSportsSoccer className="text-4xl text-[#FBBD23]" />
                                    <span className="text-2xl font-bold lg:text-4xl text-[#FBBD23]">Sports Spirit</span>
                                </p>
                            </Link>
                        </div>
                        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                            We are here to assist you! If you have any questions, inquiries, or feedback, feel free to reach out. Our team is ready to respond promptly and provide the support you need. Your satisfaction is our priority, so do not hesitate to contact us today.
                        </p>
                        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                            Tangail, Dhaka, Bangladesh
                        </p>
                        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                            +88 017243473457634
                        </p>
                        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                            atik@gmail.com
                        </p>
                    </div>
                    <div
                     data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500"  
                    className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 order-1 md:order-2">
                        <form>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleInput90" placeholder="Name" />
                                <label
                                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Name
                                </label>
                            </div>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input type="email"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleInput91" placeholder="Email address" />
                                <label
                                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Email address
                                </label>
                            </div>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <textarea
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                                <label
                                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
                            </div>

                            <button type="button" data-te-ripple-init data-te-ripple-color="light"
                                className="btn w-full bg-[#FBBD23] border-[#FBBD23]">
                                Send
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;