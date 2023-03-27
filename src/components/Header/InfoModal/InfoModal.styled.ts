import Close from "@assets/close.png";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2137;
`;

export const Modal = styled.div`
  width: 40rem;
  max-width: 95%;
  background-color: white;
  border-radius: 4px;
  padding: 1rem;

  div {
    height: 24px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.5rem;

    button {
      background: transparent url(${Close}) no-repeat center;
      width: 16px;
      height: 16px;
      background-size: 16px;
      border: none;
      display: flex;
      height: 100%;
      cursor: pointer;
    }
  }

  p {
    color: #333;
    line-height: 2;

    span {
      display: inline-block;
      background-color: #e3e6e8;
      padding: 0rem 0.5rem;
      height: 25px;
      font-size: 14px;
      border-radius: 4px;
      font-weight: 600;
    }
  }
`;
