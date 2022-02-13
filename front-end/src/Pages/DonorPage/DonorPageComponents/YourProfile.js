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
            
            <h1 className="header" style={{textAlign:"center",color: "#761A19",marginBottom: "2rem"}}> Sudarsan M S</h1>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1">
                        <Container> 
                        AGE
                        </Container>
                    </Col>
                    <Col align="center" className="profile_data_2">
                        20
                    </Col>
                </Row>
            </Container>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1"> 
                        Date of Birth
                    </Col>
                    <Col align="center" className="profile_data_2">
                        01-01-2003
                    </Col>
                </Row>
            </Container>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1"> 
                        Blood Group
                    </Col>
                    <Col align="center" className="profile_data_2">
                        O Negative 
                    </Col>
                </Row>
            </Container>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1"> 
                        No of Donations
                    </Col>
                    <Col align="center" className="profile_data_2">
                        2
                    </Col>
                </Row>
            </Container>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1"> 
                        Current eligibility
                    </Col>
                    <Col align="center" className="profile_data_2">
                        Not Eligible
                    </Col>
                </Row>
            </Container>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1"> 
                        City
                    </Col>
                    <Col align="center" className="profile_data_2">
                        Chennai 
                    </Col>
                </Row>
            </Container>

        </Container>
        
    );
}

export default YourProfile;