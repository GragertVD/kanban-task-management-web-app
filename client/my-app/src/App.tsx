import Header from './components/Header';
import styled from 'styled-components';
import { Board } from './components/Board';
import { BoardsProvider } from './Context/Context';


const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function App() {

  return (
    <BoardsProvider>
      <AppContainer className="App">
        <Header />
        <Board />
      </AppContainer>
    </BoardsProvider>
  );
}

export default App;


// import React from 'react';
// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       Test
//     </div>
//   );
// }

// export default App;
