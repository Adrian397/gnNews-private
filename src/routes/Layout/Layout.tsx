import { Header } from "@components/Header/Header";
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
          <Outlet />
        </NewsWrapper>
      </MainContentWrapper>
    </div>
  );
};

export default Layout;
