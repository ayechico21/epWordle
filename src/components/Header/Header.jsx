import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";
import { Info, RefreshCw, Settings } from "react-feather";
import IconButton from "../IconButton";
import Modal from "../Modal";
import { useToggle } from "../../hooks";

function Header() {
  const [isInfo, toggleInfo] = useToggle(false);
  const [isSettings, toggleSettings] = useToggle(false);
  const [isRefresh, toggleRefresh] = useToggle(false);
  return (
    <Wrapper>
      <IconButton icon={<Info />} onClick={toggleInfo} />
      <Heading>Wordle</Heading>
      <IconButton icon={<Settings />} onClick={toggleSettings} />
      {/* <IconButton icon={<RefreshCw />} onClick={toggleRefresh} /> */}

      {isInfo && (
        <Modal handleDismiss={toggleInfo}>
          <p>
            In Wordle, users have 6 attempts to guess a 5-letter word.
            You&apos;re helped along the way by ruling out letters that
            aren&apos;t in the word, and being told whether the correct letters
            are in the correct location or not.
          </p>
        </Modal>
      )}
      {isSettings && (
        <Modal handleDismiss={toggleSettings}>
          <p>SETTINGS</p>
        </Modal>
      )}
      {isRefresh && (
        <Modal handleDismiss={toggleRefresh}>
          <p>You sure you want to reload???</p>
          <button>Reload</button>
          <button onClick={toggleRefresh}>Cancel</button>
        </Modal>
      )}
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
