import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 82px);
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

export const List = styled.ul<StyledProps>`
  height: calc(100vh - 218px);
  overflow-y: auto;
  display: ${({ isLoading }) => (isLoading ? "" : "grid")};
  list-style: none;
  padding: 0rem 1rem;
  padding-bottom: 1rem;

  ${({ layout }) =>
    layout === "list"
      ? `
     grid-template-columns: 1fr;
     grid-auto-rows: 80px;
     grid-row-gap: 1rem;
    
  `
      : `
    grid-template-columns: repeat(6,1fr);
    grid-auto-rows: 250px;
    grid-gap: 1rem;

    @media (max-width: 1440px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 780px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 560px) {
      grid-template-columns: repeat(2, 1fr);
    }

    
  `}
`;

export const ListItem = styled.li<StyledProps>`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  cursor: pointer;
  border-radius: 4px;
  transition: box-shadow 240ms;
  padding-right: ${({ layout }) => (layout === "list" ? "1rem" : "")};
  display: flex;
  flex-direction: ${({ layout }) => (layout === "list" ? "row" : "column")};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 2px;
  }
`;

export const Photo = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ layout }) => (layout === "list" ? "1rem" : "")};

  ${({ layout, isVisible }) =>
    layout === "list" && isVisible
      ? `
    {
      width: 150px;
      height: 100%;
    }

    img {
      width: 150px;
      height: 100%;
      border-radius: 4px 0 0 4px;
    }
  `
      : layout === "list"
      ? `
    {
      width: 150px;
      height: 100%;
    }

    img {
      width: 64px;
      height: 64px;
    }
  `
      : ""}

  ${({ layout, isVisible }) =>
    layout === "tiles" && isVisible
      ? `

      {
        width: 100%;
        height: 100px;
      }
    img {
      width: 100%;
      height: 100px;
      border-radius: 4px 4px 0 0;
    }
  `
      : layout === "tiles"
      ? `

      {
        width: 100%;
        height: 100px;
      }
      
    img {
      width: 64px;
      height: 64px;
    }
  `
      : ""}
`;

export const Content = styled.div<StyledProps>`
  flex: 1;
  padding: 0.5rem 0rem 0.5rem 0rem;
  padding: ${({ layout }) =>
    layout === "list" ? "0.5rem 0rem 0.5rem 0rem" : "0.5rem"};
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: ${({ layout }) => (layout === "list" ? "row" : "column")};

  @media (max-width: 880px) {
    flex-direction: ${({ layout }) => layout === "list" && "column"};
  }

  h4 {
    color: #333;
    margin-bottom: ${({ layout }) => (layout === "list" ? "0.2rem" : "0.5rem")};
    font-size: ${({ layout }) => (layout === "list" ? "16px" : "14px")};
  }

  @media (max-width: 1650px) {
    h4 {
      font-size: ${({ layout }) => layout === "tiles" && "12px"};
    }
  }

  @media (max-width: 1450px) {
    h4 {
      font-size: ${({ layout }) => layout === "list" && "14px"};
    }
  }

  ${({ layout }) =>
    layout === "list" &&
    `
    @media (max-width: 650px) {
      h4 {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 350px;
      }
    }

    @media (max-width: 580px) {
      h4 {
       
        width: 300px;
      }
    }

    @media (max-width: 530px) {
      h4 {
       
        width: 250px;
      }
    }

    @media (max-width: 530px) {
      h4 {
       
        width: 280px;
      }
    }

    @media (max-width: 510px) {
      h4 {
       
        width: 260px;
      }
    }

    @media (max-width: 499px) {
      h4 {
       
        width: 200px;
      }
    }
  
  `}

  div:nth-of-type(1) {
    p {
      text-transform: uppercase;
      color: #524f4f;
      font-size: ${({ layout }) => (layout === "list" ? "16px" : "14px")};
    }

    @media (max-width: 1300px) {
      p {
        font-size: ${({ layout }) => layout === "tiles" && "12px"};
      }
    }

    @media (max-width: 1450px) {
      p {
        font-size: ${({ layout }) => layout === "list" && "14px"};
      }
    }

    @media (max-width: 880px) {
      p {
        font-size: ${({ layout }) => layout === "list" && "12px"};
      }
    }
  }

  & > p {
    font-size: 14px;

    span {
      color: #000080;
      margin-right: 5px;
    }

    @media (max-width: 1300px) {
      & {
        font-size: ${({ layout }) => layout === "tiles" && "12px"};
      }
    }

    @media (max-width: 1450px) {
      & {
        font-size: ${({ layout }) => layout === "list" && "12px"};
      }
    }
  }
`;
