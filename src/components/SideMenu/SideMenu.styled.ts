import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 82px);
  width: 15rem;
  position: relative;
  overflow-y: scroll;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

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
