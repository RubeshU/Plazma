import {Navbar,Nav,Container,Button,Image} from 'react-bootstrap';
import Logo from './assets/Logo.png';

const NavigationBar = () => {
  return (
    <Navbar
        fixed="top"
          collapseOnSelect
          expand="lg"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <Image fluid src={Logo}></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link >My Posts</Nav.Link>
                <Nav.Link href="/NewPost">New Post</Nav.Link>
              </Nav>
              <Button variant="warning">
                Log out
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
};

export default NavigationBar;