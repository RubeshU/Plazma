import { Col } from "react-bootstrap";
import styles from  "./BloodListCard.module.css";

const BloodListCard = (props) => {
    return (
        <>
        <Col lg={4} sm={12}>
            <div className={styles.card_title}>{props.title}</div>
            <div className={styles.card_area}>
                {props.list.map((item) => <div className={styles.blood_name} key={item}>{item}</div> )}
            </div>
        </Col>
        </>
    );
}

export default BloodListCard;