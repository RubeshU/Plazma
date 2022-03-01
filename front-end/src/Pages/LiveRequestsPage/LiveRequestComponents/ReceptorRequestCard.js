import styles from "./ReceptorRequestCard.module.css";
import { Container, Row, Col, Image ,Card} from "react-bootstrap";
import CityIcon from "../LiveRequestAssets/CityIcon.png";
import AgeIcon from "../LiveRequestAssets/AgeIcon.png";
import HospitalIcon from "../LiveRequestAssets/HospitalIcon.png";

const ReceptorRequestCard = (props) => {
 
  const donateHandler = () => {
    
    props.donate(props.donorId,props.data.status);
  }
  return (
    <Container style={{marginTop: "4rem",marginBottom: "4rem"}}>
      <Container className={styles.border_one}>
        <Row>
          <Col lg={4} md={6} sm={6} align="center">
            <div className={styles.blood_type}> {props.data.bloodType} </div>
          </Col>
          <Col lg={4} md={6} sm={6} align="center">
            <div className={styles.receptor_name}> {props.data.name} </div>
          </Col>
          <Col lg={4} md={12} sm={12} align="center">
            <div className={`${styles.request_status} ${props.data.status==="URGENT" && styles.urgent} ${props.data.status==="REGISTERED" && styles.registered} ${props.data.status==="FULFILLED" && styles.fulfilled}`}>
              {props.data.status}
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={styles.border_two} style={{paddingBottom: "3rem"}}>
        <Row>
          <Col md={4} sm={6} xs={6} align="center">
            <Image fluid src={CityIcon} />
            <div className={styles.text}>{props.data.city}</div>
          </Col>
          <Col md={4} sm={6} xs={6} align="center">
            <Image fluid src={AgeIcon} />
            <div className={styles.text}>{props.data.age}</div>
          </Col>
          <Col md={4} sm={12} xs={12} align="center">
            <Image fluid src={HospitalIcon} />
            <div className={styles.text}>{props.data.hospital}</div>
          </Col>
        </Row>
        <Card id={styles.description}>
          <Card.Body>{props.data.description}</Card.Body>
        </Card>
        <Container className={styles.actions_container}>
            <Row>
                <Col>
                <div className={styles.unit_button}>
                   Units : {props.data.units}
                </div>
                </Col>
                <Col align="right">
                <div className={styles.donate_button} onClick={donateHandler}>
                    Donate
                </div>
                </Col>
            </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default ReceptorRequestCard;
