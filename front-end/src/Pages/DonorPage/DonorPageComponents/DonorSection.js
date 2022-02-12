import { Outlet,NavLink } from "react-router-dom";
import { BloodNavActive,BloodNavInActive} from "../../../Components/style";
import { Container,Row,Col } from "react-bootstrap";

const DonorSection = () => {
    return (
        <div style={{ backgroundColor: "#FCEEF0" ,padding: "5rem"}}>
            <Container className="pb-5">
                <Row>
                    <Col md={6} sm={12} lg={4} align="center" style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
                        <NavLink
                            to="your-profile"
                            style={({ isActive }) => {
                                return isActive ? BloodNavActive : BloodNavInActive;
                            }}
                        >Your Profile</NavLink>
                    </Col>
                    <Col md={6} sm={12} lg={4} align="center" style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
                        <NavLink
                            to="current-donation"
                            style={({ isActive }) => {
                                return isActive ? BloodNavActive : BloodNavInActive;
                            }}
                        >Current Donation</NavLink>
                    </Col>
                    <Col md={12} sm={12} lg={4} align="center" style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
                        <NavLink
                            to="donation-history"
                            style={({ isActive }) => {
                                return isActive ? BloodNavActive : BloodNavInActive;
                            }}
                        >Donation History</NavLink>
                    </Col>
                </Row>
            </Container>
            <Outlet />
        </div>
    );
}

export default DonorSection;