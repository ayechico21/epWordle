import React from "react";
import { ToastContext } from "../Providers/ToastProvider";
import { styled, keyframes } from "styled-components";
import Toast from "./Toast";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  const id = React.useId();
  let handleActionButtonClick = null;
  const doAction = () => console.log("Action to be done here");
  return (
    <Wrapper key={id}>
      {toasts.map(({ id, message, variant, action }) => {
        if (action) handleActionButtonClick = doAction;
        return (
          <ToastWrapper key={id}>
            <Toast
              message={message}
              variant={variant}
              id={id}
              handleActionButtonClick={handleActionButtonClick}
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
