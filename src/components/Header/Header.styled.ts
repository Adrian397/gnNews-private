import Hamburger from "@assets/hamburger.svg";
import Information from "@assets/information.png";
import ListBlack from "@assets/list-black.svg";
import ListWhite from "@assets/list-white.svg";
import TileBlack from "@assets/tile-black.png";
import TileWhite from "@assets/tile-white.png";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #89cff0;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      display: none;
      padding: 1rem;
      background-color: transparent;
      border: 2px solid #333;
      background: url(${Hamburger}) no-repeat center;
      background-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
    }

    @media (max-width: 1030px) {
      button {
        display: block;
      }
    }
  }

  h1 {
    font-size: 2.5rem;

    a {
      color: #333;
      font-style: italic;
      text-decoration: none;
    }

    span {
      color: #89cff0;
    }
  }
`;

export const Info = styled.button`
  background: transparent url(${Information}) no-repeat center;
  border: none;
  background-size: 32px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const NewsView = styled.div`
  width: max-content;
  padding: 0rem 0.2rem;
  border: 2px solid #333;
  border-radius: 4px;
  height: 33px;
  display: flex;
  align-items: center;
  position: relative;

  input {
    position: absolute;
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  }

  label {
    color: rgba(0, 0, 0, 0) !important;
    border-radius: 2px;
    padding: 0.1rem 0rem;
    user-select: none;
    cursor: pointer;
  }

  input:checked + label {
    background-color: #333 !important;
  }

  label:nth-of-type(1) {
    background: transparent url(${ListBlack}) no-repeat center;
    background-size: 17px;
  }

  input:checked + label:nth-of-type(1) {
    background: transparent url(${ListWhite}) no-repeat center;

    background-size: 17px;
  }

  label:nth-of-type(2) {
    background: transparent url(${TileBlack}) no-repeat center;

    background-size: 17px;
  }

  input:checked + label:nth-of-type(2) {
    background: transparent url(${TileWhite}) no-repeat center;
    background-size: 17px;
  }

  span {
    display: inline-block;
    background-color: #333;
    width: 1.5px;
    height: 75%;
    margin: 0rem 0.3rem;
  }
`;
