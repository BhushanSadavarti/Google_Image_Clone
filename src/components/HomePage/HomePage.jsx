import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import RealtimeFeed from "./RealtimeFeed";
import { HomePageContainer } from "./styles";
import Header from "./TopBar/Header";
import SearchBar from "./SearchBar/SearchBar";
// import SearchBar from "./SearchBar";
import BottomNavBar from "./BottomNavBar/BottomNavBar";

export const HomePage = () => {
  const { isSignedIn, signIn, signOut } = useContext(AppContext);
  const navigate = useNavigate();

  const handleImageSearch = () => {
    navigate("/lens");
  };

  return (
    <HomePageContainer>
      <Header />
      <SearchBar onImageSearchClick={handleImageSearch} />
      <BottomNavBar />
    </HomePageContainer>
  );
};
