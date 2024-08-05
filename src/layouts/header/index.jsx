import React, { useState } from "react";
import styled from "styled-components";
import { FiBell, FiUser, FiSearch, FiMenu } from "react-icons/fi";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #1F2029;
  color: white;
  position: relative;

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const LeftPart = styled.div`
  display: flex;
  column-gap: 2em;
`;

const RightPart = styled.div``;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  padding: 5px 10px;
  width: 100%;
  max-width: 300px;

  @media (max-width: 600px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    background-color: white;
    z-index: 2;
    margin-top: 2%;
    margin-left: 2%;
  }
`;

const SearchIcon = styled(FiSearch)`
  color: #282c34;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 10px;
  width: 100%;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 20px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #282c34;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 100%;
    padding-top: 5%;
    padding-bottom: 3%;
    justify-content: flex-end;
  }
  @media (max-width: 360px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #282c34;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 100%;
    padding-top: 14%;
    justify-content: flex-start;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 601px) {
    display: none;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <LeftPart>
        <Logo>Logo</Logo>
        <SearchBar open={menuOpen}>
          <SearchIcon />
          <SearchInput placeholder="Search…" />
        </SearchBar>
      </LeftPart>
      <RightPart>
        <IconsContainer open={menuOpen}>
          <FiBell />
          <FiUser />
        </IconsContainer>
        <ToggleButton onClick={() => setMenuOpen((prev) => !prev)}>
          <FiMenu />
        </ToggleButton>
      </RightPart>
    </HeaderContainer>
  );
};

export default Header;
