import "./YourProfile.css";
import { Container, Image, Row ,Col} from "react-bootstrap";
import Button from "../../../Components/Button";
import {useDispatch,useSelector} from "react-redux";
import { clearState as clear, getDonorState ,logout} from "../../../helpers/donorSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {toast ,ToastContainer} from "react-toastify";
import {CircleLoader} from "react-spinners";
import {getActionState, getProfile} from "../../../helpers/actionSlice";

const YourProfile = () => {
    const dispatch = useDispatch();
    const {loginState,isLoggedIn,errorMsg} = useSelector(getDonorState);
    const {loading,error,success,donorProfile} = useSelector(getActionState);
    const navigate = useNavigate();
    const onLogoutClickHandler = () => {
        dispatch(logout());
    }

    useEffect(()=> {
        if(!isLoggedIn){
            navigate("/");
        }
    },[navigate,loginState,isLoggedIn]);

    useEffect(() => {
        if(errorMsg!==""){
            toast.error(errorMsg);
        }   
    },[errorMsg]);

    useEffect(()=> {
        dispatch(clear);
        dispatch(getProfile());
    },[dispatch]);

    return (
        <>
        {error!=="" && <Container className="profile_data">{error}</Container> }
        {loading && <Container className="d-flex flex-column align-items-center justify-content-center" style={{height: "500px",width: "500px"}}><CircleLoader color="#DB2F47" loading={true} size={100} /></Container>}
        {success && <Container className="profile_card">
            <ToastContainer />
            <Row>
                <Col lg={12} align="center">
                    <Image style={{width: "30%",borderRadius: "100%"}} fluid src={donorProfile.profileImg} />
                </Col>
            </Row>
            
            <h1 className="header" style={{textAlign:"center",color: "#761A19",marginBottom: "2rem"}}> {donorProfile.name}</h1>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1">
                        <Container> 
                        AGE
                        </Container>
                    </Col>
                    <Col align="center" className="profile_data_2">
                        {donorProfile.age}
                    </Col>
                </Row>
            </Container>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1"> 
                        Date of Birth
                    </Col>
                    <Col align="center" className="profile_data_2">
                        {donorProfile.dob}
                    </Col>
                </Row>
            </Container>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1"> 
                        Blood Group
                    </Col>
                    <Col align="center" className="profile_data_2">
                        {donorProfile.bloodGroup}
                    </Col>
                </Row>
            </Container>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1"> 
                        No of Donations
                    </Col>
                    <Col align="center" className="profile_data_2">
                        {donorProfile.donationNo}
                    </Col>
                </Row>
            </Container>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1"> 
                        Current eligibility
                    </Col>
                    <Col align="center" className="profile_data_2">
                        {donorProfile.eligibility}
                    </Col>
                </Row>
            </Container>

            <Container className="profile_data">
                <Row>
                    <Col align="center" className="profile_data_1"> 
                        City
                    </Col>
                    <Col align="center" className="profile_data_2">
                        {donorProfile.city}
                    </Col>
                </Row>
            </Container>
            {loginState==="pending" ? <Container className="d-flex justify-content-center mt-4"><CircleLoader color="#DB2F47" loading={true} /> </Container>  :  <Button on_click={onLogoutClickHandler} text="Logout"/>}
        </Container>}
        </>
    );
}

export default YourProfile;