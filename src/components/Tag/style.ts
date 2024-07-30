import styled from "styled-components";
import { colors } from "../../styles.ts";

export const TagContainer = styled.div`
  background-color: ${colors.pink};
  color: ${colors.branco};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  position: absolute; 
  top: 10px; 
  right: 15px; 
  z-index: 1;
`;
