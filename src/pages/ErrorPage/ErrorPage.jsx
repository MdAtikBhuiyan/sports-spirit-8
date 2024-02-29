import { Link, useLocation, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    // console.log(location.pathname);


    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4 text-center">

            <img src='https://i.ibb.co/fSLgY96/error.jpg' className="max-w-sm" alt="" />

            <div className="space-y-3 mt-4">

                <p className="text-2xl uppercase italic text-red-600 font-semibold">
                    {
                        error.status === 404 ? 'Page Not Found' : `${error.statusText}`
                    }
                </p>

                <p className="text-lg text-gray-300 italic">{error.data}</p>
                <div>
                    <Link to='/'>
                        <button className="btn my-4 text-red-600 font-bold px-6 py-4">Go to home</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;