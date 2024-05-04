import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    return (
        <div className="mt-10">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;