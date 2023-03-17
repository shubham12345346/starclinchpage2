import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img from './images/download.png';

function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={img}
          width="150"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Container>
          <Navbar.Brand href="#home" style={{paddingLeft:'600px'}}>HELLO,NAME</Navbar.Brand>
        </Container>
    </Container>
  </Navbar>
  );
}

export default BasicExample;