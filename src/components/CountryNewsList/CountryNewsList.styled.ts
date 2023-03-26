import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 82px);
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  height: calc(100vh - 218px);
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 80px;
  grid-row-gap: 1rem;
  list-style: none;
  padding: 0rem 1rem;
  padding-bottom: 1rem;
`;

export const ListItem = styled.li<StyledProps>`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  cursor: pointer;
  border-radius: 4px;
  transition: box-shadow 240ms;
  padding-right: 1rem;
  display: flex;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 2px;
  }
`;

export const Photo = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 150px;
  margin-right: 1rem;

  ${({ isVisible }) =>
    isVisible
      ? `
    img {
      width: 150px;
      height: 100%;
      border-radius: 4px 0 0 4px;
    }
  `
      : `
    img {
      width: 64px;
      height: 64px;
    }
  `}
`;

export const Content = styled.div`
  flex: 1;
  padding: 0.5rem 0rem 0.5rem 0rem;
  display: flex;
  width: 100%;
  justify-content: space-between;

  h4 {
    color: #333;
    margin-bottom: 0.2rem;
  }

  div:nth-of-type(1) {
    p {
      text-transform: uppercase;
      color: #524f4f;
    }
  }

  & > p {
    font-size: 14px;

    span {
      color: #000080;
      margin-right: 5px;
    }
  }
`;
