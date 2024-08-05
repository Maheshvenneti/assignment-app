import React from 'react';
import styled from 'styled-components';
import Home from "../components/home"

const PageContainer = styled.div`
  padding: 20px;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Home/>
    </PageContainer>
  );
};

export default HomePage;
