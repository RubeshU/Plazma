import styles from "./RegisterPage.module.css";
import {Form, Image, Card, Container, Row, Col } from "react-bootstrap";
import Input from "../../../Components/Input";
import {  label, labelInput } from "../../../Components/style";
import Button from "../../../Components/Button";
import Logo from "../../../assets/Logo.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import stylesIP from "../../../Components/Input.module.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const registerHandler = () => {
    navigate("/live-requests");
  };
  const receptientName = useRef("");
  const mobileNo = useRef("");
  const email = useRef("");
  const dob = useRef("");
  const bloodGroup = useRef("");
  const city = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");


  const [previewProfileFile,setPreviewProfileFile] = useState(); 
  const onProfileFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewProfileFile(reader.result);
    }
  }

  const [previewIdFile,setPreviewIdFile] = useState(); 
  const onIdFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewIdFile(reader.result);
    }
  }
  

  return (
    <div className={styles.register_bg}>
      <Container
        className={`d-flex flex-row align-items-center justify-content-center ${styles.register_container}`}
        id={styles.card_body}
      >
        <Card className={styles.register_card}>
          <Container>
            <Container className="d-flex flex-column align-items-center">
              <Image fluid src={Logo} />
              <Container className="m-3" style={label}>
                Register as a donor
              </Container>
            </Container>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Name :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                  ref={receptientName}
                  input={{
                    type: "text",
                    placeholder: "receptient name",
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
                    placeholder: "987654321",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  E - Mail :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                  ref={email}
                  input={{
                    type: "text",
                    placeholder: "abcd@gmai.com",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Date of birth :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                  ref={dob}
                  input={{
                    type: "date",
                    style: {
                        color: "grey"
                    }
                  }}
                  placeholder="dd-mm-yyyy"
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
                <Form.Select ref={bloodGroup} className="mt-2" style={{color: "grey",width: "94%",marginLeft: "0.5rem"}}>
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
                    placeholder: "eg : Chennai"
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Password :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                  ref={password}
                  input={{
                    type: "password",
                    placeholder: "********",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Confirm Password :
                </Container>
              </Col>
              <Col md={6}>
                <Input
                  ref={confirmPassword}
                  input={{
                    type: "password",
                    placeholder: "********",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Your ID :
                </Container>
              </Col>
              <Col md={6} align="right">
                <div className={stylesIP.input}>
                <Form.Control type="file" onChange={onIdFileChange} />
                </div>
              </Col>
            </Row>
            <Container className="d-flex justify-content-end">{previewIdFile && <Image className="mb-4" style={{height: "30%",width: "30%",marginRight: "0.8 rem"}} src={previewIdFile} />}</Container>
            <Row>
              <Col md={6}>
                <Container className="mt-2" style={labelInput}>
                  Your Profile :
                </Container>
              </Col>
              <Col md={6} align="right">
                <div className={stylesIP.input}>
                <Form.Control type="file" onChange={onProfileFileChange} />
                </div>
              </Col>
            </Row>
            <Container className="d-flex justify-content-end"> {previewProfileFile && <Image className="mb-4" style={{height: "30%",width: "30%",marginRight: "0.8 rem"}} src={previewProfileFile} />}</Container>
           
            <Container className="d-flex justify-content-end">
              <Button text="Register" on_click={registerHandler} />
            </Container>
          </Container>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default RegisterPage;
