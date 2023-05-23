import Header from './components/Header';
import styled from 'styled-components';
import { Board } from './components/Board';
import { BoardsProvider } from './Context/Context';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './them';
import React, { Dispatch, SetStateAction, useState } from 'react';


const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

type TypeSetState<T> = Dispatch<SetStateAction<T>>

interface IContextTheme {
  theme: "light" | "dark";
  setTheme: TypeSetState<"light" | "dark">;
}

export const ThemeContext = React.createContext<IContextTheme>({ theme: "light", setTheme: () => { } });

function App() {

  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <BoardsProvider>
          <AppContainer className="App">
            <Header />
            <Board />
          </AppContainer>
        </BoardsProvider>
      </ThemeProvider>
    </ThemeContext.Provider>

  );
}

export default App;
