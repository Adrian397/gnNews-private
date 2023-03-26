import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const Wrapper = styled.div<StyledProps>`
  height: calc(100vh - 82px);
  width: 13.5rem;
  overflow-y: scroll;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow-y: scroll;
  transition: all 0.3s ease;

  @media (max-width: 1030px) {
    width: 0;

    ${({ isVisible }) =>
      isVisible &&
      `
     position: fixed;
     top: 82px;
     left: 0;
     width: 100%;
     background-color: white;
    `}
  }

  li {
    padding: 1rem;
    cursor: pointer;
    color: #333;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #333;

    img {
      height: 24px;
      width: 24px;
    }

    img {
      margin-right: 1rem;
    }

    &:last-child {
      border: none;
    }

    &:hover {
      font-weight: bold;
    }
  }
`;
