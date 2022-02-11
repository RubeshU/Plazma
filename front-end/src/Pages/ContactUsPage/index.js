import Footer from "../HomePage/components/Footer";
import BreadCrumb from "../LiveRequestsPage/LiveRequestComponents/BreadCrumb";
import FeedBackSection from "./FeedBackSection";

const ContactUsPage = () => {
    return (
        <div>
            <BreadCrumb title="Feeback about your experience" subtitle="A Man Who Saves One Life Saves All Mankind"/>
            <FeedBackSection />
            <Footer />
        </div>
    );
}

export default ContactUsPage;