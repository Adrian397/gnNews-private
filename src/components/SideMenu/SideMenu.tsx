import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Flags from "react-world-flags";
import { Wrapper } from "./SideMenu.styled";
import { countries } from "./SideMenu.utils";

export const SideMenu = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ul>
        {countries.map((country) => (
          /*eslint-disable*/
          <li
            key={country.code}
            onClick={() =>
              navigate(
                `/country/${country.name}?${new URLSearchParams({
                  code: country.code,
                })}`
              )
            }
          >
            <Flags code={country.code} />
            {country.name}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
