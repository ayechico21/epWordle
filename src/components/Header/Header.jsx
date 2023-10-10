import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";
import { Info, RefreshCw, Settings } from "react-feather";
import IconButton from "../IconButton";
import Modal from "../Modal";
import { useToggle } from "../../hooks";
import SettingsModal from "../Modals/SettingsModal";
import InfoModal from "../Modals/InfoModal";
import { AppContext } from "../Providers/AppProvider";
import useSound from "use-sound";
import { abort, singleTick } from "../../sounds";
function Header() {
  const { setGameStatus } = React.useContext(AppContext);
  const [isInfo, toggleInfo] =
    useToggle(false); /**vy default, Modal is not shown */
  const [isSettings, toggleSettings] = useToggle(false);

  const [singleTickSound] = useSound(singleTick);
  const [abortSound] = useSound(abort, { volume: 1 });

  return (
    <Wrapper>
      <IconButton
        icon={<Info />}
        onClick={() => {
          singleTickSound();
          toggleInfo();
        }}
      />
      <Heading>Wordle</Heading>
      <IconButton
        icon={<Settings />}
        onClick={() => {
          singleTickSound();
          toggleSettings();
        }}
      />
      <IconButton
        icon={<RefreshCw />}
        onClick={() => {
          abortSound();
          setGameStatus("end");
        }}
      />

      {isInfo && (
        <Modal handleDismiss={toggleInfo}>
          <InfoModal />
        </Modal>
      )}
      {isSettings && (
        <Modal handleDismiss={toggleSettings}>
          <SettingsModal handleDismiss={toggleSettings} />
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

  @media (max-width: 450px) {
    gap: 10px;
  }
`;
const Heading = styled.h1`
  margin: 0 auto;
`;
export default Header;
