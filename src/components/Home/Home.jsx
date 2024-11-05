import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Heaven </title>
            </Helmet>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;