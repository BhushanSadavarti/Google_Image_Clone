import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { SearchBarContainer, SearchInput, IconButton } from "./styles";
import { Camera, Mic, Search, X } from "lucide-react";
import useVoiceInput from "../../hooks/useVoiceInput";

const SearchBar = ({ placeholder, onImageSearchClick }) => {
  const { searchTerm, setSearchTerm, performSearch } = useContext(AppContext);
  const [inputFocused, setInputFocused] = useState(false);
  const navigate = useNavigate();

  const { isListening, startListening, stopListening, transcript } =
    useVoiceInput(setSearchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      performSearch(searchTerm);
      navigate("/results");
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <SearchBarContainer focused={inputFocused} onSubmit={handleSubmit}>
      <IconButton type="button">
        <Search size={20} color="#5f6368" />
      </IconButton>

      <SearchInput
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />

      {searchTerm && (
        <IconButton type="button" onClick={clearSearch}>
          <X size={20} color="#5f6368" />
        </IconButton>
      )}

      <IconButton
        type="button"
        onClick={isListening ? stopListening : startListening}
        isActive={isListening}
      >
        <Mic size={20} color={isListening ? "#4285f4" : "#5f6368"} />
      </IconButton>

      <IconButton type="button" onClick={onImageSearchClick}>
        <Camera size={20} color="#5f6368" />
      </IconButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
