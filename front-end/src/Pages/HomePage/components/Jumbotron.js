import { Container, Image,Col, Row } from "react-bootstrap";
import Button from "../../../Components/Button";
import JumbotronImg from "../HomeAssets/JumbotronImg.png";
import styles from "./Jumbotron.module.css";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { autoLogin, getDonorState } from "../../../helpers/donorSlice";
import { useEffect } from "react";

const Jumbotron = () => {
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(getDonorState);
    const navigate = useNavigate();
    const loginButtonHandler = () =>{
        if(localStorage.getItem("token")!==null){
            dispatch(autoLogin());
        }else{
            navigate("/login");
        }
    }
    const registerButtonHandler = () =>{
        navigate("/register");
    }

    useEffect(()=> {
          if(isLoggedIn){
              navigate("/donor/your-profile");
          }
    },[navigate,isLoggedIn]);

    return (
        <Container className={styles.jumbotron}>
            <Row>
            <Col lg={6} sm={12} className="mt-5 mb-5 d-flex flex-column justify-content-center"> 
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