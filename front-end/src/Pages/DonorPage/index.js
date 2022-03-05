import { useEffect } from "react";
import BreadCrumb from "../LiveRequestsPage/LiveRequestComponents/BreadCrumb";
import DonorSection from "./DonorPageComponents/DonorSection";
import {getDonorState} from "../../helpers/donorSlice";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const DonorPage = () => {
    const {isLoggedIn} = useSelector(getDonorState);
    const navigate = useNavigate();
    useEffect(() => {
        if(!isLoggedIn){
            navigate("/");
        }
    },[isLoggedIn,navigate])
    return (
        <>
            <BreadCrumb title="Donor page" subtitle="The blood is red gold in time of saving a life"/>
            <DonorSection />
        </>
    );
}

export default DonorPage;