import styles from "./RegisterPage.module.css";
import {Form, Image, Card, Container, Row, Col } from "react-bootstrap";
import Input from "../../../Components/Input";
import {  label, labelInput } from "../../../Components/style";
import Button from "../../../Components/Button";
import Logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import stylesIP from "../../../Components/Input.module.css";
import {toast ,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { donorValidate } from "./Donorvalidator";
import {useDispatch,useSelector} from "react-redux";
import {  clearState, getDonorState, register } from "../../../helpers/donorSlice";
import {CircleLoader} from "react-spinners";


const RegisterPage = () => {
  const navigate = useNavigate();
  const {isLoggedIn,errorMsg,registerState} = useSelector(getDonorState);
  const dispatch = useDispatch();
  const name = useRef("");
  const mobileNo = useRef("");
  const email = useRef("");
  const dob = useRef("");
  const bloodGroup = useRef("");
  const city = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  const getDonor = () => {
    return {
      name: name.current.value,
      mobileNo : mobileNo.current.value,
      email : email.current.value,
      dob: dob.current.value,
      bloodGroup: bloodGroup.current.value,
      city: city.current.value,
      password: password.current.value,
      profileImg : previewProfileFile,
      idImg: previewIdFile,
    }
  }

  const validate = () => {
    if(password.current.value !== confirmPassword.current.value){
      toast.error("please confirm your password!");
    }
    const donor = getDonor();
    const errors = donorValidate(donor);
    if(errors.length>0){
      errors.forEach(element => {
        toast.error(element);
      });
      return false;
    }
    return true;
  }

  const registerHandler = () => {
   if(validate()){
     const donor = getDonor();
    dispatch(register(donor));
   }    
  
  };


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
  useEffect(()=> {
    if(isLoggedIn){
      navigate("/donor/your-profile");
    }
    dispatch(clearState);
  },[isLoggedIn,navigate,dispatch]);

  useEffect(()=> {
    if(errorMsg!==""){
      toast.error("Error : "+errorMsg);
    }
  },[errorMsg]);

  return (
    
    <div className={styles.register_bg}>
      <ToastContainer />
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
                  ref={name}
                  input={{
                    type: "text",
                    placeholder: "your name",
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
                  ref={email}
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
                    type: "text",
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
            {registerState==="pending" && <Container className="d-flex justify-content-center mt-4"><CircleLoader color="#DB2F47" loading={true} /> </Container>}
          </Container>
        </Card>
      </Container>
    </div>
  );
};

export default RegisterPage;
