import { store } from "@redux/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Header } from "./Header";

describe("Header", () => {
  it("renders successfully", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByTestId("Header")).toBeInTheDocument();
  });

  it("toggles the side menu when clicking the burger button", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("Burger"));
    expect(store.getState().sideMenu.isOpen).toBe(true);
    fireEvent.click(screen.getByTestId("Burger"));
    expect(store.getState().sideMenu.isOpen).toBe(false);
  });

  it("changes the current language when selecting a different language from the dropdown", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("Language"));
    expect(store.getState().language.currentLanguage).toBe("pl");
    expect(screen.getByText("en")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("Language"));
    expect(store.getState().language.currentLanguage).toBe("en");
    expect(screen.getByText("pl")).toBeInTheDocument();
  });

  it("opens the info modal when clicking the info button", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("InfoModalBtn"));
    expect(screen.getByTestId("InfoModal")).toBeInTheDocument();
  });
});
