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
  const Icon = ICONS_BY_VARIANT[variant];
  const { removeToast } = React.useContext(ToastContext);
  return (
    <Wrapper>
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
  background-color: hsl(343 21% 47%);
  border-radius: 8px;
  color: white;
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
`;
export default Toast;
