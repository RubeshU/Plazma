import styles from "./LoginPage.module.css";
import Input from "../../../Components/Input";
import { useRef } from "react";
import { Container, Image, Card } from "react-bootstrap";
import Button from "../../../Components/Button";
import Logo from "../../../assets/Logo.png";
import { label } from "../../../Components/style";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");
  const loginHandler = () => {
    console.log("Login Handler Clicked");
    navigate("/live-requests");
  };

  return (
    <>
      <div className={styles.login_bg}>
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
