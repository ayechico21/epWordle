import React from "react";
import { styled } from "styled-components";

function Header() {
  return (
    <Wrapper>
      <h1>Wordle</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid hsl(240, 100%, 90%);
`;

export default Header;
