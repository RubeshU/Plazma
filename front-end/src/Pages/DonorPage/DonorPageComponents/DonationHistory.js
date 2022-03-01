import "./DonationHistory.css";
import { Container, Row ,Col} from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { clearState, getActionState, getHistory } from "../../../helpers/actionSlice";
import { useEffect } from "react";
import {CircleLoader} from "react-spinners";

const DonationHistory = () => {

    const dispatch = useDispatch();

    const {error,loading,success,donationHistory} = useSelector(getActionState);
    
    useEffect(() => {
        dispatch(clearState);
        dispatch(getHistory());
    },[dispatch]);

    return (
        <Container>
            {error && <Container style={{borderRadius: "5px",fontSize: "1.5rem", backgroundColor: "#FFFFFF",padding: "3rem",textAlign: "center"}}>{error}</Container>}
            {loading  && <Container className="d-flex flex-column align-items-center justify-content-center" style={{height: "500px",width: "500px"}}><CircleLoader color="#DB2F47" loading={true} size={100} /></Container>}
            {success && donationHistory.map((element) => <Container key={element._id} className="don_his_data">
                <Row>
                    <Col align="center" className="don_his_data_1"> 
                        <font color="#E5697B">Donated to: </font>{element.name}
                    </Col>
                    <Col align="center" className="don_his_data_2">
                        <font color="#E5697B">On: </font>{element.date.substring(0,10)}
                    </Col>
                    <Col align="center" className="don_his_data_3">
                        <font color="#E5697B">Units: </font>{element.units}
                    </Col>
                </Row>
            </Container> ) }
        </Container>

    );
}
// style={{color: "#E5697B"}}
export default DonationHistory;