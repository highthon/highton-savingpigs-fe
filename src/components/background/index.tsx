import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function Background({ children }: Props) {
  return <TotalWrapper>{children}</TotalWrapper>;
}

export default Background;

const TotalWrapper = styled.div`
  width: 390px;
  height: 844px;
  position: relative;
`;
