import "./CurrentDonation.css";
import { Container, Row, Col} from "react-bootstrap";

const CurrentDonation = () => {
    return (
        <Container className="currentDonation_card">
            <Container className="cur_don_data">
                <Row>
                    <Col className="cur_don_data_1">
                        <h2 style={{textAlign:"center",color: "#761A19",marginBottom: "1rem"}}>
                            Receptor</h2>
                    </Col>
                    <Col className="cur_don_data_2">
                        <h2 style={{textAlign:"center",color: "#761A19",marginBottom: "1rem"}}>
                            Contact
                        </h2>
                    </Col>
                </Row>
            </Container>

            <Container className="cur_don_data">
                <Row>
                    <Col align="center" className="cur_don_data_1">
                        <p>Rubesh U</p>
                        <p>4 Units</p>
                        <p>Gov Hospital</p>
                        <p>Chennai</p>
                    </Col>
                    <Col align="center" className="cur_don_data_2">
                        <p>8828432915</p>
                        <p>abc123@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    );
}

export default CurrentDonation;