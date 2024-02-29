import { Link, NavLink } from "react-router-dom";
import { MdSportsSoccer } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import userImg from '../../assets/images/user.png'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li>
            <NavLink to='/'> Home </NavLink>
        </li>
        {
            user && <>
                <li>
                    <NavLink to='/services'> Services </NavLink>
                </li>
                <li>
                    <NavLink to='/carts'> My Carts </NavLink>
                </li>
            </>
        }
        <li>
            <NavLink to='/about'> About </NavLink>
        </li>
        <li>
            <NavLink to='/contact'> Contact Us </NavLink>
        </li>
        <li>
            <NavLink to='/login'> Login </NavLink>
        </li>
        <li>
            <NavLink to='/register'> Register </NavLink>
        </li>
    </>


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout Successfull")
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    // handle navbar background at scrolling
    const [navbarBgChange, setNavbarBgChange] = useState(false)

    const changeNavbarBg = () => {
        if (window.scrollY >= 200) {
            setNavbarBgChange(true)
        }
        else {
            setNavbarBgChange(false)
        }
    }
    window.addEventListener("scroll", changeNavbarBg)

    return (

        <div className={`${navbarBgChange ? 'bg-black pt-2 pb-3 shadow-custom' : 'bg-transparent'} sticky top-0 z-50`}>

            <div className='w-[90%] mx-auto'>
                <div className="navbar justify-between items-center z-10 ">
                    <div className="w-full lg:w-auto flex justify-between items-center">
                        <div className="dropdown order-2">
                            <label tabIndex={0} className="btn bg-transparent border-0 text-white lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 right-0 p-4 space-y-3">
                                {
                                    navLinks
                                }
                            </ul>
                        </div>
                        <div className="order-1">
                            <Link to='/'>
                                <p className="flex gap-1 items-center">
                                    <MdSportsSoccer className="text-4xl text-[#FBBD23]" />
                                    <span className="text-2xl font-bold lg:text-4xl text-[#FBBD23]">Sports Spirit</span>
                                </p>
                            </Link>
                        </div>

                    </div>
                    {/* profile mobile screen */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={`${user ? user.photoURL : userImg}`} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="flex flex-col dropdown-content mt-3 z-[1] p-2 py-3 shadow bg-base-100 rounded-box w-52">
                            {
                                user && <img className="w-16 h-16 mx-auto rounded-full" src={user.photoURL} />

                            }
                            {
                                user ?
                                    <li className="text-center text-xl font-bold my-3">
                                        <p>{user.displayName}</p>
                                        <p className="text-sm">{user.email}</p>
                                    </li>

                                    :

                                    ''
                            }
                            {
                                user ? <button
                                    onClick={handleLogOut}
                                    className="btn m-2 bg-[#FBBD23] text-black font-bold active:bg-[#FBBD23]">Logout</button>

                                    :
                                    <Link className="pr-3" to='/login'>
                                        <button className="btn w-full m-2 bg-[#FBBD23] text-black font-bold active:bg-[#FBBD23]">Login</button>
                                    </Link>
                            }
                            {/* <li><a>Settings</a></li>
                        <li><a>Logout</a></li> */}
                        </ul>
                    </div>
                    {/* prrofile end */}
                    <div className="hidden lg:flex">
                        <ul className="flex gap-8 text-[#fff] text-lg items-center">
                            {
                                navLinks
                            }
                            <li>
                                {/* profile lg screen */}
                                <div className="dropdown dropdown-end hidden lg:block">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={`${user ? user.photoURL : userImg}`} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="flex flex-col dropdown-content mt-3 z-[1] p-2 py-3 shadow bg-base-100 rounded-box w-52 text-black">
                                        {
                                            user && <img className="w-16 h-16 mx-auto rounded-full" src={user.photoURL} />

                                        }
                                        {
                                            user ?
                                                <li className="text-center text-xl font-bold my-3">
                                                    <p>{user.displayName}</p>
                                                    <p className="text-sm">{user.email}</p>
                                                </li>

                                                :

                                                ''
                                        }
                                        {
                                            user ? <button
                                                onClick={handleLogOut}
                                                className="btn m-2 bg-[#FBBD23] text-black font-bold active:bg-[#FBBD23]">Logout</button>

                                                :
                                                <Link className="pr-3" to='/login'>
                                                    <button className="btn w-full m-2 bg-[#FBBD23] text-black font-bold active:bg-[#FBBD23]">Login</button>
                                                </Link>
                                        }

                                        {/* <li><a>Settings</a></li>
                                    <li><a>Logout</a></li> */}
                                    </ul>
                                </div>
                                {/* prrofile end */}
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Navbar;