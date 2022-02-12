import "./YourProfile.css";
import ProfilePic from "../DonorAssets/ProfilePic.png";
import { Container, Image, Row ,Col} from "react-bootstrap";

const YourProfile = () => {
    return (
        <Container className="profile_card">
            <Row>
                <Col lg={12} align="center">
                    <Image fluid src={ProfilePic} />
                </Col>
            </Row>
            
            <h1 style={{textAlign:"center",color: "#761A19"}}> Sudarsan M S</h1>

            <Container className="profile_data">
                <Row>
                    <Col align="center"> 
                        AGE
                    </Col>
                    <Col align="center">
                        20
                    </Col>
                </Row>
            </Container>
            
        </Container>
    );
}

export default YourProfile;