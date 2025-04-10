import styled from "styled-components";

export const Container = styled.div`
  background: #202124;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: Arial, sans-serif;
`;

export const LeftIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const SearchSwitcher = styled.div`
  display: flex;
  align-items: center;
  background: #303134;
  border-radius: 20px;
  padding: 5px 10px;
  gap: 10px;
`;

export const SwitchButton = styled.button`
  background: ${({ active }) => (active ? "#3c4043" : "transparent")};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 14px;
`;

export const UserIcon = styled.div`
  background: #8ab4f8;
  color: black;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background: #202124;
  border-radius: 10px;
  width: 300px;
  padding: 15px;
  color: white;
  z-index: 9999;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DropdownItem = styled.div`
  padding: 10px 0;
  border-top: 1px solid #3c4043;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 10px;
  border-top: 1px solid #3c4043;
  padding-top: 10px;
`;
