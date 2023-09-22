import React from "react";
import { ToastContext } from "../Providers/ToastProvider";
import { styled, keyframes } from "styled-components";
import Toast from "./Toast";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <Wrapper>
      {toasts.map(({ id, message, variant }) => {
        return (
          <ToastWrapper key={id}>
            <Toast message={message} variant={variant} id={id} />
          </ToastWrapper>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.ol`
  position: absolute;
  right: 0;
  top: 50px;
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
  animation: ${slideIn} 1s cubic-bezier(0, 0.46, 0, 1.04) both;
  will-change: transform;
`;
export default ToastShelf;
