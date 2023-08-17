import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";
import { Info, RefreshCw, Settings } from "react-feather";
import IconButton from "../IconButton";

function Header() {
  return (
    <Wrapper>
      <IconButton icon={<Info />} />
      <Heading>Wordle</Heading>
      <IconButton icon={<Settings />} />
      <IconButton icon={<RefreshCw />} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 2px solid ${COLORS.primaryTheme};
`;
const Heading = styled.h1`
  margin: 0 auto;
`;
export default Header;
