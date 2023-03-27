import Arrow from "@assets/arrow.png";
import { InfoModal } from "@components/Header/InfoModal/InfoModal";
import { setCurrentLanguage } from "@redux/language";
import { LayoutOption, setLayoutOption } from "@redux/layout";
import { toggleIsOpen } from "@redux/sideMenu";
import { RootState } from "@redux/store";
import i18n from "@utils/i18next";
import { paths } from "@utils/paths";
import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Burger, Info, NewsView, SideButtons, Wrapper } from "./Header.styled";

export const Header = (): ReactElement => {
  const [isVisible, setIsVisible] = useState({
    modal: false,
    dropdown: false,
  });

  const {
    language: { currentLanguage },
    layout: { option },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleLayoutOptionChange = (newOption: LayoutOption) => {
    dispatch(setLayoutOption(newOption));
  };

  const handleClick = () => {
    dispatch(toggleIsOpen());
  };

  const handleOpenModal = () => {
    setIsVisible({ ...isVisible, modal: true });
  };

  const handleOpenDropdown = () => {
    setIsVisible({ ...isVisible, dropdown: !isVisible.dropdown });
  };

  const handleLanguageChange = () => {
    if (currentLanguage === "en") {
      dispatch(setCurrentLanguage("pl"));
      i18n.changeLanguage("pl");
      localStorage.setItem("language", "pl");
    } else {
      dispatch(setCurrentLanguage("en"));
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }

    setIsVisible({ ...isVisible, dropdown: false });
  };

  return (
    <Wrapper>
      <div>
        <Burger onClick={handleClick} />
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
      <SideButtons isVisible={isVisible.dropdown}>
        <div>
          <button onClick={handleOpenDropdown}>
            {currentLanguage} <img src={Arrow} />
          </button>
          <div>
            <button onClick={handleLanguageChange}>
              {currentLanguage === "en" ? "pl" : "en"}
            </button>
          </div>
        </div>

        <Info onClick={handleOpenModal} />
      </SideButtons>
      {isVisible.modal && <InfoModal onModalVisibilityChange={setIsVisible} />}
    </Wrapper>
  );
};
