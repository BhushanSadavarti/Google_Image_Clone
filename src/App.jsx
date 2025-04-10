import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import LensSearch from "./components/LensSearch/LensSeach";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import { AppProvider } from "./context/AppContext";
import "./styles.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lens" element={<LensSearch />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
