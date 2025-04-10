import styled from "styled-components";

export const Container = styled.div`
  background-color: #202124;
  color: white;
  font-family: "Arial", sans-serif;
  padding: 20px 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-family: "Product Sans", sans-serif;
  margin-bottom: 20px;
`;

export const SearchBarWrapper = styled.div`
  background: #303134;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  height: 50px;
  max-width: 500px;
  gap: 10px;
  position: sticky;
  top: 25px;
  z-index: 999;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  outline: none;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  color: #b0b0b0;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const IconButtonRounded = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const SuggestionBox = styled.div`
  background-color: #303134;
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const SuggestionItem = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  color: #e8eaed;
  cursor: pointer;

  &:hover {
    background-color: #3c4043;
  }
`;

export const SuggestionText = styled.span`
  margin-left: 10px;
  font-size: 14px;
`;

export const SuggestionHeader = styled.div`
  padding: 0 15px 10px;
  color: #9aa0a6;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;
