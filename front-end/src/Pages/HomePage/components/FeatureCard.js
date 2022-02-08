import { Image,Col } from "react-bootstrap";
import styles from "./FeatureCard.module.css";

const FeatureCard = (props) => {
    return (
        <Col lg={4} sm={12} className={`d-flex flex-column align-items-center justify-content-between ${styles.feature_card}`}>
        <Image className={styles.image} src={require(`../HomeAssets/${props.imageUrl}`)} />
        <div className={styles.heading}>
            {props.heading}
        </div>
        <div className={styles.text}>
            {props.text}
        </div>
        </Col>
    );
}

export default FeatureCard;