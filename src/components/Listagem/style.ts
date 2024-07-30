import styled from "styled-components";
import { colors } from "../../styles.ts";
import { TagContainer } from "../Tag/style.ts";

export const Card = styled.div`
  color: ${colors.pink};
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

export const CardContainer = styled.div`
  width: 472px;
  border-left: 2px solid ${colors.pink};
  border-right: 2px solid ${colors.pink};
  border-bottom: 2px solid ${colors.pink};
  margin-top: 40px;
  position: relative;

  ${TagContainer} {
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 1;
  }

  #destaque {
    margin-right: 70px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  span {
    color: yellow;
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const CardButton = styled.button`
  font-size: 14px;
  padding: 4px 6px;
  background-color: ${colors.pink};
  border: none;
  color: white;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: ${colors.rosaMedio};
  }
`;
