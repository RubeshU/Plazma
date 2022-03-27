import "./CurrentDonation.css";
import { Container, Row, Col, Card} from "react-bootstrap";
import Button from "../../../Components/Button";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { clearState, confirm, getActionState, getCurrentDonation } from "../../../helpers/actionSlice";
import {CircleLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";

const CurrentDonation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentDonation,loading,error,success,confirmStatus} = useSelector(getActionState);
    const confirmDonation = () => {
        dispatch(confirm());
    }
    useEffect(()=> {
        dispatch(clearState());
        dispatch(getCurrentDonation({dum: "HI"}));
    },[dispatch]);

    useEffect(()=> {
        if(confirmStatus === "success"){
            navigate("/donor/donation-history");
        }
    },[confirmStatus,navigate]);

    return (
        <>
        {error!==""  && <Container className="currentDonation_card">{error}</Container>}
        {loading===true && <Container className="d-flex flex-column align-items-center justify-content-center" style={{height: "500px",width: "500px"}}><CircleLoader color="#DB2F47" loading={true} size={100} /></Container>}
        {success &&  <Container>
        <Container className="currentDonation_card">
            <Container className="cur_don_data">
                <Row>
                    <Col md={6} sm={12} className="cur_don_data_1 bord">
                        <h2 style={{textAlign:"center",color: "#761A19",marginBottom: "1rem"}}>
                            Acceptor</h2>
                            <Container align="center" className="cur_don_data_1">
                        <Card.Body>{currentDonation.name}</Card.Body>
                        <Card.Body>{currentDonation.units}</Card.Body>
                        <Card.Body>{currentDonation.hospital}</Card.Body>
                        <Card.Body>{currentDonation.city}</Card.Body>
                    </Container>
                    </Col>
                    <Col md={6} sm={12} className="cur_don_data_2">
                        <h2 style={{textAlign:"center",color: "#761A19"}}>
                            Contact
                        </h2>
                        <Container align="center" className="cur_don_data_2">
                        <Card.Body>{currentDonation.mobileNo}</Card.Body>
                        <Card.Body>{currentDonation.mail}</Card.Body>
                    </Container>
                    </Col>
                </Row>
            </Container>
           
        </Container>
        <Container className="d-flex justify-content-center mt-4">
         <Button on_click={confirmDonation} text="Donated" />
         </Container>
         </Container>}
         </>
    );
}

export default CurrentDonation;