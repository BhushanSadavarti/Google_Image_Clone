// src/components/ResultsPage/ImageResult.jsx
import React from "react";
import {
  ImageResultContainer,
  ResultTitle,
  ResultDescription,
  ResultImage,
} from "./styles";

const ImageResult = ({ result }) => {
  const { title, description, imageUrl } = result;

  return (
    <ImageResultContainer>
      <ResultImage src={imageUrl} alt={title} />
      <div>
        <ResultTitle>{title}</ResultTitle>
        <ResultDescription>{description}</ResultDescription>
      </div>
    </ImageResultContainer>
  );
};

export default ImageResult;
