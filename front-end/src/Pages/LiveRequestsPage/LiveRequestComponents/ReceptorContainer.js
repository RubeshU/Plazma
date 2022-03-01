import { useEffect } from "react";
import ReceptorRequestCard from "./ReceptorRequestCard";
import {useDispatch,useSelector} from "react-redux";
import {getReceptors} from "../../../helpers/receptorSlice";
import {CircleLoader} from "react-spinners";
import {getReceptorState} from "../../../helpers/receptorSlice";
import { Container } from "react-bootstrap";
import { clearState as clear, donate, getActionState } from "../../../helpers/actionSlice";
import {toast,ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import { getDonorState } from "../../../helpers/donorSlice";

const ReceptorContainer = () => {
    const {success,error,donationStatus} = useSelector(getActionState);
    const {isLoggedIn} = useSelector(getDonorState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clear());
        dispatch(getReceptors());
    },[dispatch]);

    const donateHandler = (donorId,status) => {
        if(isLoggedIn===false){
            toast.error("login or register to continue");
            return;
          }
          if(status!=="URGENT"){
            if(status==="REGISTERED"){
            toast.error("Receptor Already registerd with donor");
            return;
            }
            if(status === "FULFILLED"){
              toast.error("Receptor Request was fulfilled");
              return;
            }
          }
        dispatch(clear());
        dispatch(donate({donorId: donorId}));
    }

    const navigate = useNavigate();

    useEffect(()=> {
        if(success===true && donationStatus==="fulfilled"){
            navigate("/donor/current-donation");
        }
        dispatch(clear());
    },[success,dispatch,donationStatus,navigate]);

    useEffect(() => {
        if(error!==""){
            toast.error(error);
        }
    },[error])



    const {receptors,listStatus} = useSelector(getReceptorState);


    return (
        <>
        <ToastContainer />
        {listStatus==="pending" && <Container  className="d-flex flex-column align-items-center justify-content-center" style={{height: "500px",width: "500px"}}><CircleLoader color="#DB2F47" loading={true} size={100} /></Container> }
        {listStatus==="fulfilled" && <div style={{marginTop: "5rem",paddingBottom: "0.1rem"}}>
            {receptors.map((item) => {return <ReceptorRequestCard donate={donateHandler} donorId={item._id} data={item} key={item._id}/>; })}
        </div>}
        </>
    );
}

export default ReceptorContainer;