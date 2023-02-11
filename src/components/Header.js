import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

 function Header() {
  return (
    <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="no logo"
              src="https://clipground.com/images/restaurant-png-images.png"
              width="50"
              height="50"
              className="d-inline-block"
            />{' '}&nbsp;
           Where's My Hotel
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
