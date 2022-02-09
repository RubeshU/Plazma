import Features from "./components/Features";
import Jumbotron from "./components/Jumbotron";
import WhoCanDonate from "./components/WhoCanDonate";
import Footer from "./components/Footer";

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