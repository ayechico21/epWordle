import React from "react";
import { styled } from "styled-components";

function IconButton({ icon, ...delegated }) {
  return (
    <Icon {...delegated}>
      <SpanIcon>{icon}</SpanIcon>
    </Icon>
  );
}
const Icon = styled.button`
  --size: 40px;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  cursor: pointer;
  transform: rotate(45deg);
  transition: All 0.2s;
  &:hover {
    transform: scale(1.2) rotate(45deg);
  }
`;

const SpanIcon = styled.span`
  /**keep position of icon same */
  display: block;
  transform: rotate(-45deg);
`;
export default IconButton;
