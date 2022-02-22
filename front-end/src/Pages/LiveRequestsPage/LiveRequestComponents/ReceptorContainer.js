import { useEffect } from "react";
import ReceptorRequestCard from "./ReceptorRequestCard";
import {useDispatch,useSelector} from "react-redux";
import {getReceptors} from "../../../helpers/receptorSlice";
import {CircleLoader} from "react-spinners";
import {getReceptorState} from "../../../helpers/receptorSlice";
import { Container } from "react-bootstrap";

const ReceptorContainer = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReceptors());
    },[dispatch]);

    const {receptors,listStatus} = useSelector(getReceptorState);

    return (
        <>
        {listStatus==="pending" && <Container className="d-flex flex-column align-items-center justify-content-center" style={{height: "500px",width: "500px"}}><CircleLoader color="#DB2F47" loading={true} size={100} /></Container> }
        {listStatus==="fulfilled" && <div style={{marginTop: "5rem",paddingBottom: "0.1rem"}}>
            {receptors.map((item) => <ReceptorRequestCard data={item} key={item._id}/> )}
        </div>}
        </>
    );
}

export default ReceptorContainer;