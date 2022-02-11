import styles from "./ReceptorRequestForm.module.css";
import { Container, Card, Row, Col, Image,Form } from "react-bootstrap";
import Logo from "../../../assets/Logo.png";
import Input from "../../../Components/Input";
import { labelInput } from "../../../Components/style";
import { useRef, useState } from "react";
import Button from "../../../Components/Button";

const ReceptorRequestForm = () => {
  const name = useRef();  
  const age = useRef();
  const bloodGroup = useRef();
  const city = useRef();
  const hospitalName = useRef();
  const noOfUnits = useRef();
  const mobileNo = useRef();
  const mailId = useRef();
  const conditionOfThePatient = useRef();
  const [isReqButtonClicked,setIsReqButtonClicked] = useState(false);

  const requestHandler = () => {
      console.log("Request button clicked");
      setIsReqButtonClicked(true);
  }

  return (
    <Container className="mt-3">
      <Container
        className={`d-flex flex-row align-items-center justify-content-center `}
        id={styles.card_body}
      >
        <Card className={styles.receptor_ip_card}>
            {isReqButtonClicked && <div style={{color: "grey"}}>Your Receptor ID is : #DJKJ122DJ (Note this to check status for further) </div>} 
          {!isReqButtonClicked && <Container>
            <Container className="d-flex flex-column align-items-center">
              <Image fluid src={Logo} />
            </Container>
            <Row className="mt-3">
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Name :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                ref={name}
                  input={{
                    type: "text",
                    placeholder: "receptor name",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Age :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                ref={age}
                  input={{
                    type: "text",
                    placeholder: "receptor age ex: 27",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Blood Group :
                </Container>
              </Col>
              <Col md={6}>
                <Form.Select ref={bloodGroup} className="mt-2" style={{color: "grey",width: "96%",marginLeft: "0.5rem"}}>
                  <option>O POSITIVE</option>
                  <option>O NEGATIVE</option>
                  <option>A POSITIVE</option>
                  <option>A NEGATIVE</option>
                  <option>B POSITIVE</option>
                  <option>B NEGATIVE</option>
                  <option>AB POSITIVE</option>
                  <option>AB NEGATIVE</option>
                </Form.Select>
             </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  City :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                ref={city}
                  input={{
                    type: "text",
                    placeholder: "ex: Chennai",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Hospital Name :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                ref={hospitalName}
                  input={{
                    type: "text",
                    placeholder: "hospital name",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  No of Units Needed :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                ref={noOfUnits}
                  input={{
                    type: "number",
                    min: "1",
                    max: "10",
                    placeholder: "1",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Mobile No :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                ref={mobileNo}
                  input={{
                    type: "text",
                    placeholder: "9876543210",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Mail ID :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                ref={mailId}
                  input={{
                    type: "text",
                    placeholder: "abcd@gmail.com",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Condition Of the Patient :
                </Container>
              </Col>
              <Col md={6} className="mt-2">
              <Form.Control ref={conditionOfThePatient} as="textarea" placeholder="a breif description about receptient medical condition....." rows={5} style={{color: "grey",width: "96%",marginLeft: "0.5rem"}}/>
              </Col>
            </Row>
            <Container className="d-flex justify-content-end mt-5">
              <Button text="Request" on_click={requestHandler} />
            </Container>
          </Container>}
        </Card>
      </Container>
    </Container>
  );
};

export default ReceptorRequestForm;
