import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink, Link } from "react-router-dom"
const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary menu">
        <Container>
          <Navbar.Brand to="/">MalviyaPramod</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* <Nav.Link to="/">Reduces One</Nav.Link> */}
              
              <NavDropdown className="menu_dropdown" title="Use Reduces" id="navbarScrollingDropdown">
                <NavLink className="menu_items" to="/">Reduces One</NavLink>
                <NavLink className="menu_items" to="/reducer-two">Reduces Two</NavLink>
              </NavDropdown>
              <NavDropdown className="menu_dropdown" title="Context API" id="navbarScrollingDropdown">
                <NavLink className="menu_items" to="/contentapi-learning">Context API Learning</NavLink>
                <NavLink className="menu_items" to="/employee-list">Context API Crud</NavLink>
                <NavLink className="menu_items" to="/employee-items">Context Crud 1</NavLink>
              </NavDropdown>
            </Nav>
            <Form className="d-flex menu_right">
              <Link to="/sign-up" className='items_right'>Sing Up</Link> 
              <Link to="/sign-in">Sing In</Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent