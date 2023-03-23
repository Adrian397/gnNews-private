import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import NewsCountry from "./NewsCountry/NewsCountry";
import NotFound from "./NotFound/NotFound";

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path={paths.root}>
          <Route element={<Home />} index />
          <Route element={<NewsCountry />} path={paths.countrySpecific} />
        </Route>
        <Route element={<NotFound />} path={paths.notFound} />
      </Routes>
    </BrowserRouter>
  );
};
