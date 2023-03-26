import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./NewsHeader.styled";

export const NewsHeader = (): ReactElement => {
  const { country } = useParams();

  return (
    <Wrapper>
      <h3>
        You are currently viewing news of: <span>{country}</span>
      </h3>
    </Wrapper>
  );
};
