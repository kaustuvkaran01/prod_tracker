import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import styled from 'styled-components';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <Navbar color="dark" fixed="top" dark expand="md">
        <NavbarBrand href="/home">productivityTracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{ paddingLeft: "2rem" }}>
            <NavItem>
              <NavLink href="/workout">Workout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="dropdown link-text">
              <DropdownToggle nav caret>
                Blogs
              </DropdownToggle>
              <DropdownMenu left>
                <NavLink className="link-text" href="/blogs/self-help">
                  <DropdownItem>Motivation/Self-Help</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink className="link-text" href="/blogs/news">
                  <DropdownItem>Latest News</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink className="link-text" href="/blogs/something">
                  <DropdownItem>Something</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink className="link-text" href="/">
                  <DropdownItem>Reset</DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{ paddingRight: "5rem" }}>User Image</NavbarText>
        </Collapse>
      </Navbar>
      {/* <p>This is the navbar component</p> */}
    </NavbarContainer>
  );
}

export default NavbarComponent;

const NavbarContainer = styled.div`

    background: #5E81F4;
    .dropdown {
        background: #24231F;
      }
`;