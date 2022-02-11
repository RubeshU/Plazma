import { Container,Row,Col } from "react-bootstrap";
import { Outlet,NavLink } from "react-router-dom";
import { BloodNavActive,BloodNavInActive} from "../../../Components/style";

const ReceptorSection = () => {
  return (
    <div style={{backgroundColor: "#FCEEF0",paddingBottom: "5rem"}}>
      <Container>
          <Row>
            <Col md={6} sm={6} align="center" style={{paddingTop: "5rem",paddingBottom: "2rem"}}>
              <NavLink
                to="receptor-request"
                style={({ isActive }) => {
                  return isActive ? BloodNavActive : BloodNavInActive;
                }}
              >Request For Blood</NavLink>
            </Col>
            <Col md={6} sm={6} align="center" style={{paddingTop: "5rem",paddingBottom: "2rem"}}>
            <NavLink
                to="receptor-status"
                style={({ isActive }) => {
                  return isActive ? BloodNavActive : BloodNavInActive;
                }}
              >Check Request Status</NavLink>
            </Col>
          </Row>
        <Outlet />
      </Container>
    </div>
  );
};

export default ReceptorSection;
