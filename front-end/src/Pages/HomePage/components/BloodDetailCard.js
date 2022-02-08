import { Row, Col, Image } from "react-bootstrap";
import { center } from "../../../Components/style";
import ArrowIcon from "../HomeAssets/ArrowIcon.png";
import BloodListCard from "./BloodListCard";
import styles from "./BloodDetailCard.module.css";

const BloodDetailCard = (props) => {
  return (
    <>
    <Row className="mt-5 d-flex flex-row align-items-center justify-content-center align-items-center">
      <BloodListCard title="Give to" list={props.data.giveTo}/>
      <Col lg={4} sm={12}>
        <Image className={styles.image} style={center}  fluid src={ArrowIcon} />
      </Col>
      <BloodListCard title="Receive From" list={props.data.receiveFrom}/>
    </Row>
    </>
  );
};

export default BloodDetailCard;
