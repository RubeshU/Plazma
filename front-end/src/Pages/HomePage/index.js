import Features from "./components/Features";
import Jumbotron from "./components/Jumbotron";
import WhoCanDonate from "./components/WhoCanDonate";

const Home = () => {
    return (
        <div>
            <Jumbotron />
            <Features />
            <WhoCanDonate />
        </div>
    );
}

export default Home;