import React from "react";
import { styled } from "styled-components";

function IconButton({ icon, ...delegated }) {
  return <Icon {...delegated}>{icon}</Icon>;
}
const Icon = styled.button``;
export default IconButton;
