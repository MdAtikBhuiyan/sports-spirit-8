import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const location = useLocation()
    
    const handleLogin = (e) => {

        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        // clear error message 
        setErrorMessage('')

        // sign in at firebase
        if (email && password) {
            signIn(email, password)
                .then(res => {
                    console.log(res.user);
                    toast.success('Login Successful');
                    navigate(location?.state ? location.state : '/')
                })
                .catch(err => {
                    console.log(err);
                   setErrorMessage(`${err.message}`)
                })

            // form field clear
            e.target.reset()
        }
        else {
            if (!e.target.email.value) {
                // toast.error("please enter a email ");
                setErrorMessage("please enter a email ")
                e.target.email.focus()
            }
            else {
                setErrorMessage("please enter a password ");
                e.target.password.focus()
            }
        }

    }

    // login with google
    const handleGoogleLogin = () => {
        setErrorMessage('')
        googleSignIn()
            .then(res => {
                console.log(res.user);
                toast.success('Login Successful');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err);
                setErrorMessage(err.message)
            })
    }


    return (
        <div>

            <section className="py-20">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-[#0a0905] py-16 px-10 text-center sm:px-12 md:px-[60px]"
                            >
                                <div className="mb-10 text-center md:mb-16">
                                    <h2 className="text-[#FBBD23] text-3xl font-bold">Login</h2>
                                </div>

                                <form onSubmit={handleLogin}>

                                    <div className="mb-6">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-[#FBBD23] focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-[#FBBD23] focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="submit"
                                            value="Sign In"
                                            className="bg-[#FBBD23] w-full cursor-pointer rounded-md py-3 px-5 text-base font-bold text-black transition hover:bg-opacity-90"
                                        />
                                    </div>
                                </form>

                                <p className="text-red-500 text-base text-center italic mb-6">{errorMessage}</p>

                                <p className="mb-4 text-base text-[#adadad]">Connect With</p>

                                <div className="mb-8 flex justify-center">
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="btn btn-outline border-0">
                                        <FcGoogle className="text-5xl" />
                                    </button>
                                </div>

                                <p className="text-base text-[#adadad]">
                                    <span className="pr-2">Do not have an account?</span>
                                    <Link to='/register' className="text-primary hover:underline">
                                        Sign Up
                                    </Link>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Login;