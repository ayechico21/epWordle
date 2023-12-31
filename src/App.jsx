import Header from "./components/Header";
import Game from "./components/Game";
import React from "react";
import AppProvider from "./components/Providers/AppProvider";
import { styled } from "styled-components";

function App() {
  return (
    <Wrapper>
      <AppProvider>
        <Header />
        <Game />
      </AppProvider>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1200px; /**clamp width of container */
  margin: 0 auto; /**center container */
  padding: 8px;
`;
export default App;
