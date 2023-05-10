import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import getData from './utils/getDataJSON';
import { Board } from './components/Board';
import { SelectBoardProvider } from './Context/Context';


const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;


function App() {
  // const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);


  return (
    <SelectBoardProvider>
      <AppContainer className="App">
        <Header />
        <Board />
      </AppContainer>
    </SelectBoardProvider>
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
