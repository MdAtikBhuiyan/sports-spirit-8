import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const auth = getAuth();

const Register = () => {

    const { signUp, googleSignIn } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();

    const handleRegiter = (e) => {

        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        // clear error message
        setErrorMessage('')

        if (email && password && name && photo) {
            // client side validation
            if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
                // toast.error("password must have 6 character, one uppercase and one special character ");
                setErrorMessage("password must have 6 character, one uppercase and one special character ");
                return;
            }

            // createUser at firebase
            signUp(email, password)
                .then(res => {
                    console.log(res.user);
                    toast.success('Registration Successful');

                    // update display name and photo url
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photo,
                    })
                        .then(() => {
                            // toast.success('Registration Successful');
                            navigate('/');
                        })
                        .catch(err => {
                            setErrorMessage(err.message);
                        })

                })

                .catch(err => {
                    console.log(err);
                    setErrorMessage(err.message)
                })

            // form field clear
            e.target.reset()
        }

        else {
            if (!e.target.name.value) {
                setErrorMessage("please enter a name");
                e.target.name.focus()
            }
            else if (!e.target.photo.value) {
                setErrorMessage("please enter a photo url");
                e.target.photo.focus()
            }
            else if (!e.target.email.value) {
                setErrorMessage("please enter a email");
                e.target.email.focus()
            }
            else {
                setErrorMessage("please enter a password");
                e.target.password.focus()
            }

        }

    }

    // login with google
    const handleGoogleLogin = () => {

        // clear error message
        setErrorMessage('')

        googleSignIn()
            .then(res => {
                console.log(res.user);
                toast.success('Login Successful');
                navigate('/');
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
                                    <h2 className="text-[#FBBD23] text-3xl font-bold">Register an Account</h2>
                                </div>
                                <form onSubmit={handleRegiter}>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-[#FBBD23] focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            name="photo"
                                            placeholder="Photo URL"
                                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-[#FBBD23] focus-visible:shadow-none"
                                        />
                                    </div>
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
                                            value="Sign Up"
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
                                    <span className="pr-2">Already have a account?</span>
                                    <Link to='/login' className="text-primary hover:underline">
                                        Sign in
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




export default Register;