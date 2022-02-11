import { Container, Form, Row, Col } from "react-bootstrap";
import Button from "../../../Components/Button";
import styles from "./CheckRequestStatus.module.css";
import { receptorInfo } from "../../../Data/BloodInfo";
import { useState } from "react";

const CheckRequestStatus = () => {

  const [isCheckClicked,setIsCheckClicked] = useState(false);  
  const onCheckHandler = () => {
      setIsCheckClicked(true);
    console.log("Check button clicked");
  };

  const statusStyle = `${
    receptorInfo[0].status === "URGENT" && styles.urgent
  } ${receptorInfo[0].status === "REGISTERED" && styles.registered}
  ${receptorInfo[0].status === "FULFILLED" && styles.fulfilled}  
  `;


  return (
    <Container className={`${styles.outer_card} mt-5 mb-5 px-5`}>
      <Row>
        <Col align="end" lg={10} className="mb-4">
          <Form.Control
            style={{ borderRadius: "30px", height: "125%" }}
            placeholder="Enter the receiptient reference number"
            className={styles.input}
          />
        </Col>
        <Col align="center" lg={2}>
          <Button text="Check" on_click={onCheckHandler} />
        </Col>
      </Row>
      {isCheckClicked && <Container className={styles.inner_card}>
        <Row>
          <Col align="center">Name :</Col>
          <Col align="center">{receptorInfo[0].name}</Col>
        </Row>
        <Row>
          <Col align="center">Age :</Col>
          <Col align="center">{receptorInfo[0].age}</Col>
        </Row>
        <Row>
          <Col align="center">Blood :</Col>
          <Col align="center">{receptorInfo[0].bloodType}</Col>
        </Row>
        <Row>
          <Col align="center">Date :</Col>
          <Col align="center">02/02/2022</Col>
        </Row>
        <Row>
          <Col align="center">Units :</Col>
          <Col align="center">{receptorInfo[0].units}</Col>
        </Row>
        <Row>
          <Col align="center">Hospital :</Col>
          <Col align="center">{receptorInfo[0].hospital}</Col>
        </Row>
        <Row>
          <Col align="center">Status :</Col>
          <Col align="center" className={statusStyle}>
            {receptorInfo[0].status}
          </Col>
        </Row>
      </Container>}
    </Container>
  );
};

export default CheckRequestStatus;
