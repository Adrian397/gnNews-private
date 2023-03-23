import GlobalStyles from "@globalStyles";
import { Router } from "@routes/Router";
import { ReactElement } from "react";

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
