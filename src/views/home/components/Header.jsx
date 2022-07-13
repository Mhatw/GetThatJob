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
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 1px solid red;
  }
`;
export function Header() {
  return (
    <>
      <StyledHeader>
        <img src={Logo} alt="logo" />
        <div></div>
      </StyledHeader>
    </>
  );
}
