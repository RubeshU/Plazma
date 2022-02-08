import {Outlet} from "react-router-dom";
import WhoCanDonateNav from "./WhoCanDonateNav";
import { Container, Row } from "react-bootstrap";
import styles from "./WhoCanDonate.module.css";

const WhoCanDonate = () => {
  return (
    <div className="mt-5 mb-5">
      <div className={styles.heading}>To who you can donate?</div>
      <Container>
      <Row>
        <WhoCanDonateNav />
      </Row>
      <Outlet />
      </Container>      
    </div>
  );
};

export default WhoCanDonate;
