// src/components/ResultsPage/ResultsPage.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../HomePage/SearchBar/SearchBar";
import ImageResult from "./ImageResult";
import TextResult from "./TextResult";
import {
  ResultsContainer,
  ResultsHeader,
  SearchImagePreview,
  ResultsWrapper,
  LoadingIndicator,
} from "./styles";
import { ArrowLeft } from "lucide-react";

const ResultsPage = () => {
  const { searchTerm, searchImage, results, loading } = useContext(AppContext);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleImageSearch = () => {
    navigate("/lens");
  };

  return (
    <ResultsContainer>
      <ResultsHeader>
        <button onClick={handleBack}>
          <ArrowLeft size={20} />
        </button>

        <SearchBar
          onImageSearchClick={handleImageSearch}
          placeholder="Search Google"
        />
      </ResultsHeader>

      {searchImage && (
        <SearchImagePreview>
          <img src={searchImage} alt="Search" />
        </SearchImagePreview>
      )}

      <ResultsWrapper>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            {results.length > 0 ? (
              results.map((result) =>
                searchImage ? (
                  <ImageResult key={result.id} result={result} />
                ) : (
                  <TextResult key={result.id} result={result} />
                )
              )
            ) : (
              <p>No results found. Try a different search.</p>
            )}
          </>
        )}
      </ResultsWrapper>
    </ResultsContainer>
  );
};

export default ResultsPage;
