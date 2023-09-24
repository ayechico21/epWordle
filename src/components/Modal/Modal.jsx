import React from "react";
import { X as Close } from "react-feather";

import { styled, keyframes } from "styled-components";
import { COLORS } from "../../constants";

function Modal({ handleDismiss, children }) {
  const [isShowing, setIsShowing] = React.useState(true);

  /**Enable animation when component unmounts */
  const animationDuration = 700;
  const smoothlyDismiss = React.useCallback(() => {
    setIsShowing(false);
    setTimeout(() => {
      setIsShowing(true); /**default state */
      handleDismiss(); /**exit function */
    }, animationDuration);
  }, [handleDismiss]);

  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        smoothlyDismiss();
      }
    };
    window.addEventListener("keydown", handleKeydown);

    /**CleanUp Function */
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [smoothlyDismiss]);
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

/**animations */
const enter = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;
const exit = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

const Wrapper = styled.div`
  position: fixed; /**component on window screen */
  inset: 0; /**All dir{T,R,B,L} => 0 => center */

  /**Center element */
  display: flex;
  justify-content: center;
  align-items: center;

  /**choose animation based on prop passed */
  animation: ${(props) => (props.$isShowing ? enter : exit)}
    var(--animation-duration) linear forwards;
`;

/**background container to fill the screen */
const BackDrop = styled.div`
  position: absolute; /**component on nearest positioned parent component */
  inset: 0; /**All dir{T,R,B,L} => 0  => center*/
  background: hsl(0deg 0% 0% / 0.75);
`;

/**Modal screen */
const Dialog = styled.div`
  border: 6px groove ${COLORS.primaryTheme};
  position: relative; /**positioned element, positioning of child Button depends on this */
  padding: 16px;
  background-color: hsl(0, 0%, 100%);
`;

const Button = styled.button`
  position: absolute; /**take element out of flow, allows postioning according to parent Dialog{nearest positioned} */
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
