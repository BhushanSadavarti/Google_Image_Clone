// src/components/ResultsPage/styles.js
import styled, { keyframes } from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
`;

export const ResultsHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #dfe1e5;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
   background-color: #202124;

  button {
    background: transparent;
    border: none;
    padding: 8px;
    margin-right: 8px;
    cursor: pointer;
    color: #5f6368;
  }

  /* Override the SearchBarContainer styles for the results page */
  form {
    flex: 1;
    max-width: none;
    margin-bottom: 0;
  }
`;

export const SearchImagePreview = styled.div`
  width: 100%;
  padding: 12px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dfe1e5;

  img {
    height: 80px;
    border-radius: 8px;
    object-fit: contain;
  }
`;

export const ResultsWrapper = styled.div`
height: 100vh;
 background-color: #202124;
  padding: 16px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingIndicator = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #4285f4;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 24px auto;
`;

export const ImageResultContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ebebeb;
  color: #ffffff
`;

export const TextResultContainer = styled.div`
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ebebeb;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    float: right;
    margin-left: 16px;
    margin-bottom: 8px;
  }
`;

export const ResultTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #fffff;
  margin: 0 0 4px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ResultDescription = styled.p`
  font-size: 14px;
  color: #4d5156;
  margin: 0;
  line-height: 1.58;
`;

export const ResultLink = styled.div`
  font-size: 12px;
  color: #202124;
  margin-bottom: 4px;
`;

export const ResultImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
`;
