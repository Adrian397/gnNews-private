import styled from "styled-components";

export const Wrapper = styled.div``;

export const List = styled.ul`
  height: calc(100vh - 229.78px);
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 80px;
  grid-row-gap: 1rem;
  list-style: none;
  padding: 0rem 1rem;
  padding-bottom: 1rem;
`;

export const ListItem = styled.li`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  cursor: pointer;
  border-radius: 4px;
  transition: box-shadow 240ms;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 2px;
  }
`;
