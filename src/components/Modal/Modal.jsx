import React from "react";
import { X as Close } from "react-feather";

import { styled } from "styled-components";

function Modal({ handleDismiss, children }) {
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
    <Wrapper>
      <BackDrop onClick={handleDismiss} />
      <Dialog>
        <Button onClick={handleDismiss}>
          <Close />
        </Button>
        {children}
      </Dialog>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  inset: 0; /**All dir{T,R,B,L} => 0 */

  /**Center element */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackDrop = styled.div`
  position: absolute;
  inset: 0;
  background: hsl(255deg 52% 68% / 0.75);
`;
const Dialog = styled.div`
  border: 2px dotted green;
  position: relative;
  padding: 16px;
  background-color: hsl(0, 0%, 100%);
  max-width: 400px;
`;
const Button = styled.button`
  position: absolute;
  top: -48px;
  right: -16px;
  padding: 16px;
  cursor: pointer;
  background: transparent;
  border: none;
`;
export default Modal;
