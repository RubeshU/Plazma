import "./DonationHistory.css";
import { Container, Row ,Col} from "react-bootstrap";

const DonationHistory = () => {
    return (
        <Container>
            <Container className="don_his_data">
                <Row>
                    <Col align="center" className="don_his_data_1"> 
                        <font color="#E5697B">Donated to: </font>Vignesh K
                    </Col>
                    <Col align="center" className="don_his_data_2">
                        <font color="#E5697B">On: </font>12/02/2021
                    </Col>
                    <Col align="center" className="don_his_data_3">
                        <font color="#E5697B">Units: </font>4
                    </Col>
                </Row>
            </Container>

            <Container className="don_his_data">
                <Row>
                    <Col align="center" className="don_his_data_1"> 
                        <font color="#E5697B">Donated to: </font>Rubesh U
                    </Col>
                    <Col align="center" className="don_his_data_2">
                        <font color="#E5697B">On: </font>30/6/2020
                    </Col>
                    <Col align="center" className="don_his_data_3">
                        <font color="#E5697B">Units: </font>6
                    </Col>
                </Row>
            </Container>

            <Container className="don_his_data">
                <Row>
                    <Col align="center" className="don_his_data_1"> 
                        <font color="#E5697B">Donated to: </font>Sudarsan M S
                    </Col>
                    <Col align="center" className="don_his_data_2">
                        <font color="#E5697B">On: </font>17/5/2019
                    </Col>
                    <Col align="center" className="don_his_data_3">
                        <font color="#E5697B">Units: </font>3
                    </Col>
                </Row>
            </Container>
        </Container>

    );
}
// style={{color: "#E5697B"}}
export default DonationHistory;