import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import LeftSidebar from "./layouts/sidebar";
import Home from "./pages/home";
import Analytics from "./pages/analytics";
import Reports from "./pages/reports";
import styled from "styled-components";

const MainContent = styled.div`
  margin-top: 2%;
  width: 100%;

  @media (min-width: 600px) {
   padding-left: 6%;
  }

  @media (min-width: 1200px) {
    padding-left: 4%;
  }
`;

const App = () => {
  return (
    <Router>
      <Header />
      <LeftSidebar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </MainContent>
    </Router>
  );
};

export default App;
