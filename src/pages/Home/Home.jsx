
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import Header from "../Header/Header";
import SportsCategory from "../SportsCategory/SportsCategory";
import ContactUs from "../ContactUs/ContactUs";
import AboutUS from "../AboutUS/AboutUS";

const Home = () => {
    
    return (
        <div className="bg-black">
            <Header />
            <AboutUS />
            <FeaturedServices />
            <SportsCategory />
            <ContactUs />
        </div>
    );
};

export default Home;