import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { searchData } from '../store-rtk/usersSlice';
import { useEffect } from 'react';


function NavTop() {

let[txt,setxt] = useState('')



let dispatch = useDispatch()

useEffect(()=>{
dispatch(searchData(txt))
},[txt])

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink style={{textDecoration:'none',fontSize:'22px'}}
            className='ms-2 '
            to="/">All-DATA</NavLink>
            <NavLink style={{textDecoration:'none',fontSize:'22px'}}
            className='ms-3'
            to="/create">Create</NavLink>
          </Nav>
        </Navbar.Collapse>
        <input type="text" className='form-control w-25' 
        value={txt}
        onChange={(e)=>setxt(e.target.value)}
        />
      </Container>
    </Navbar>
  )
}

export default NavTop