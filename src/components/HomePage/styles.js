// src/components/HomePage/styles.js
import styled from "styled-components";

export const HomePageContainer = styled.div`
  background-color: #202124;
  min-height: 100vh;
  padding-bottom: 64px;

  header {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 24px 16px;
    flex: 1;
  }
`;

export const GoogleLogo = styled.div`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 32px;
  letter-spacing: -2px;

  .blue {
    color: #4285f4;
    padding-right: 2px;
  }
  .red {
    color: #ea4335;
    padding-right: 2px;
  }
  .yellow {
    color: #fbbc05;
    padding-right: 2px;
  }
  .green {
    color: #34a853;
    padding-right: 2px;
  }
`;

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 584px;
  height: 44px;
  border: 1px solid ${(props) => (props.focused ? "#4285f4" : "#dfe1e5")};
  border-radius: 24px;
  padding: 0 8px;
  box-shadow: ${(props) =>
    props.focused ? "0 1px 6px rgb(32 33 36 / 28%)" : "none"};
  transition: all 0.2s ease;
  margin-bottom: 24px;

  &:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 0 8px;
  color: #202124;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }

  ${(props) =>
    props.isActive &&
    `
    background-color: rgba(66, 133, 244, 0.1);
  `}
`;

export const SignInButton = styled.button`
  background-color: #1a73e8;
  color: white;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #1765cc;
  }
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  color: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FeedContainer = styled.div`
  width: 100%;
  max-width: 584px;
  margin-top: 16px;
  border-top: 1px solid #ebebeb;
  padding-top: 16px;
`;

export const FeedSection = styled.div`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #202124;
  margin-bottom: 12px;
`;

export const FeedItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  border-bottom: 1px solid #f1f3f4;

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const FeedImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 16px;
`;

export const FeedTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #202124;
  margin: 0;
`;
