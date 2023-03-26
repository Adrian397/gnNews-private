import { LayoutOption, setLayoutOption } from "@redux/layout";
import { toggleIsOpen } from "@redux/sideMenu";
import { RootState } from "@redux/store";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Info, NewsView, Wrapper } from "./Header.styled";

export const Header = (): ReactElement => {
  const { option } = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

  const handleLayoutOptionChange = (newOption: LayoutOption) => {
    dispatch(setLayoutOption(newOption));
  };

  const handleClick = () => {
    dispatch(toggleIsOpen());
  };

  return (
    <Wrapper>
      <div>
        <button onClick={handleClick} />
        <NewsView>
          <input
            checked={option === "list"}
            id="list"
            name="switch"
            onChange={() => handleLayoutOptionChange("list")}
            type="radio"
          />
          <label htmlFor="list">List</label>
          <span />
          <input
            checked={option === "tiles"}
            id="tiles"
            name="switch"
            onChange={() => handleLayoutOptionChange("tiles")}
            type="radio"
          />
          <label htmlFor="tiles">List</label>
        </NewsView>
      </div>
      <h1>
        <a href={paths.root}>
          gn<span>News</span>
        </a>
      </h1>
      <Info />
    </Wrapper>
  );
};
