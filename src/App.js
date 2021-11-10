import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import AppNavigation from './components/AppNavigation/AppNavigation';
import Login from './modules/Login/Login';
import Home from './modules/Home/Home';

function App() {
  const [ token, setToken ] = useState(false);

  if (!token) return <Login setToken={ setToken } />

  return (
    <Container>
      <AppNavigation />
      <AppContent>
        <Routes>
          <Route
            path="/"
            element={ <Home /> }
          />
        </Routes>
      </AppContent>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex: 1;
`;
const AppContent = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;