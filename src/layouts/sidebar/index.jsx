import React, { useState } from "react";
import styled from "styled-components";
import { FiHome, FiBarChart2, FiFileText, FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100% - 60px);
  background-color: #1F2029;
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 600px) {
    width: 60px;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-100%)"};
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: ${(props) => (props.active ? "#00aaff" : "white")}; /* Active color */
  position: relative;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => (props.active ? "4px" : "0")}; /* Active border */
    background-color: #00aaff;
    transition: width 0.3s;
  }

  &:hover {
    background-color: #444;
  }

  & > span {
    margin-left: 10px;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
  display: none;

  @media (max-width: 600px) {
    display: block;
    margin-left: 0;
    margin-right: auto;
    margin-top: 0;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 20px;
  margin-top: 20px;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

const LeftSidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close sidebar on navigation
  };

  return (
    <>
      <ToggleButton onClick={() => setMenuOpen((prev) => !prev)}>
        <FiMenu />
      </ToggleButton>
      <SidebarContainer open={menuOpen}>
        <CloseButton onClick={() => setMenuOpen(false)}>
          <FiX />
        </CloseButton>
        <MenuItem
          onClick={() => handleNavigation("/")}
          active={location.pathname === "/"}
        >
          <FiHome />
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigation("/analytics")}
          active={location.pathname === "/analytics"}
        >
          <FiBarChart2 />
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigation("/reports")}
          active={location.pathname === "/reports"}
        >
          <FiFileText />
        </MenuItem>
      </SidebarContainer>
    </>
  );
};

export default LeftSidebar;
