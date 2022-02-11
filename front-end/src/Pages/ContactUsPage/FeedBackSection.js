import { useRef } from "react";
import { Container,Form } from "react-bootstrap";
import styles from "./FeedBackSection.module.css";

const FeedBackSection = () => {
    const feedBack = useRef('');
    const onSendClicked = () => {
        console.log("Send Button Clicked");
    }
    return (
        <div className={styles.bg}>
            <Container className={styles.feedback_container}>
                <div className={styles.heading}>Send your feedback and queries : </div>
                <div className="d-flex flex-column align-items-end">
                <Form.Control ref={feedBack} as="textarea" placeholder="Share your experience..." rows={10} style={{borderRadius: "30px",fontSize: "36px"}}/>
                <div className={styles.button_area} onClick={onSendClicked}>Send Feedback</div>
                </div>
            </Container>
        </div>
    );
}

export default FeedBackSection;