import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/logo.png";

const StyledHeader = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  text-align: center;
  font-weight: bold;
  color: #333;
`;
export function Header() {
  return (
    <>
      <StyledHeader>
        <img src={Logo} alt="logo" />
        <h1>Header</h1>
      </StyledHeader>
    </>
  );
}
