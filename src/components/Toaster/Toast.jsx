import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { ToastContext } from "../Providers/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, id, handleActionButtonClick }) {
  const { removeToast } = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant];
  const color = COLORS[variant].primary;
  const bgColor = COLORS[variant].secondary;

  /**If game not over, remove toast after some time */
  if (!handleActionButtonClick) {
    const delay = 3000; /**toast display time => 3s  */
    setTimeout(() => {
      removeToast(id);
    }, delay);
  }
  return (
    <Wrapper style={{ "--color": color, "--color-bg": bgColor }}>
      <Icon />
      <Content>
        <Message>{message}</Message>
        {handleActionButtonClick && (
          <ActionButton
            style={{ "--color": color, "--color-bg": bgColor }}
            onClick={handleActionButtonClick}
          >
            Reset
          </ActionButton>
        )}
      </Content>
      <CloseButton onClick={() => removeToast(id)}>
        <X />
      </CloseButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  padding: 8px 16px;
  background-color: var(--color-bg);
  border-radius: 8px;
  color: var(--color);
`;
const Content = styled.div`
  padding: 0 5px;
`;
const Message = styled.p`
  text-align: center;
  flex: 1;
  color: black;
`;
const ActionButton = styled.button`
  width: 100%;
  background-color: var(--color-bg);
  border-color: var(--color);
`;
const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: hsl(0, 0%, 100%);
  padding: 0;
  cursor: pointer;
  color: inherit;
`;
export default Toast;
