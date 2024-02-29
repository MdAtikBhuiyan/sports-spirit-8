
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <Outlet />
            <Footer />

            
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme="light"
            />
        </div>
    );
};

export default Root;