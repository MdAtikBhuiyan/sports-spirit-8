import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div className="flex h-[70vh] items-center justify-center -mt-10">
            <span className="loading loading-spinner w-16 text-white"></span>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={location.pathname} />
};

export default PrivateRoute;