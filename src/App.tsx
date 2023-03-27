import GlobalStyles from "@globalStyles";
import { Language, setCurrentLanguage } from "@redux/language";
import { Router } from "@routes/Router";
import i18n from "@utils/i18next";
import { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";

const App = (): ReactElement => {
  const dispatch = useDispatch();
  useEffect(() => {
    const language = localStorage.getItem("language") as Language;

    if (language) {
      dispatch(setCurrentLanguage(language));
      i18n.changeLanguage(language);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
