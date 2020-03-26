import React from 'react';
import './App.css';
import * as Styled from './styled';

function App() {
  return (
    <Styled.Page>
      <Styled.Header></Styled.Header>
      <Styled.Body>
        <Styled.ClassList>
          <Styled.ClassListHeader>My Classes</Styled.ClassListHeader>
          <Styled.ClassButton active>First Period</Styled.ClassButton>
          <Styled.ClassButton>Second Period</Styled.ClassButton>
          <Styled.ClassButton>Third Period</Styled.ClassButton>
          <Styled.ClassButton>Fifth Period</Styled.ClassButton>
          <Styled.ClassButton>Sixth Period</Styled.ClassButton>
          <Styled.ClassButton>Homeroom</Styled.ClassButton>
          <Styled.ClassButton>Study Hall</Styled.ClassButton>
        </Styled.ClassList>
      </Styled.Body>
      <Styled.Footer></Styled.Footer>
    </Styled.Page>
  );
}

export default App;
