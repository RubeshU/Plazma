import styles from "./LoginPage.module.css";
import Input from "../../../Components/Input";
import { useRef ,useEffect} from "react";
import { Container, Image, Card } from "react-bootstrap";
import Button from "../../../Components/Button";
import Logo from "../../../assets/Logo.png";
import { label } from "../../../Components/style";
import { useNavigate } from "react-router-dom";
import {toast ,ToastContainer} from "react-toastify";
import {useDispatch,useSelector} from "react-redux";
import { clearState, getDonorState, login } from "../../../helpers/donorSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {errorMsg,firstLog} = useSelector(getDonorState);
  const email = useRef("");
  const password = useRef("");
  const loginHandler = () => {
    const errors = [];
    if(email.current.value === ""){
      errors.push("Invalid email");
    }
    if(password.current.value === ""){
      errors.push("invalid password");
    }
    errors.forEach(element => {
      toast.error(element);
    });
    if(errors.length===0){
      dispatch(login({email: email.current.value,password: password.current.value}));
    }
  };

  useEffect(() => {
    if(firstLog==="fulfilled"){
      dispatch(clearState);
      navigate("/donor/your-profile");
    }
  },[firstLog,navigate,dispatch]);

  useEffect(() => {
    if(errorMsg!==""){
      toast.error(errorMsg);
    }
  },[errorMsg]);

  return (
    <>
      <div className={styles.login_bg}>
        <ToastContainer />
        <Container
          className={`d-flex flex-row align-items-center justify-content-center ${styles.login_container}`}
          id={styles.card_body}
        >
          <Card className={styles.login_card}>
            <Container>
              <div className="d-flex flex-column align-items-center">
                <Image fluid src={Logo} />
                <div className="m-3" style={label}>
                  Login to your account
                </div>
              </div>
              <Input
                ref={email}
                input={{
                  type: "text",
                  placeholder: "abcd@gmail.com",
                }}
              />
              <Input
                ref={password}
                input={{
                  type: "password",
                  placeholder: "********",
                }}
              />
              <div className="d-flex justify-content-end">
                <Button text="Login" on_click={loginHandler} />
              </div>
            </Container>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
