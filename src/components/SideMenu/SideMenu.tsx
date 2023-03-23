import { ReactElement } from "react";
import Flags from "react-world-flags";
import { Wrapper } from "./SideMenu.styled";
import { countries } from "./SideMenu.utils";

export const SideMenu = (): ReactElement => {
  return (
    <Wrapper>
      <ul>
        {countries.map((country) => (
          <li key={country.code}>
            <Flags code={country.code} />
            {country.name}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
