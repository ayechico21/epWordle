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

function Toast({ message, variant, id }) {
  const { removeToast } = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant];
  const color = COLORS[variant].primary;
  const bgColor = COLORS[variant].secondary;
  return (
    <Wrapper style={{ "--color": color, "--color-bg": bgColor }}>
      <Icon />
      <Message>{message}</Message>
      <CloseButton onClick={() => removeToast(id)}>
        <X />
      </CloseButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  background-color: var(--color-bg);
  border-radius: 8px;
  color: var(--color);
`;
const Message = styled.p`
  flex: 1;
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
