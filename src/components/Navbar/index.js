import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
  NavbarText
} from 'reactstrap';
import StyledWrapper from './StyledWrapper';
import SlickLogoIcon from '../../../assets/images/logo-icon.svg';
import SlickLogoText from '../../../assets/images/logo-text.svg';

const SlickNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledWrapper className="bg-light">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <SlickLogoIcon width="32px" className="logo-icon mr-2"/>
          <SlickLogoText width="72px" className="logo-text mr-4"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="mr-3">
              <NavLink href="#" className="active">Discover</NavLink>
            </NavItem>
            <NavItem className="mr-3">
              <NavLink href="#">Blog</NavLink>
            </NavItem>
            <NavItem className="mr-3">
              <NavLink href="#">Features</NavLink>
            </NavItem>
          </Nav>
          <div className="d-flex">
            <Input type="text" name="search" placeholder="Search" className="mr-2"/>
            <Button outline color="secondary">Search</Button>
          </div>
        </Collapse>
      </Navbar>
    </StyledWrapper>
  );
}

export default SlickNavbar;