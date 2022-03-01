import { Container, Form, Row, Col } from "react-bootstrap";
import Button from "../../../Components/Button";
import styles from "./CheckRequestStatus.module.css";
import { receptorInfo } from "../../../Data/BloodInfo";
import { useEffect, useRef} from "react";
import {useDispatch,useSelector} from "react-redux";
import { checkStatus,clearState,getReceptorState } from "../../../helpers/receptorSlice";
import {CircleLoader} from "react-spinners";

const CheckRequestStatus = () => {
  const dispatch = useDispatch();

  const onCheckHandler = () => {
    dispatch(checkStatus(referenceId.current.value));
  };

  const {check,receptor} = useSelector(getReceptorState);

  const statusStyle = `${
    receptorInfo[0].status === "URGENT" && styles.urgent
  } ${receptorInfo[0].status === "REGISTERED" && styles.registered}
  ${receptorInfo[0].status === "FULFILLED" && styles.fulfilled}  
  `;

  const referenceId = useRef("");

  useEffect(()=> {
    dispatch(clearState);
  },[dispatch])

  return (
    <Container className={`${styles.outer_card} mt-5 mb-5 px-5`}>
      <Row>
        <Col align="end" lg={10} className="mb-4">
          <Form.Control
          ref={referenceId}
            style={{ borderRadius: "30px", height: "125%" }}
            placeholder="Enter the receiptient reference number"
            className={styles.input}
          />
        </Col>
        <Col align="center" lg={2}>
          <Button text="Check" on_click={onCheckHandler} />
        </Col>
      </Row>
      {check==="rejected" && <p style={{margin: "40px",fontSize: "20px",textAlign:"center"}}>{receptor}</p>}
      {check==="pending" && <Container className="d-flex justify-content-center mt-4"><CircleLoader color="#DB2F47" loading={true} /> </Container>}
      {check==="fulfilled" && <Container className={styles.inner_card}>
        <Row>
          <Col align="center">Name :</Col>
          <Col align="center">{receptor.name}</Col>
        </Row>
        <Row>
          <Col align="center">Age :</Col>
          <Col align="center">{receptor.age}</Col>
        </Row>
        <Row>
          <Col align="center">Blood :</Col>
          <Col align="center">{receptor.bloodType}</Col>
        </Row>
        <Row>
          <Col align="center">Date :</Col>
          <Col align="center">{receptor.date.substring(0,10)}</Col>
        </Row>
        <Row>
          <Col align="center">Units :</Col>
          <Col align="center">{receptor.units}</Col>
        </Row>
        <Row>
          <Col align="center">Hospital :</Col>
          <Col align="center">{receptor.hospital}</Col>
        </Row>
        <Row>
          <Col align="center">Status :</Col>
          <Col align="center" className={statusStyle}>
            {receptor.status}
          </Col>
        </Row>
      </Container>}
    </Container>
  );
};

export default CheckRequestStatus;
