import Features from "./components/Features";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import WhoCanDonate from "./components/WhoCanDonate";

const Home = () => {
    return (
        <div>
            <Jumbotron />
            <Features />
            <WhoCanDonate />
            <Footer />
        </div>
    );
}

export default Home;