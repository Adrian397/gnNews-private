import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { NewsHeader } from "@components/NewsHeader/NewsHeader";
import { SideMenu } from "@components/SideMenu/SideMenu";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { MainContentWrapper, NewsWrapper } from "./Layout.styled";

const Layout = (): ReactElement => {
  return (
    <div>
      <Header />
      <MainContentWrapper>
        <SideMenu />
        <NewsWrapper>
          <NewsHeader />
          <Outlet />
          <Footer />
        </NewsWrapper>
      </MainContentWrapper>
    </div>
  );
};

export default Layout;
