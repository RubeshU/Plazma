import { useEffect, useRef, useState } from "react";
import { Container,Form } from "react-bootstrap";
import { CircleLoader } from "react-spinners";
import styles from "./FeedBackSection.module.css";
import {toast,ToastContainer} from "react-toastify";

const FeedBackSection = () => {
    const feedBack = useRef('');
    const [loading,setLoading] = useState();
    const [error,setError] = useState();
    const [success,setSuccess] = useState();


    const onSendClicked = async () => {
        if(feedBack.current.value===""){
            toast.error("could not send an empty feedback");
            return;
        }
      setLoading(true);
      setError(false);
      setSuccess(false);
      const response = await fetch("http://localhost:4000/plazma/auth/feedback", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback: feedBack.current.value }),
      });
      if (!response.ok) {
        await response.json().then((data) => {
            setSuccess(false);
            setLoading(false);
          setError(true);
        });
      }
      await response.json().then((data) => {
        setSuccess(true);
        setLoading(false);
        setError(false);
      });
    };

    useEffect(()=> {
        setError();
        setLoading();
        setSuccess();
    },[]);

    const contStyle = {
        fontSize: "4rem",
        padding: "5rem",
    };

    return (
        <>
        <ToastContainer />
        {loading && <Container   className="d-flex flex-column align-items-center justify-content-center" style={{height: "500px",width: "500px"}}><CircleLoader color="#DB2F47" loading={true} size={100} /></Container>}
        {success && <Container style={contStyle} className="d-flex flex-column align-items-center justify-content-center">Thank Your for your feedBack!</Container>}
        {error && <Container className="d-flex flex-column align-items-center justify-content-center">couldn't send feedback</Container>}
        {success!==true && <div className={styles.bg}>
            <Container className={styles.feedback_container}>
                <div className={styles.heading}>Send your feedback and queries : </div>
                <div className="d-flex flex-column align-items-end">
                <Form.Control ref={feedBack} as="textarea" placeholder="Share your experience..." rows={10} style={{borderRadius: "30px",fontSize: "36px"}}/>
                <div className={styles.button_area} onClick={onSendClicked}>Send Feedback</div>
                </div>
            </Container>
        </div>}
        </>
    );
}

export default FeedBackSection;