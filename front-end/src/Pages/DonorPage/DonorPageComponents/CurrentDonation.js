import "./CurrentDonation.css";
import { Container, Row, Col, Card} from "react-bootstrap";

const CurrentDonation = () => {
    return (
        <Container className="currentDonation_card">
            <Container className="cur_don_data">
                <Row>
                    <Col md={6} sm={12} className="cur_don_data_1 bord">
                        <h2 style={{textAlign:"center",color: "#761A19",marginBottom: "1rem"}}>
                            Receptor</h2>
                            <Container align="center" className="cur_don_data_1">
                        <Card.Body>Rubesh U</Card.Body>
                        <Card.Body>4 Units</Card.Body>
                        <Card.Body>Gov Hospital</Card.Body>
                        <Card.Body>Chennai</Card.Body>
                    </Container>
                    </Col>
                    <Col md={6} sm={12} className="cur_don_data_2">
                        <h2 style={{textAlign:"center",color: "#761A19"}}>
                            Contact
                        </h2>
                        <Container align="center" className="cur_don_data_2">
                        <Card.Body>8828432915</Card.Body>
                        <Card.Body>abc123@gmail.com</Card.Body>
                    </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    );
}

export default CurrentDonation;