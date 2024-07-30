import styled from "styled-components";
import { colors } from "../../styles.ts";

export const ContainerFooter = styled.div`
  background-color: ${colors.rosaClaro};
  width: 100%;
  height: 283px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerP = styled.p`
  font-size: 13px;
  color: ${colors.pink};
  text-align: center;
  margin-top: 70px;
`;

export const RedesSociais = styled.ul`
  display: flex; 
  padding: 0;
  margin: 0;
  justify-content: center; 
  gap: 15px;
`;

export const RedesSociaisItem = styled.li`
  display: flex;
  align-items: center;
`;