import { setIsClose } from "@redux/sideMenu";
import { RootState } from "@redux/store";
import { nanoid } from "@reduxjs/toolkit";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Flags from "react-world-flags";
import { Wrapper } from "./SideMenu.styled";
import { countries } from "./SideMenu.utils";

export const SideMenu = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "SideMenu" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state: RootState) => state.sideMenu);

  const handleCountryChoice = (name: string, code: string) => {
    navigate(
      `/country/${name}?${new URLSearchParams({
        code: code,
      })}`
    );
    dispatch(setIsClose());
  };

  return (
    <Wrapper isVisible={isOpen}>
      <ul>
        {countries.map((country) => (
          /*eslint-disable*/
          <li
            key={nanoid()}
            onClick={() => handleCountryChoice(country.name, country.code)}
          >
            <Flags code={country.code} />
            {t(country.code)}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
