import React from 'react'
import {Navbar, Nav, NavLink} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant='dark'>
      <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
      <Navbar.Collapse id='navbarScroll'>
        <Nav>
          <NavLink eventKey='1' as={Link} to='/'>Home</NavLink>
          <NavLink eventKey='2' as={Link} to='/signup'>Signup</NavLink>
          <NavLink eventKey='3' as={Link} to='/login'>Login</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
