import React from "react";
import { ToastContext } from "../Providers/ToastProvider";
import { styled, keyframes } from "styled-components";
import Toast from "./Toast";
import { AppContext } from "../Providers/AppProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  const { setIsGameOn } = React.useContext(AppContext);
  const handleActionButtonClick = () => setIsGameOn(false); /**action function*/

  return (
    <Wrapper>
      {toasts.map(({ id, message, variant, action }) => {
        return (
          <ToastWrapper key={id}>
            <Toast
              message={message}
              variant={variant}
              id={id}
              handleActionButtonClick={action ? handleActionButtonClick : null}
            />
          </ToastWrapper>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.ol`
  position: absolute;
  right: 0;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  list-style-type: none;
`;

const slideIn = keyframes`
from {
      transform: translateX(calc(100% + 64px));
    }`;
const slideOut = keyframes`from {
  transform: translateX(-(calc(100% + 64px)));
}`;

const ToastWrapper = styled.li`
  /* animation: ${slideIn} 1s cubic-bezier(0, 0.46, 0, 1.04) both;
  will-change: transform; */
`;
export default ToastShelf;
