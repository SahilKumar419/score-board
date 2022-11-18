import React from 'react';
import './App.css';
import StoryBoardComponent from './Component/organisms/StoryBoard';
import styled from 'styled-components';

const MainContainer = styled.div`
    background-color: #010101;
    padding:20px;
`

function App(): JSX.Element {
  return (
    <MainContainer>
      <StoryBoardComponent />
    </MainContainer>
  );
}

export default App;
