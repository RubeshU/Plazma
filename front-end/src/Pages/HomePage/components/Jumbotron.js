import { Container, Image,Col, Row } from "react-bootstrap";
import Button from "../../../Components/Button";
import JumbotronImg from "../HomeAssets/JumbotronImg.png";
import styles from "./Jumbotron.module.css";

const Jumbotron = () => {
    const loginButtonHandler = () =>{
        console.log("Login Button Clicked");
    }
    const registerButtonHandler = () =>{
        console.log("Register Button Clicked");
    }
    return (
        <Container className={styles.jumbotron}>
            <Row>
            <Col lg={6} sm={12} className="d-flex flex-column justify-content-center"> 
            <h1>Sharing The Blood Of Your Life</h1>
            <div className="d-flex mt-4">
            <Button on_click={loginButtonHandler} text="Login" />
            <div className={`${styles.vertical_line} ms-4 me-4`}></div>
            <Button on_click={registerButtonHandler} text="Register" />        
            </div>
            </Col>
            <Col lg={6} sm={12}>
            <Image fluid src={JumbotronImg} />
            </Col>
            </Row>
        </Container>
    );
}

export default Jumbotron;