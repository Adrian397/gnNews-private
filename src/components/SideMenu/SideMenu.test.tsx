import { store } from "@redux/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { SideMenu } from "./SideMenu";
import { countries } from "./SideMenu.utils";

describe("SideMenu", () => {
  it("renders successfully", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SideMenu />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("SideMenu")).toBeInTheDocument();
  });

  it("renders the correct number of countries", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SideMenu />
        </MemoryRouter>
      </Provider>
    );

    const countryItems = screen.getAllByTestId("ListItem");
    expect(countryItems.length).toEqual(countries.length);
  });
});
