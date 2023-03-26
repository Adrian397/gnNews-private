import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 1rem;

  h3 {
    color: #333;

    span {
      color: #89cff0;
    }
  }
`;

// export const SortBy = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 2rem;

//   h3 {
//     margin-right: 1rem;
//   }
// `;

// export const MenuDropdown = styled.div<StyledProps>`
//   position: relative;

//   button {
//     display: flex;
//     align-items: center;
//     background-color: white;
//     color: #333;
//     border: 2px solid #333;
//     padding: 0.4rem 0.5rem;
//     border-radius: 4px;
//     cursor: pointer;
//     font-weight: bold;

//     img {
//       width: 17px;
//       height: 17px;
//       margin-left: 0.5rem;
//       transform: ${({ isVisible }) =>
//         isVisible ? "rotate(180deg)" : "rotate(0deg)"};
//       transition: transform 120ms ease;
//     }
//   }

//   div {
//     position: absolute;
//     width: 100%;
//     bottom: -3rem;

//     button {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       width: 100%;
//       padding: 0.4rem 0rem;
//     }

//     button:first-child {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;
