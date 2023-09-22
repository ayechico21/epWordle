import React from "react";
import { X as Close } from "react-feather";

import { styled, keyframes } from "styled-components";
import { COLORS } from "../../constants";

function Modal({ handleDismiss, children }) {
  const [isShowing, setIsShowing] = React.useState(true);

  /**Enable animation when component unmounts */
  const animationDuration = 700;
  const smoothlyDismiss = () => {
    setIsShowing(false);
    setTimeout(() => {
      setIsShowing(true); /**default state */
      handleDismiss();
    }, animationDuration);
  };

  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeydown);

    /**CleanUp Function */
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleDismiss]);
  return (
    <Wrapper
      $isShowing={isShowing}
      style={{ "--animation-duration": `${animationDuration / 1000}s` }}
    >
      {/**Transcient prop $, not passed onto  DOM */}
      <BackDrop onClick={smoothlyDismiss} />
      <Dialog>
        <Button onClick={smoothlyDismiss}>
          <Close />
        </Button>
        {children}
      </Dialog>
    </Wrapper>
  );
}

const enter = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const exit = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

const Wrapper = styled.div`
  position: fixed;
  inset: 0; /**All dir{T,R,B,L} => 0 */

  /**Center element */
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${(props) => (props.$isShowing ? enter : exit)}
    var(--animation-duration) linear forwards;
`;
const BackDrop = styled.div`
  position: absolute;
  inset: 0;
  background: hsl(0deg 0% 0% / 0.75);
`;
const Dialog = styled.div`
  border: 6px groove ${COLORS.primaryTheme};
  position: relative;
  padding: 16px;
  background-color: hsl(0, 0%, 100%);
`;
const Button = styled.button`
  position: absolute;
  top: -48px;
  right: -16px;
  padding: 16px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: hsl(0, 0%, 100%);
  transition: All 0.2s;
  &:hover {
    transform: scale(1.5) rotate(90deg);
  }
`;
export default Modal;
