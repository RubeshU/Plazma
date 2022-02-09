import BreadCrumb from "./LiveRequestComponents/BreadCrumb";
import ReceptorContainer from "./LiveRequestComponents/ReceptorContainer";
import Footer from '../../Pages/HomePage/components/Footer';

const LiveRequestsPage = () => {
    return (
        <div style={{backgroundColor: "#FDEFF1"}}>
            <BreadCrumb title="Blood Requests from receptors" subtitle="Excuses never save a life, Blood donation does"/>
            <ReceptorContainer />
            <Footer />
        </div>
    );
}

export default LiveRequestsPage;