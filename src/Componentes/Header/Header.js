import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Elements";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "../../Images/Logo.png"
import "./Header.css"





function Header() {
  const navRef = useRef();



  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="sticky-top" >
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            <LogoContainer>
              Boris Caiza
            </LogoContainer>

            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <Menu open={showMobileMenu}>
              <div>
                <a href="/#aboutMe">
                  <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <a href="/#aboutMe" className="fuente_principal"> About me </a>
                    </MenuItemLink>
                  </MenuItem>
                </a>
              </div>
              <div>
                <a href="/#education">
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <a className="fuente_principal" href="/#education">Education and Experience</a>
                </MenuItemLink>
              </MenuItem>
              </a>
              </div>

              <div>
                <a href="/#skills">
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  
                    <a href="/#skills" className="fuente_principal">Skills</a>

                </MenuItemLink>
              </MenuItem>
              </a>
              </div>

              <div>
                <a href="/#projects">
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  
                    <a href="/#projects" className="fuente_principal">Projects</a>
                  
                </MenuItemLink>
              </MenuItem>
              </a>
              </div>
              <div>
                <a  href="/#contacto">
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                 
                    <a href="/#contacto" className="fuente_principal">Contact me</a>
                  
                </MenuItemLink>
              </MenuItem>
              </a>
              </div>


            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    </div>
  );
};



export default Header;