import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchImage, setSearchImage] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const performSearch = (term) => {
    setLoading(true);

    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          title: "Result 1",
          description: "Description for result 1",
          imageUrl: "/api/placeholder/400/300",
        },
        {
          id: 2,
          title: "Result 2",
          description: "Description for result 2",
          imageUrl: "/api/placeholder/400/300",
        },
        {
          id: 3,
          title: "Result 3",
          description: "Description for result 3",
          imageUrl: "/api/placeholder/400/300",
        },
        {
          id: 4,
          title: "Result 4",
          description: "Description for result 4",
          imageUrl: "/api/placeholder/400/300",
        },
      ];
      setResults(mockResults);
      setLoading(false);
    }, 1000);
  };

  const performImageSearch = (imageData) => {
    setLoading(true);

    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          title: "Image Result 1",
          description: "Description for image result 1",
          imageUrl: "/api/placeholder/400/300",
        },
        {
          id: 2,
          title: "Image Result 2",
          description: "Description for image result 2",
          imageUrl: "/api/placeholder/400/300",
        },
        {
          id: 3,
          title: "Image Result 3",
          description: "Description for image result 3",
          imageUrl: "/api/placeholder/400/300",
        },
        {
          id: 4,
          title: "Image Result 4",
          description: "Description for image result 4",
          imageUrl: "/api/placeholder/400/300",
        },
      ];
      setResults(mockResults);
      setLoading(false);
    }, 1500);
  };

  const signIn = () => {
    setIsSignedIn(true);
  };

  const signOut = () => {
    setIsSignedIn(false);
  };

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchImage,
        setSearchImage,
        isSignedIn,
        results,
        loading,
        performSearch,
        performImageSearch,
        signIn,
        signOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
