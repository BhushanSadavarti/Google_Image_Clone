import React, { useState, useContext, useEffect } from "react";
import { FiMic, FiCamera } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { LuFileSearch } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosMusicalNote } from "react-icons/io";
import { WiTime4 } from "react-icons/wi";
import { MdTranslate, MdPhotoLibrary } from "react-icons/md";
import {
  Container,
  Logo,
  SearchBarWrapper,
  SearchInput,
  IconButton,
  IconsWrapper,
  IconButtonRounded,
  SuggestionBox,
  SuggestionItem,
  SuggestionText,
  SuggestionHeader,
  MicScreenWrapper,
  DotContainer,
  Dot,
  MicText
} from "./styles";
import FeedList from "../RealTimeFeed/FeedList/FeedList";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import useVoiceInput from "../../../hooks/useVoiceInput";

const SearchBar = ({ onImageSearchClick }) => {
  const suggestions = [
    "sleeveless gilet jacket men india",
    "sequins skirt less than 2000",
    "cut out bodysuit india",
    "floral crop top",
    "black leather skirt with button",
    "neon shirt",
    "oversized women's leather jacket india",
  ];
  const { searchTerm, setSearchTerm, performSearch } = useContext(AppContext);
  const [inputFocused, setInputFocused] = useState(false);
  const navigate = useNavigate();

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
);

const { isListening, startListening, stopListening, transcript } =
  useVoiceInput(setSearchTerm);
  const [isMicOpen, setIsMicOpen] = useState(false);
  const [micState, setMicState] = useState(isListening ? 'listening' : 'tap');
  const [isListen, setIsListen] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      performSearch(searchTerm);
      navigate("/results");
    }
  };

  useEffect(() => {
    if (isMicOpen) {
      setMicState(isListening ? 'listening' : 'tap');
      setIsListen(true);

      const timer = setTimeout(() => {
        setMicState('tap');
        setIsListen(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isMicOpen]);

  // const clearSearch = () => {
  //   setSearchTerm("");
  // };

  return (
    <Container>
      <Logo>Google</Logo>

      <SearchBarWrapper focused={inputFocused} onSubmit={handleSubmit}>
        <IoSearch color="#b0b0b0" size={20} />

        <SearchInput
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <IconButton
          type="button"
          onClick={() => {
            if (isListening) {
              stopListening();
            } else {
              startListening();
              setIsMicOpen(true); 
            }
          }}
          // onClick={() => setIsMicOpen(true)}
          isActive={isListening}
        >
          <FiMic color={isListening ? "#4285f4" : "#ffff"} />
        </IconButton>
        <IconButton type="button" onClick={onImageSearchClick}>
          <FiCamera color="#ffff" />
        </IconButton>
      </SearchBarWrapper>

      {searchTerm && (
        <SuggestionBox>
          <SuggestionHeader>
            <span>Recent searches</span>
            <span style={{ cursor: "pointer" }}>MANAGE HISTORY</span>
          </SuggestionHeader>
          {filteredSuggestions.map((suggestion, index) => (
            <SuggestionItem key={index}>
              <WiTime4 color="#9aa0a6" size={16} />
              <SuggestionText>{suggestion}</SuggestionText>
            </SuggestionItem>
          ))}
        </SuggestionBox>
      )}
      

      <IconsWrapper>
        <IconButtonRounded bg="#5f5b32">
          <LuFileSearch />
        </IconButtonRounded>
        <IconButtonRounded bg="#353a5d">
          <MdTranslate />
        </IconButtonRounded>
        <IconButtonRounded bg="#2e4435">
          <FaGraduationCap />
        </IconButtonRounded>
        <IconButtonRounded bg="#582f30">
          <IoIosMusicalNote />
        </IconButtonRounded>
      </IconsWrapper>

      {isMicOpen && (
        <MicScreenWrapper onClick={() => setIsMicOpen(false)}>
          <MicText>{transcript ? transcript : "Speak now"}</MicText>
          {isListening ? (
            <DotContainer>
              <Dot color="blue" />
              <Dot color="red" />
              <Dot color="yellow" />
              <Dot color="green" />
            </DotContainer>
          ) : (
            <MicText>Tap the mic</MicText>
          )}
          <button style={{
            background: 'transparent',
            border: '1px solid #9aa0a6',
            padding: '8px 16px',
            color: '#9aa0a6',
            borderRadius: '20px',
            marginTop: '20px',
            cursor: 'pointer'
          }}>🎵 Search a song</button>
        </MicScreenWrapper>
      )}
      
      <FeedList />
    </Container>
  );
};

export default SearchBar;
