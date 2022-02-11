import Footer from "../HomePage/components/Footer";
import BreadCrumb from "../LiveRequestsPage/LiveRequestComponents/BreadCrumb";
import ReceptorSection from "./ReceptorPageComponents/ReceptorSection";


const ReceptorPage = () => {
    return (
        <>
            <BreadCrumb title="Receptor Page" subtitle="Your droplets of blood may create an ocean of happiness"/>
            <ReceptorSection />
            <Footer />
        </>
    );
}

export default ReceptorPage;