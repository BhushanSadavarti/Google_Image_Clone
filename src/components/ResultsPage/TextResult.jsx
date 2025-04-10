// src/components/ResultsPage/TextResult.jsx
import React from "react";
import {
  TextResultContainer,
  ResultTitle,
  ResultDescription,
  ResultLink,
} from "./styles";

const TextResult = ({ result }) => {
  const { title, description, imageUrl } = result;

  return (
    <TextResultContainer>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div>
        <ResultTitle>{title}</ResultTitle>
        <ResultLink>www.example.com/result</ResultLink>
        <ResultDescription>{description}</ResultDescription>
      </div>
    </TextResultContainer>
  );
};

export default TextResult;
