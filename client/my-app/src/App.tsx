import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import getData from './utils/getDataJSON';
import { Board } from './components/Board';
import dataContext from './components/Context';


const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData);
  }, []);

  return (
    <dataContext.Provider value={data}>
      <AppContainer className="App">
        <Header />
        <Board />
      </AppContainer>
    </dataContext.Provider>
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
