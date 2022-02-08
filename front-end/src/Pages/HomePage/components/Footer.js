import styles from "./Footer.module.css";
import {Col,Row,Container,Image} from "react-bootstrap";
import FooterLogo from "../HomeAssets/FooterLogo.png";
import Facebook from "../HomeAssets/Facebook.png";
import Twitter from "../HomeAssets/Twitter.png";
import Instagram from "../HomeAssets/Instagram.png";
import Email from "../HomeAssets/Email.png";
import FooterCornerImage from "../HomeAssets/FooterCornerImage.png";
import {center} from "../../../Components/style";

const Footer = () =>{
    return (
        <div className={styles.footer_area}>
            <Container className={styles.footer_container}>
                <Row className={styles.footer_row}>
                    <Col md={12} lg={4} className="mb-5">
                    <Image style={center} src={FooterLogo} fluid/>
                    </Col>
                    <Col md={12} lg={4} className="mb-5">
                    <div className={styles.our_contact}>
                        <h1>Our Contact</h1>
                        <div className={styles.icon_list}>
                            <Image src={Facebook} fluid />
                            <Image src={Twitter} fluid />
                            <Image src={Instagram} fluid />
                            <Image src={Email} fluid />
                        </div>
                    </div>
                    </Col>
                    <Col md={12} lg={4} className="mb-5">
                    <Image style={center} src={FooterCornerImage} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;