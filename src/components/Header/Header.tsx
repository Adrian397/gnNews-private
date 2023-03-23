import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { Info, NewsView, Wrapper } from "./Header.styled";

export const Header = (): ReactElement => {
  return (
    <Wrapper>
      <NewsView>
        <input checked id="list" name="switch" type="radio" />
        <label htmlFor="list">List</label>
        <span />
        <input id="tiles" name="switch" type="radio" />
        <label htmlFor="tiles">List</label>
      </NewsView>
      <h1>
        <a href={paths.root}>
          gn<span>News</span>
        </a>
      </h1>
      <Info />
    </Wrapper>
  );
};
