import { Container, Row } from "react-bootstrap";
import FeatureCard from "./FeatureCard";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <div className={`${styles.features_area} d-flex flex-row align-items-center`}>
      <Container className={`${styles.features_area} d-flex flex-row align-items-center`}>
        <Row>
          <FeatureCard
            imageUrl="FeatureImg1.png"
            heading="Request for Blood"
            text="Request the needed blood type with an instant registration."
          />
           <FeatureCard
            imageUrl="FeatureImg2.png"
            heading="Donate Blood"
            text="Donate blood to your nearest acceptors and connect with them"
          />
          <FeatureCard
            imageUrl="FeatureImg3.png"
            heading="Get fulfilled"
            text="Get your preferred type of blood with your specified time."
          />
        </Row>
      </Container>
    </div>
  );
};

export default Features;
