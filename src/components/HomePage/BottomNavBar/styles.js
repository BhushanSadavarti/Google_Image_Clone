import styled from "styled-components";

export const BottomBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #2d2e30;
  padding: 10px 0 20px;
  border-top: 1px solid #3a3a3a;
  z-index: 1000;
`;

export const NavIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #ccc;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    color: #8ab4f8; // Active state for Home
  }
`;
