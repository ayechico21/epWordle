import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";

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
  border-bottom: 2px solid ${COLORS.primaryTheme};
`;

export default Header;
