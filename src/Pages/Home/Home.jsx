import AboutUs from "./AboutUs";
import Banner from "./Banner";
import OurApp from "./OurApp";
import OurTeam from "./OurTeam";
import ReviewUs from "./ReviewUs";
import PopularService from "./Services/PopularService";

import WeOffer from "./WeOffer";
import OurPartners from "./ourPartners";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>

            <WeOffer></WeOffer>

            <PopularService></PopularService>
            
            <br />
            
            <OurApp></OurApp>  
            <br />
            <ReviewUs></ReviewUs>
            <OurTeam></OurTeam>
            <OurPartners></OurPartners>
        
        </div>
    );
};

export default Home;