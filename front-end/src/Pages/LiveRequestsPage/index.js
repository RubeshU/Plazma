import BreadCrumb from "./LiveRequestComponents/BreadCrumb";
import ReceptorContainer from "./LiveRequestComponents/ReceptorContainer";

const LiveRequestsPage = () => {
    return (
        <div style={{backgroundColor: "#FDEFF1"}}>
            <BreadCrumb title="Blood Requests from acceptors" subtitle="Excuses never save a life, Blood donation does"/>
            <ReceptorContainer />
        </div>
    );
}

export default LiveRequestsPage;